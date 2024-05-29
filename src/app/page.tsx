"use client";

import { Command } from "@/core/types/command";
import { KeyboardEvent, useState } from "react";
import { InputShell } from "@/components/ui/input-shell";
import { getOutputCommand } from "@/lib/get-output-command";
import CloseButton from "@/components/CloseButton";
import ProfileSection from "@/components/output/ProfileSection";

const defaultValue: Command[] = [
  {
    input: "ls",
    output: "profile",
  },
];

function App() {
  const [commands, setCommands] = useState<Command[]>(defaultValue);

  const [currentCommand, setCurrentCommand] = useState<Command>({
    input: "",
    output: "",
  });

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

    setCurrentCommand({ input: "", output: "" });
  };

  return (
    <div className="bg-gradient-to-br from-slate-300 to-slate-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center min-h-screen font-sans px-2">
      <div className="bg-background rounded-lg w-full max-w-xl my-4 max-h-[80vh] overflow-auto">
        <CloseButton />

        <div className="px-4 pt-4 pb-2">
          <p className="text-2xl font-bold mb-4">Nicho Portofolio ./</p>

          <div id="terminal" className="flex flex-col items-start gap-4">
            {commands.map((c, index) => (
              <div key={index} className="flex flex-col items-start gap-1">
                <div className="flex gap-2 items-center">
                  <div className="font-bold">🚀~</div>
                  <p className="text-sm" id="command">
                    {c.input}
                  </p>
                </div>

                {c.output === "profile" ? (
                  <ProfileSection />
                ) : c.output ? (
                  <p className={`font-semibold text-start`}>{c.output}</p>
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
                onChange={(e) => setCurrentCommand({ input: e.target.value })}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
