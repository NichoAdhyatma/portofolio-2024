import React from "react";
import ReactLogo from "@/assets/react.png";
import NextJSLogo from "@/assets/nextjs.png";
import FlutterLogo from "@/assets/flutter.png";
import Image from "next/image";

export default function SkillSection() {
  return (
    <div>
      {" "}
      <div>
        <div className="mb-2">Tools : </div>
        <div className="flex items-center gap-2">
          <Image src={ReactLogo} width={35} height={35} alt="react-logo" />
          <Image src={NextJSLogo} width={50} height={50} alt="react-logo" />
          <Image src={FlutterLogo} width={70} height={70} alt="react-logo" />
        </div>
      </div>
    </div>
  );
}
