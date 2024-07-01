import Link from "next/link";
import {Button} from "@/components/atoms/button";
import {IoIosPaper} from "react-icons/io";

export default function DownloadCV({variant = "default"}: {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null
}) {
    return (
        <Link href={`/my-cv.pdf`} download={true} target="_blank">
            <Button className="font-semibold" variant={variant} icon={<IoIosPaper/>}>
                Download CV
            </Button>
        </Link>
    );
}
