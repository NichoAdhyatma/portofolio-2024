import React from "react";
import ReactLogo from "@/assets/react.png";
import NextJSLogo from "@/assets/nextjs.png";
import FlutterLogo from "@/assets/flutter.png";
import LaravelLogo from "@/assets/laravel.svg";
import VsCodeLogo from "@/assets/vscode.svg";
import AndroidStudioLogo from "@/assets/android-studio.png"
import FigmaLogo from "@/assets/figma.svg";
import FirebaseLogoDark from "@/assets/firebase-dark.svg";
import FirebaseLogo from "@/assets/firebase.svg";
import SupabaseLogoDark from "@/assets/supabase-dark.svg";
import SupabaseLogo from "@/assets/supabase-light.svg";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import Image from "next/image";
import {useTheme} from "next-themes";

export default function SkillSection() {
    const {resolvedTheme} = useTheme();
    return (
        <div className={"my-4 w-full"}>
            <p className="text-2xl font-bold underline">Skill </p>
            <div className={"flex flex-wrap gap-2 flex-col sm:flex-row w-full min-h-[120px]"}>
                <div className="p-4 border rounded-xl mt-4">
                    <p className={"mb-2"}>Tech Framework</p>
                    <div className="flex items-center gap-4">
                        <Image src={ReactLogo} width={35} height={35} alt="react-logo"
                               className={"hover:cursor-pointer hover:scale-110"}/>
                        <Image src={NextJSLogo} width={60} height={60}
                               className={"hover:cursor-pointer hover:scale-110"}
                               alt="nextjs-logo"/>
                        <Image src={FlutterLogo} width={75} height={75}
                               className={"hover:cursor-pointer hover:scale-110"}
                               alt="flutter-logo"/>
                        <Image src={LaravelLogo} width={35} height={35}
                               className={"hover:cursor-pointer hover:scale-110"}
                               alt="laravel-logo"/>
                    </div>
                </div>
                <div className="p-4 border rounded-xl mt-4">
                    <p className={"mb-2"}>Tools</p>
                    <div className="flex items-center gap-x-8">
                        <Image src={VsCodeLogo} width={35} height={35} alt="react-logo"
                               className={"hover:cursor-pointer hover:scale-110"}/>
                        <Image src={AndroidStudioLogo} width={35} height={35}
                               className={"hover:cursor-pointer hover:scale-110"}
                               alt="nextjs-logo"/>
                        <Image src={FigmaLogo} width={25} height={25}
                               className={"hover:cursor-pointer hover:scale-110"}
                               alt="flutter-logo"/>
                        <GitHubLogoIcon className={"hover:cursor-pointer hover:scale-110"} width={35} height={35}/>
                    </div>
                </div>
                <div className="p-4 px-5 border rounded-xl mt-4">
                    <p className={"mb-2"}>Services</p>
                    <div className="flex items-center gap-x-8">
                        <Image src={resolvedTheme == 'dark' ? FirebaseLogoDark : FirebaseLogo} width={45} height={45}
                               alt="firebase-logo"
                               className={"hover:cursor-pointer hover:scale-110"}/>
                        <Image src={resolvedTheme == 'dark' ? SupabaseLogoDark : SupabaseLogo} width={75} height={75}
                               className={"hover:cursor-pointer"}
                               alt="supabase-logo"/>

                    </div>
                </div>
            </div>
        </div>
    );
}
