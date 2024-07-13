import {Button} from "@/components/atoms/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/atoms/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/atoms/form"
import {CiCoffeeCup} from "react-icons/ci";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {Input} from "@/components/atoms/input";
import {useToast} from "@/components/atoms/use-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/atoms/select"

import {useForm} from "react-hook-form";

import {z} from "zod";

const paymentSchema = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    price: z.string(),
});

export function BuyMeACoffee({variant = "outline", open, setOpen}: {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

}) {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof paymentSchema>>(
        {
            resolver: zodResolver(paymentSchema),
        }
    )
    const {toast} = useToast();

    const handlePayment = async ({name, email, price}: {
        name: string;
        email: string;
        price: string;
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
                    price: Number.parseInt(price),
                    quantity: 1,
                    customer_details: {
                        first_name: name,
                        email: email,
                    },
                }),
            });

            const data = await response.json();

            setOpen(false);

            await new Promise(resolve => setTimeout(resolve, 300));

            if (data.token) {
                window.snap.pay(data.token);
            } else {
                toast({
                    description: "Payment Failed",
                    variant: "destructive",
                })
            }
        } catch (error) {
            toast({
                description: `${error}`,
                variant: "destructive"
            })
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitPayment = (values: z.infer<typeof paymentSchema>) => {
        const {name, email, price} = values;

        handlePayment({name, email, price}).then(_ => {
            toast(
                {
                    description: "Payment process created!",
                    variant: "default"
                }
            )
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={variant} icon={<CiCoffeeCup/>}>
                    Buy Me a Coffee
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full z-50">
                <DialogHeader>
                    <DialogTitle>Buy me a Coffee</DialogTitle>
                    <DialogDescription>
                        Fill the form before go to payment
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form ref={formRef} onSubmit={form.handleSubmit(handleSubmitPayment)} className="grid gap-4 py-2">

                        <FormField
                            render={
                                ({field}) =>
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                            }
                            name={"name"}
                        />

                        <FormField
                            render={
                                ({field}) =>
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your email"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                            }
                            name={"email"}
                        />

                        <FormField
                            render={
                                ({field}) =>
                                    <FormItem>
                                        <FormLabel>Coffee Size</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a Cofee Size"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="500">Extra Small (XS) (Rp. 500)</SelectItem>
                                                <SelectItem value="5000">Small (S) (Rp. 5000)</SelectItem>
                                                <SelectItem value="15000">Medium (M) (Rp. 15.000)</SelectItem>
                                                <SelectItem value="25000">Large (L) (Rp. 25.000)</SelectItem>
                                                <SelectItem value="50000">Extra Large (XL) (Rp. 50.000)</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <FormMessage/>
                                    </FormItem>
                            }
                            name={"price"}
                        />

                        <Button disabled={loading} type="submit" className={"mt-4"}>Go to Payment</Button>

                    </form>
                </Form>


            </DialogContent>
        </Dialog>
    );
}
