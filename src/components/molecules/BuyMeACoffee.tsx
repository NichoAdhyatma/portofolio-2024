import {Button} from "@/components/atoms/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/atoms/dialog";
import {CiCoffeeCup} from "react-icons/ci";
import {Dispatch, FormEvent, SetStateAction, useRef, useState} from "react";
import {Label} from "@/components/atoms/label";
import {Input} from "@/components/atoms/input";
import {useToast} from "@/components/atoms/use-toast";

export function BuyMeACoffee({variant = "outline", open, setOpen}: {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
    open?: boolean,
    setOpen?: Dispatch<SetStateAction<boolean>>
}) {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const {toast} = useToast();

    const handlePayment = async ({name, email}: {
        name: string;
        email: string;
    }) => {
        setLoading(true);

        try {
            const response = await fetch("/api/snap", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: `order-${Date.now()}`,
                    productName: "Buy me a coffee",
                    price: 5000,
                    quantity: 1,
                    customer_details: {
                        first_name: name,
                        email: email,
                    },
                }),
            });

            const data = await response.json();

            if (data.token) {
                window.snap.pay(data.token);
            } else {
                toast({
                    description: "Payment Failed",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitPayment = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;

            handlePayment({name, email}).then(_ => {
                toast(
                    {
                        description: "Payment process created!",
                        variant: "default"
                    }
                )
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={variant} icon={<CiCoffeeCup/>}>
                    Buy Me a Coffee
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] z-50">
                <DialogHeader>
                    <DialogTitle>Fill Data</DialogTitle>
                    <DialogDescription>
                        Fill your data before proceeding to payment
                    </DialogDescription>
                </DialogHeader>

                <form ref={formRef} onSubmit={handleSubmitPayment} className="grid gap-4 py-4">
                    <div className="grid gap-4">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid gap-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Your email"
                            className="col-span-3"
                            required
                        />
                    </div>

                    <DialogFooter className={"mt-4"}>
                        <Button disabled={loading} type="submit">
                            Process Pay
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
