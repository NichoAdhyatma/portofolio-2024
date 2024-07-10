"use client";

import {Command} from "@/core/types/command";
import {KeyboardEvent, useEffect, useState} from "react";
import {InputShell} from "@/components/atoms/input-shell";
import {getOutputCommand} from "@/lib/get-output-command";
import CloseButton from "@/components/molecules/CloseButton";
import ProfileSection from "@/components/organisms/ProfileSection";
import {ScrollArea, ScrollBar} from "@/components/atoms/scroll-area";
import Experience from "@/components/organisms/Experience";
import Portofolio from "@/components/organisms/Portofolio";
import SkillSection from "@/components/organisms/SkillSection";

const defaultValue: Command[] = [
    {
        input: "about",
        output: "profile",
    },
];

function App() {
    const [commands, setCommands] = useState<Command[]>(defaultValue);

    const [currentCommand, setCurrentCommand] = useState<Command>({
        input: "",
        output: "",
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `${process.env.NEXT_PUBLIC_MIDTRANS_API_URL}/snap/snap.js`;
        script.setAttribute(
            "data-client-key",
            process.env.NEXT_MIDTRANS_CLIENT_KEY!
        );
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (currentCommand.input?.trim() !== "") {
                commandSelector();
            }
        }
    };

    const commandSelector = () => {
        currentCommand.output = getOutputCommand(currentCommand.input ?? "");

        if (currentCommand.input == "clear") {
            setCommands([]);
        } else {
            setCommands([...commands, currentCommand]);
        }

        setCurrentCommand({input: "", output: ""});
    };

    return (
        <div
            className="bg-gradient-to-br from-slate-300 to-slate-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center min-h-screen font-sans">
            <div className="bg-background rounded-lg w-full max-w-5xl">
                <CloseButton/>

                <div className="px-5 sm:px-8 pt-4 pb-2">
                    <ScrollArea
                        id="terminal"
                        className="flex flex-col items-start gap-4 max-h-screen sm:max-h-[85vh]"
                    >
                        {commands.map((c, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start gap-1"
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="font-bold">🚀~</div>
                                    <p className="text-sm" id="command">
                                        {c.input}
                                    </p>
                                </div>

                                {c.output === "profile" ? (
                                    <div className="flex flex-col gap-2 items-start">
                                        <ProfileSection/>
                                        <SkillSection/>
                                        <Portofolio/>
                                        <Experience/>
                                    </div>
                                ) : c.output ? (
                                    <>{c.output}</>
                                ) : (
                                    <p className="text-red-400">Command not found!</p>
                                )}
                            </div>
                        ))}

                        <div className="flex gap-1 items-center mb-2 w-full">
                            <p>🚀</p>
                            <InputShell
                                type="text"
                                id="command"
                                placeholder={"Start typing here ..."}
                                value={currentCommand.input}
                                onChange={(e) => setCurrentCommand({input: e.target.value})}
                                onKeyDown={handleKeyDown}

                            />
                        </div>
                        <ScrollBar orientation="vertical"/>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}

export default App;
