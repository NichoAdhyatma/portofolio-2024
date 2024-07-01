import {Button} from "@/components/atoms/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import {BsThreeDotsVertical} from "react-icons/bs";
import {CiCoffeeCup} from "react-icons/ci";
import {BuyMeACoffee} from "@/components/molecules/BuyMeACoffee";
import DownloadCV from "@/components/molecules/DownloadCV";
import {useState} from "react";

export function DropdownOption() {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenDialog = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        setOpen(false);
        setModalOpen(true);
    };

    return (
        <>
            <DropdownMenu key={"dropdown-option"} open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger className={"min-[496px]:hidden"} asChild>
                    <Button variant="outline">
                        <BsThreeDotsVertical width={60} height={60}/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-[496px]:hidden">
                    <DropdownMenuGroup>
                        <DropdownMenuItem className={"flex justify-start"}>
                            <DownloadCV variant={"ghost"}/>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleOpenDialog} className={"flex justify-end"}>
                            <Button variant="ghost" icon={<CiCoffeeCup/>}>Buy Me A Coffee</Button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>


            {modalOpen && (
                <BuyMeACoffee open={modalOpen} setOpen={setModalOpen}/>
            )}
        </>
    );
}
