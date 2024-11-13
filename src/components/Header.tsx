"use client";
import WireframeButton from "@/components/WireframeButton.tsx";
import RNLogo from '../assets/RNLogo.png';
import hamburger from '../assets/hamburgerMenu.png';
import {useState} from "react";
import HamburgerMenu from "@/components/HamburgerMenu.tsx";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import useMediaQuery from "@/components/hooks/use-media-query.ts";
import {X, XIcon} from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import SecondaryButton from "@/components/SecondaryButton.tsx";



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');

    const [sheetOpen, setSheetOpen] = useState(false);


    const header = <header className='flex'>
        <div className='flex space-x-[20px]'>
            <a href='./'><Image className='w-[150px] h-auto select-none' src={RNLogo} alt={'RaffleNerds Logo'}/></a>
            <WireframeButton className="hidden lg:block" name="Play!"/>
        </div>

    </header>

    if (isMobile) {
        return (
            <div className="flex justify-between pt-8">
                {header}
                <div>
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger className="h-fit"><Image className='w-[30px]' src={hamburger}
                                         alt={'Hamburger Menu'}/></SheetTrigger>
                    <SheetContent className="w-full p-0 flex flex-col justify-between">
                        <HamburgerMenu className="relative right-0 w-full"/>
                        <SecondaryButton className="w-full h-14 mb-10" name="Close" onClick={()=>setSheetOpen(false)}/>
                    </SheetContent>
                </Sheet>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-between pt-[69px]">
            {header}
            <div className='flex space-x-[15px]'>
                <a onClick={() => setMenuOpen(!menuOpen)}><Image className='w-[30px] h-fit cursor-pointer'
                                                                 src={hamburger}
                                                                 alt={'Hamburger Menu'}/></a>
            </div>
            {menuOpen && <HamburgerMenu/>}
        </div>
    )
}