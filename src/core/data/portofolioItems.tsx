import Image from "next/image";

import { BsBrowserChrome } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import ReactLogo from "@/assets/react.png";
import NextJSLogo from "@/assets/nextjs.png";
import LivewireLogo from "@/assets/livewire.svg";
import FlutterLogo from "@/assets/flutter_2.png";
import LaravelLogo from "@/assets/laravel.svg";
import MySQLLogo from "@/assets/mysql.png";
import ZustandLogo from "@/assets/zustand-logo.svg";

import NikoMoodLogo from "@/assets/niko-mood-logo.webp";

import NikoMoodBanner1 from "@/assets/niko-mood-banner-1.webp";
import NikoMoodBanner2 from "@/assets/niko-mood-banner-2.webp";
import NikoMoodBanner3 from "@/assets/niko-mood-banner-3.webp";
import NikoMoodBanner4 from "@/assets/niko-mood-banner-4.webp";

import SeciNoteLogo from "@/assets/seci_note.png";

import SeciNoteBanner1 from "@/assets/seci-note-banner-1.webp";
import SeciNoteBanner2 from "@/assets/seci-note-banner-2.webp";
import SeciNoteBanner3 from "@/assets/seci-note-banner-3.webp";
import SeciNoteBanner4 from "@/assets/seci-note-banner-4.webp";
import SeciNoteBanner5 from "@/assets/seci-note-banner-5.webp";

import DailyPlanLogo from "@/assets/daily-plan.svg";

import DailyPlanBanner1 from "@/assets/daily-plan-banner-1.webp";
import DailyPlanBanner2 from "@/assets/daily-plan-banner-2.webp";
import DailyPlanBanner3 from "@/assets/daily-plan-banner-3.webp";
import DailyPlanBanner4 from "@/assets/daily-plan-banner-4.webp";
import DailyPlanBanner5 from "@/assets/daily-plan-banner-5.webp";

import SeciMapLogo from "@/assets/secimap-logo.svg";

import SeciMapBanner1 from "@/assets/secimap-banner-1.webp";
import SeciMapBanner2 from "@/assets/secimap-banner-2.webp";
import SeciMapBanner3 from "@/assets/secimap-banner-3.webp";
import SeciMapBanner4 from "@/assets/secimap-banner-4.webp";
import SeciMapBanner5 from "@/assets/secimap-banner-5.webp";

import CleanMobileLogo from "@/assets/logo-long-cleanflutter.svg";

import CleanMobileBanner1 from "@/assets/clean-mobile-banner1.png";

