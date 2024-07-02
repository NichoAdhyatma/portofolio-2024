import NikoMoodLogo from "@/assets/niko-mood-logo.webp";
import SeciNoteLogo from "@/assets/seci_note.png";
import Image from "next/image";
import ReactLogo from "@/assets/react.png";
import FlutterLogo from "@/assets/flutter_2.png";
import LaravelLogo from "@/assets/laravel.svg";
import MySQLLogo from "@/assets/mysql.png";
import DailyPlanLogo from "@/assets/daily-plan.svg";
import NextJSLogo from "@/assets/nextjs.png";
import {BsBrowserChrome} from "react-icons/bs";
import {IoLogoGooglePlaystore} from "react-icons/io5";
import {PortofolioCard} from "@/components/molecules/PortofolioCard";

const portfolioItems = [
    {
        title: "Niko Mood",
        description: "Niko Mood is a mood tracking application that helps you monitor and record changes in your mood over time.",
        logo: <Image src={NikoMoodLogo} alt="niko-mood-logo" width={50} height={50}/>,
        techStack: [
            {
                title: "Frontend Web - React JS",
                description: "Web app framework for building dynamic interfaces.",
                logo: <Image src={ReactLogo} alt="react-logo" width={30} height={30}/>,
            },
            {
                title: "Frontend Mobile - Flutter",
                description: "Toolkit for crafting cross-platform mobile apps.",
                logo: <Image src={FlutterLogo} alt="flutter-logo" width={35} height={35}/>,
            },
            {
                title: "Backend - Laravel",
                description: "PHP framework for modern web applications.",
                logo: <Image src={LaravelLogo} alt="laravel-logo" width={30} height={30}/>,
            },
            {
                title: "Database - MySQL",
                description: "Popular relational database management system.",
                logo: <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35}/>,
            },
        ],
        links: [
            {
                title: "Niko Mood Web App",
                logo: <BsBrowserChrome size={20}/>,
                href: "https://nikomood.com",
            },
            {
                title: "Niko Mood Store Page",
                logo: <IoLogoGooglePlaystore size={22}/>,
                href: "https://play.google.com/store/apps/details?id=com.agilepdbl.hl3_moodtracker&hl=en_US",
            },
        ],
    },
    {
        title: "Seci Note",
        description: "SeciNote is an online note-taking application equipped with AI features and text to voice conversion.",
        logo: <Image src={SeciNoteLogo} alt="seci-note-logo" width={50} height={50}/>,
        techStack: [
            {
                title: "Frontend Web - React JS",
                description: "Web app framework for building dynamic interfaces.",
                logo: <Image src={ReactLogo} alt="react-logo" width={30} height={30}/>,
            },
            {
                title: "Frontend Mobile - Flutter",
                description: "Toolkit for crafting cross-platform mobile apps.",
                logo: <Image src={FlutterLogo} alt="flutter-logo" width={35} height={35}/>,
            },
            {
                title: "Backend - Laravel",
                description: "PHP framework for modern web applications.",
                logo: <Image src={LaravelLogo} alt="laravel-logo" width={30} height={30}/>,
            },
            {
                title: "Database - MySQL",
                description: "Popular relational database management system.",
                logo: <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35}/>,
            },
        ],
        links: [
            {
                title: "Seci Note Web App",
                logo: <BsBrowserChrome size={20}/>,
                href: "https://notetaker-staging.agileteknik.com/landing-page",
            },
            {
                title: "Seci Note Store Page",
                logo: <IoLogoGooglePlaystore size={22}/>,
                href: "https://play.google.com/store/apps/details?id=com.agilepdbl.note_taker",
            },
        ],
    },
    {
        title: "Daily Plan",
        description: "Daily Plan is a daily planner application that helps you organize your daily habits and set reminders.",
        logo: <Image src={DailyPlanLogo} alt="daily-plan-logo" width={50} height={50}/>,
        techStack: [
            {
                title: "Frontend Web - Next JS",
                description: "Framework for dynamic web interfaces.",
                logo: <Image src={NextJSLogo} alt="react-logo" width={50} height={50}/>,
            },
            {
                title: "Frontend Mobile - Flutter",
                description: "Toolkit for crafting cross-platform mobile apps.",
                logo: <Image src={FlutterLogo} alt="flutter-logo" width={35} height={35}/>,
            },
            {
                title: "Backend - Laravel",
                description: "PHP framework for modern web applications.",
                logo: <Image src={LaravelLogo} alt="laravel-logo" width={30} height={30}/>,
            },
            {
                title: "Database - MySQL",
                description: "Popular relational database management system.",
                logo: <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35}/>,
            },
        ],
        links: [
            {
                title: "Daily Plan Web App",
                logo: <BsBrowserChrome size={20}/>,
                href: "https://dailyplanapp.agileteknik.com/",
            },
            {
                title: "Daily Plan Store Page",
                logo: <IoLogoGooglePlaystore size={22}/>,
                href: "https://play.google.com/store/apps/details?id=com.agileteknik.dailyplan",
            },
        ],

    }
];

export default function Portofolio() {
    return (
        <div className="flex flex-col gap-5 w-full my-4">
            <p className="text-2xl font-bold mb-2 underline">Portofolio </p>
            {portfolioItems.map((item, index) => (
                <PortofolioCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    logo={item.logo}
                    techStack={item.techStack}
                    links={item.links}
                />
            ))}
        </div>
    );
}
