import {BuyMeACoffee} from "./BuyMeACoffee";
import {ModeToggle} from "./ModeToggle";
import {DropdownOption} from "@/components/molecules/DropdownOption";
import DownloadCV from "@/components/molecules/DownloadCV";
import {useState} from "react";
import {motion, MotionValue} from "framer-motion";


export default function CloseButton({scrollProgress}: { scrollProgress: MotionValue<number> }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={"sticky z-50 w-full top-0"}>
            <div
                className="bg-secondary p-4 rounded-t-lg flex gap-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="cursor-pointer bg-red-500 rounded-full w-4 h-4"></div>
                    <div className="cursor-pointer bg-yellow-500 rounded-full w-4 h-4"></div>
                    <div className="cursor-pointer bg-green-500 rounded-full w-4 h-4"></div>
                </div>


                <div className={"min-[496px]:hidden flex gap-2 items-center"}>
                    <DropdownOption/>
                    <ModeToggle/>
                </div>


                <div className="hidden min-[496px]:flex gap-2 items-center">
                    <DownloadCV/>

                    <BuyMeACoffee open={open} setOpen={setOpen}/>

                    <ModeToggle/>
                </div>


            </div>

            <motion.div
                className="sticky top-10 z-[100] bg-primary progress-bar"
                style={{scaleX: scrollProgress}}
            />
        </div>

    );
}
