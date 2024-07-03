"use client"

import {Button} from "@/components/atoms/button";
import {useRouter} from "next/navigation";

export default function SuccessPage() {
    const router = useRouter();
    return (
        <div className={"flex flex-col gap-8 h-screen justify-center max-w-sm mx-auto"}>
            <p className={"text-2xl font-bold text-center"}>Success Payment ✅</p>

            <p className={"text-center"}>Thank you!! have a nice day️</p>

            <Button onClick={() => {
                router.push("/")
            }}>Back</Button>
        </div>
    )
}
