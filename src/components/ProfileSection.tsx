import React from "react";
import ReactLogo from "@/assets/react.png";
import NextJSLogo from "@/assets/nextjs.png";
import FlutterLogo from "@/assets/flutter.png";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-xl">Nicholaus Adhyatma Surya Kusuma</h1>
        <p className="text-gray-500 font-medium italic">Software Developer</p>
      </div>

      <div>
        <p className="mb-2">Tools : </p>

        <div className="flex items-center gap-2">
          <Image src={ReactLogo} width={35} height={35} alt="react-logo" />
          <Image src={NextJSLogo} width={50} height={50} alt="react-logo" />
          <Image src={FlutterLogo} width={70} height={70} alt="react-logo" />
        </div>
      </div>
    </div>
  );
}
