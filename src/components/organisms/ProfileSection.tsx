import React from "react";

import Image from "next/image";
import {Button} from "@/components/atoms/button";
import Link from "next/link";
import {BsFillTelephoneFill} from "react-icons/bs";
import GmailIcon from "@/assets/gmail.png";
import LinkedinIcon from "@/assets/linkedin.png";
import GitHubLogoIcon from "@/assets/github.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"
import {Contact} from "@/core/types/Contact";
import {useToast} from "@/components/atoms/use-toast";
import {ContactMe} from "@/components/molecules/ContactMe";

const contacts: Contact[] = [
    {
        label: "+628888526937",
        icon: <BsFillTelephoneFill/>,
    },
    {
        label: "nicholaus7873@gmail.com",
        icon: <Image src={GmailIcon} width={25} alt="gmail-icon"/>,
    },
    {
        label: "Nicholaus Adhyatma Surya Kusuma",
        icon: <Image src={LinkedinIcon} width={25} alt="gmail-icon"/>,
        href: "https://www.linkedin.com/in/nicholausadhyatma",
    },
    {
        label: "NichoAdhyatma",
        icon: (
            <Image
                className="bg-white rounded-full"
                src={GitHubLogoIcon}
                width={25}
                alt="gmail-icon"
            />
        ),
        href: "https://github.com/NichoAdhyatma",
    },
];

export default function ProfileSection() {
    const {toast} = useToast();

    return (
        <div className="flex flex-col gap-4 max-w-[90vw] md:max-w-[100vw] my-4 w-full">
            <p className="text-2xl font-bold mb-2 underline">About Me</p>

            <div className={"flex flex-wrap gap-4 items-center"}>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>ME</AvatarFallback>
                </Avatar>

                <div>
                    <h1 className="text-2xl font-bold">Nicholaus Adhyatma Surya Kusuma</h1>
                    <p className="text-md">Software Developer | Informatics Enginneering Student 👨‍💻</p>
                </div>
            </div>


            <div className="w-full flex gap-2 flex-wrap items-center">
                {contacts.map((contact, index) => (
                    <Button
                        key={index * Math.random()}
                        variant={"ghost"}
                        size={"sm"}
                        icon={contact.icon}
                        onClick={
                            !contact.href
                                ? async () => {
                                    await navigator.clipboard.writeText(contact.label);
                                    toast({
                                        description: "Copied to clipboard",
                                    });
                                }
                                : () => {
                                }
                        }
                    >
                        {contact.href ? (
                            <Link target="_blank" href={contact.href}>
                                {contact.label}
                            </Link>
                        ) : (
                            <p>{contact.label}</p>
                        )}
                    </Button>
                ))}

            </div>

            <p className="text-md">
                I am a software developer with a passion for learning new things and
                solving problems. I have experience in developing web and mobile
                applications using various technologies.
            </p>

            <ContactMe />
        </div>
    );
}
