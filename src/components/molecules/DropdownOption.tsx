import {Button} from "@/components/atoms/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import {BsThreeDotsVertical} from "react-icons/bs";
import {BuyMeACoffee} from "@/components/molecules/BuyMeACoffee";
import DownloadCV from "@/components/molecules/DownloadCV";

export function DropdownOption() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={"min-[496px]:hidden"} asChild>
                <Button variant="outline"><BsThreeDotsVertical width={60} height={60}/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-[496px]:hidden">
                <DropdownMenuGroup>
                    <DropdownMenuItem className={"flex justify-start"} >

                        <DownloadCV variant={"ghost"}/>

                    </DropdownMenuItem>

                    <DropdownMenuItem  className={"flex justify-end"}>

                        <BuyMeACoffee variant={"ghost"}/>

                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
