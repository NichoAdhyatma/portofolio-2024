import {Button} from "@/components/atoms/button";
import {MdAttachEmail} from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/atoms/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/atoms/form";

import {useForm} from "react-hook-form";

import {z} from "zod";

import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/atoms/input";
import {Textarea} from "@/components/atoms/textarea";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import {useToast} from "@/components/atoms/use-toast";


const contactSchema = z.object({
    name: z.string().min(4,
        {
            message: "Name must be at least 4 characters."
        }),
    email: z.string().email(),
    message: z.string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(1000, {
            message: "Message must not be longer than 1000 characters.",
        }),
});


export function ContactMe() {
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof contactSchema>>(
        {
            resolver: zodResolver(contactSchema),
        }
    );

    const {toast} = useToast();

    const sendMessage = async ({name, email, message}: z.infer<typeof contactSchema>) => {
        setLoading(true);
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
                from_name: name,
                from_email: email,
                to_name: "Nicholaus Adhyatma Surya Kusuma",
                reply_to: email,
                message,
            }).then(
            (response) => {
                toast({
                    title: "Success",
                    description: response.text,
                });
            },
            (error) => {
                toast({
                    title: "Failed",
                    description: error,
                });
            },
        );

        setOpen(false);
        setLoading(false);
    }

    return (
        <div className={"flex justify-start w-full"}>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button icon={<MdAttachEmail size={22}/>}>
                        Contact Me
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Contact Me</DialogTitle>
                        <DialogDescription>
                            Want to collaborate? Reach out today and {`let's`} create something amazing together.
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(sendMessage)} className="grid gap-4 py-2">
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
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Your Message"
                                                    minLength={10}
                                                    maxLength={1000}
                                                    className={"max-h-96"}
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage/>
                                        </FormItem>
                                }
                                name={"message"}
                            />

                            <Button disabled={loading} type="submit" className={"mt-4"}>Send Message</Button>
                        </form>

                    </Form>
                </DialogContent>
            </Dialog>

        </div>
    );
}