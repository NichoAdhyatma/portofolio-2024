import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CiCoffeeCup } from "react-icons/ci";
import { FormEvent, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function BuyMeACoffe() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePayment = async ({
    name,
    email,
  }: {
    name: string;
    email: string;
  }) => {
    setLoading(true);
    setOpen(false);
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
        console.error("Failed to get token");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;

      handlePayment({ name, email });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" icon={<CiCoffeeCup />}>
          Buy Me a Coffee
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Fill Data</DialogTitle>
          <DialogDescription>
            Fill your data before proceeding to payment
          </DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 py-4">
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

          <DialogFooter>
            <Button disabled={loading} type="submit">
              Pay Now
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
