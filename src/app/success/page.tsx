"use client"

import {Button} from "@/components/atoms/button";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {socket} from "@/socket";

export default function SuccessPage() {
    const router = useRouter();

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [_, setTransport] = useState("N/A");

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

            socket.io.engine.on("upgrade", (transport) => {
                setTransport(transport.name);
            });

            socket.on("message2", (value: unknown) => {
                console.log(`Received from Server to Client :: ${value}`);
            });
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport("N/A");
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, [isConnected]);

    return (
        <div className={"flex flex-col gap-8 h-screen justify-center max-w-sm mx-auto"}>
            <p className={"text-2xl font-bold text-center"}>Success Payment ✅</p>

            <p className={"text-center"}>Thank you!! have a nice day️</p>

            <Button onClick={() => {
                router.push("/")
            }}>Back
            </Button>
        </div>
    )
}
