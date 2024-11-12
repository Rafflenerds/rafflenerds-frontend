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



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');


    const header = <header className='flex'>
        <div className='flex space-x-[20px]'>
            <a href='/public'><Image className='w-[150px] h-auto select-none' src={RNLogo} alt={'RaffleNerds Logo'}/></a>
            <WireframeButton className="hidden lg:block" name="Play!"/>
        </div>

    </header>

    if (isMobile) {
        return (
            <div className="flex justify-between pt-[69px]">
                {header}
                <div>
                <Sheet>
                    <SheetTrigger className="h-fit"><Image className='w-[30px]' src={hamburger}
                                         alt={'Hamburger Menu'}/></SheetTrigger>
                    <SheetContent>

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