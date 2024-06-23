import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import GmailIcon from "@/assets/gmail.png";
import LinkedinIcon from "@/assets/linkedin.png";
import GitHubLogoIcon from "@/assets/github.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Contact } from "@/core/types/Contact";
import { useToast } from "@/components/ui/use-toast";

const contacts: Contact[] = [
  {
    label: "+628888526937",
    icon: <BsFillTelephoneFill />,
  },
  {
    label: "nicholaus7873@gmail.com",
    icon: <Image src={GmailIcon} width={25} alt="gmail-icon" />,
  },
  {
    label: "Nicholaus Adhyatma Surya Kusuma",
    icon: <Image src={LinkedinIcon} width={25} alt="gmail-icon" />,
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
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-2 max-w-[80vw] md:max-w-[100vw] w-full">
      <p className="text-2xl font-bold mb-2 underline">About Me</p>
      <h1 className="text-xl">Nicholaus Adhyatma Surya Kusuma</h1>

      <ScrollArea className="w-full whitespace-nowrap">
        {contacts.map((contact, index) => (
          <Button
            key={index * Math.random()}
            variant={"ghost"}
            icon={contact.icon}
            onClick={
              !contact.href
                ? async () => {
                    await navigator.clipboard.writeText(contact.label);
                    toast({
                      description: "Copied to clipboard",
                    });
                  }
                : () => {}
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <p className="mt-3 font-normal text-sm break-words whitespace-normal">
        Passionate <strong className="italic">Software Developer</strong> with a
        focus on mobile and web frontend development. Currently a 6th-semester
        student at{" "}
        <span className="font-bold italic">
          Politeknik Elektronika Negeri Surabaya, majoring in Informatics
          Engineering
        </span>
        . Proven ability to create captivating user interfaces and deliver
        high-quality software solutions. Experienced in agile development
        environments with a strong track record of project completions and
        impactful contributions.
      </p>
    </div>
  );
}
