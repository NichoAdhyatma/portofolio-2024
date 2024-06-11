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
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function BuyMeACoffe() {
  const [payment, setPayment] = useState(1);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" icon={<CiCoffeeCup />}>
          Buy Me a Coffee
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Fill Data</DialogTitle>
          <DialogDescription>
            fill your data before go to payment
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Your name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" placeholder="Your email" className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Pay Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
