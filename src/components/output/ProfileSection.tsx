import React from "react";
import ReactLogo from "@/assets/react.png";
import NextJSLogo from "@/assets/nextjs.png";
import FlutterLogo from "@/assets/flutter.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


export default function ProfileSection() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-xl">Nicholaus Adhyatma Surya Kusuma</h1>
        <p className="text-gray-500 font-medium italic">Software Developer</p>
        <p className="my-3 font-normal">
          Passionate <strong className="italic">Software Developer</strong> with
          a focus on mobile and web frontend development. Currently a
          6th-semester student at {" "}
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

      <div>
        <div className="mb-2">Tools : </div>

        <div className="flex items-center gap-2">
          <Image src={ReactLogo} width={35} height={35} alt="react-logo" />
          <Image src={NextJSLogo} width={50} height={50} alt="react-logo" />
          <Image src={FlutterLogo} width={70} height={70} alt="react-logo" />
        </div>
      </div>

      <div className="mt-4">
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/my-cv.pdf`} download={true}>
        <Button>
          Download CV
        </Button>
        </Link>

      </div>
    </div>
  );
}