export const portfolioItems = [
  {
    title: "Clean Mobile",
    description:
      "Clean Mobile is web app interface that helps to build mobile app with less code and generate good quality code with clean architecture",
    logo: (
      <Image
        src={CleanMobileLogo}
        alt="niko-mood-logo"
        width={50}
        height={50}
      />
    ),
    images: [CleanMobileBanner1],
    techStack: [
      {
        title: "Frontend Web - React JS",
        description: "Web app framework for building dynamic interfaces.",
        logo: <Image src={ReactLogo} alt="react-logo" width={35} height={35} />,
      },
      {
        title: "Zustand - State Management",
        description:
          "A simple and fast state management for React. for prototyping JSON",
        logo: (
          <Image src={ZustandLogo} alt="zustand-logo" width={35} height={35} />
        ),
      },
    ],
    links: [
      {
        title: "Clean Mobile Web App (Under Development)",
        logo: <BsBrowserChrome size={20} />,
        href: "https://cleanflutter.agileteknik.com/",
      },
    ],
  },
  {
    title: "Niko Mood",
    description:
      "Niko Mood is a mood tracking application that helps you monitor and record changes in your mood over time.",
    logo: (
      <Image src={NikoMoodLogo} alt="niko-mood-logo" width={50} height={50} />
    ),
    images: [
      NikoMoodBanner1,
      NikoMoodBanner2,
      NikoMoodBanner3,
      NikoMoodBanner4,
    ],
    techStack: [
      {
        title: "Frontend Web - React JS",
        description: "Web app framework for building dynamic interfaces.",
        logo: <Image src={ReactLogo} alt="react-logo" width={35} height={35} />,
      },
      {
        title: "Frontend Mobile - Flutter",
        description: "Toolkit for crafting cross-platform mobile apps.",
        logo: (
          <Image src={FlutterLogo} alt="flutter-logo" width={35} height={35} />
        ),
      },
      {
        title: "Backend - Laravel",
        description: "PHP framework for modern web applications.",
        logo: (
          <Image src={LaravelLogo} alt="laravel-logo" width={35} height={35} />
        ),
      },
      {
        title: "Database - MySQL",
        description: "Popular relational database management system.",
        logo: <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35} />,
      },
    ],
    links: [
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
    ],
  },
  {
    title: "Seci Note",
    description:
      "SeciNote is an online note-taking application equipped with AI features and text to voice conversion.",
    logo: (
      <Image src={SeciNoteLogo} alt="seci-note-logo" width={50} height={50} />
    ),
    images: [
      SeciNoteBanner1,
      SeciNoteBanner2,
      SeciNoteBanner3,
      SeciNoteBanner4,
      SeciNoteBanner5,
    ],
    techStack: [
      {
        title: "Frontend Web - React JS",
        description: "Web app framework for building dynamic interfaces.",
        logo: <Image src={ReactLogo} alt="react-logo" width={35} height={35} />,
      },
      {
        title: "Frontend Mobile - Flutter",
        description: "Toolkit for crafting cross-platform mobile apps.",
        logo: (
          <Image src={FlutterLogo} alt="flutter-logo" width={35} height={35} />
        ),
      },
      {
        title: "Backend - Laravel",
        description: "PHP framework for modern web applications.",
        logo: (
          <Image src={LaravelLogo} alt="laravel-logo" width={35} height={35} />
        ),
      },
      {
        title: "Database - MySQL",
        description: "Popular relational database management system.",
        logo: <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35} />,
      },
    ],
    links: [
      {
        title: "Seci Note Web App",
        logo: <BsBrowserChrome size={20} />,
        href: "https://notetaker-staging.agileteknik.com/landing-page",
      },
      {
        title: "Seci Note Store Page",
        logo: <IoLogoGooglePlaystore size={22} />,
        href: "https://play.google.com/store/apps/details?id=com.agilepdbl.note_taker",
      },
    ],
  },
  {
    title: "Daily Plan",
    description:
      "Daily Plan is a daily planner application that helps you organize your daily habits and set reminders.",
    logo: (
      <Image src={DailyPlanLogo} alt="daily-plan-logo" width={50} height={50} />
    ),
    images: [
      DailyPlanBanner1,
      DailyPlanBanner2,
      DailyPlanBanner3,
      DailyPlanBanner4,
      DailyPlanBanner5,
    ],
    techStack: [
      {
        title: "Frontend Web - Next JS",
        description: "Framework for dynamic web interfaces.",
        logo: (
          <Image src={NextJSLogo} alt="react-logo" width={50} height={50} />
        ),
      },
      {
        title: "Frontend Mobile - Flutter",
        description: "Toolkit for crafting cross-platform mobile apps.",
        logo: (
          <Image src={FlutterLogo} alt="flutter-logo" width={35} height={35} />
        ),
      },
      {
        title: "Backend - Laravel",
        description: "PHP framework for modern web applications.",
        logo: (
          <Image src={LaravelLogo} alt="laravel-logo" width={35} height={35} />
        ),
      },
      {
        title: "Database - MySQL",
        description: "Popular relational database management system.",
        logo: <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35} />,
      },
    ],
    links: [
      {
        title: "Daily Plan Web App",
        logo: <BsBrowserChrome size={20} />,
        href: "https://dailyplanapp.agileteknik.com/",
      },
      {
        title: "Daily Plan Store Page",
        logo: <IoLogoGooglePlaystore size={22} />,
        href: "https://play.google.com/store/apps/details?id=com.agileteknik.dailyplan",
      },
    ],
  },
  {
    title: "Seci Map",
    description:
      "SECI Map provides an effortless means of structuring ideas and information with the help of " +
      "interactive mind maps that can be conveniently shared within teams",
    logo: (
      <div className={"bg-white w-fit rounded-2xl p-3"}>
        <Image src={SeciMapLogo} alt="secimap-logo" width={70} height={70} />
      </div>
    ),
    images: [
      SeciMapBanner1,
      SeciMapBanner2,
      SeciMapBanner3,
      SeciMapBanner4,
      SeciMapBanner5,
    ],
    techStack: [
      {
        title: "Frontend Web - Livewire",
        description: "Framework for dynamic web interfaces.",
        logo: (
          <Image src={LivewireLogo} alt="react-logo" width={40} height={40} />
        ),
      },
      {
        title: "Frontend Web - React",
        description: "Framework for dynamic web interfaces.",
        logo: <Image src={ReactLogo} alt="react-logo" width={35} height={35} />,
      },
      {
        title: "Frontend Mobile - Flutter",
        description: "Toolkit for crafting cross-platform mobile apps.",
        logo: (
          <Image src={FlutterLogo} alt="flutter-logo" width={35} height={35} />
        ),
      },
      {
        title: "Backend - Laravel",
        description: "PHP framework for modern web applications.",
        logo: (
          <Image src={LaravelLogo} alt="laravel-logo" width={35} height={35} />
        ),
      },
      {
        title: "Database - MySQL",
        description: "Popular relational database management system.",
        logo: <Image src={MySQLLogo} alt="mysql-logo" width={35} height={35} />,
      },
    ],
    links: [
      {
        title: "Seci Map Web App",
        logo: <BsBrowserChrome size={20} />,
        href: "https://secimap.com",
      },
      {
        title: "Seci Map Store Page",
        logo: <IoLogoGooglePlaystore size={22} />,
        href: "https://play.google.com/store/apps/details?id=com.mindmap.mindmap&hl=en",
      },
    ],
  },
];
