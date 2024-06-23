import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiExternalLink } from "react-icons/fi";
import NikoMoodLogo from "@/assets/niko-mood-logo.webp";
import Image from "next/image";
import Link from "next/link";
import ReactLogo from "@/assets/react.png";
import FlutterLogo from "@/assets/flutter_2.png";
import LaravelLogo from "@/assets/laravel.svg";
import MySQLLogo from "@/assets/mysql.png";
import { BsBrowserChrome } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";

type CardProps = React.ComponentProps<typeof Card>;

interface PortofolioCardProps extends CardProps {
  title: string;
  logo?: ReactNode;
  description: string;
  links: {
    title: string;
    href: string;
    logo: ReactNode;
  }[];
  techStack: {
    title: string;
    logo?: ReactNode;
    description?: string;
  }[];
}

export function PortofolioCard({
  title,
  description,
  className,
  links,
  techStack,
  logo,
  ...props
}: PortofolioCardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-start space-x-4">
          <div className="ml-4 sm:ml-0">{logo}</div>
          <div className="flex flex-col space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <CardTitle>Link</CardTitle>
        {links.map((link, index) => (
          <Link
            key={index * Math.random()}
            className="flex items-center space-x-4 justify-between rounded-md border p-4 bg-secondary-background hover:bg-secondary"
            href={link.href}
            target="_blank"
          >
            <div className="flex items-center space-x-4">
              {link.logo}
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{link.title}</p>
                <p className="text-sm text-muted-foreground">{link.href}</p>
              </div>
            </div>
            <FiExternalLink />
          </Link>
        ))}

        <CardTitle>Tech Stack</CardTitle>
        <div className="flex flex-col gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-4 items-center p-4 rounded-md border bg-secondary"
            >
              {tech.logo}

              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{tech.title}</p>
                <p className="text-xs font-medium text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Portofolio() {
  return (
    <div className="flex flex-col gap-2 max-w-[80vw] md:max-w-[100vw] w-full my-4">
      <p className="text-2xl font-bold mb-2 underline">Portofolio </p>

      <PortofolioCard
        title={"Niko Mood"}
        description={
          "Niko Mood is a mood tracking application that helps you monitor and record changes in your mood over time."
        }
        logo={
          <Image
            src={NikoMoodLogo}
            alt="niko-mood-logo"
            width={50}
            height={50}
          />
        }
        techStack={[
          {
            title: "Frontend Web - React JS",
            description: "Web app framework for building dynamic interfaces.",
            logo: (
              <Image src={ReactLogo} alt="react-logo" width={30} height={30} />
            ),
          },
          {
            title: "Frontend Mobile - Flutter",
            description: "Toolkit for crafting cross-platform mobile apps.",
            logo: (
              <Image
                src={FlutterLogo}
                alt="flutter-logo"
                width={35}
                height={35}
              />
            ),
          },
          {
            title: "Backend - Laravel",
            description: "PHP framework for modern web applications.",
            logo: (
              <Image
                src={LaravelLogo}
                alt="laravel-logo"
                width={30}
                height={30}
              />
            ),
          },
          {
            title: "Database - MySQL",
            description: "Popular relational database management system.",
            logo: (
              <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35} />
            ),
          },
        ]}
        links={[
          {
            title: "Niko Mood Web App",
            logo: <BsBrowserChrome size={20} />,
            href: "https://nikomood.com",
          },
          {
            title: "Niko Mood Store Page",
            logo: <IoLogoGooglePlaystore size={22} />,
            href: "https://play.google.com/store/apps/details?id=com.agilepdbl.hl3_moodtracker&hl=en_US",
          },
        ]}
      />
    </div>
  );
}
