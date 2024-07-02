import {BuyMeACoffee} from "./BuyMeACoffee";
import {ModeToggle} from "./ModeToggle";
import {DropdownOption} from "@/components/molecules/DropdownOption";
import DownloadCV from "@/components/molecules/DownloadCV";


export default function CloseButton() {
    return (
        <div className="flex gap-2 justify-between items-center bg-secondary p-4 rounded-t-lg sticky z-50 w-full top-0">
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

                <BuyMeACoffee/>

                <ModeToggle/>

            </div>


        </div>
    );
}
