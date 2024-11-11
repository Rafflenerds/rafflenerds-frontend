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

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className='flex justify-between pt-[69px]'>
          <div className='flex space-x-[20px]'>
              <a href='/public'><Image className='w-[150px] h-auto select-none' src={RNLogo} alt={'RaffleNerds Logo'}/></a>
              <WireframeButton className="hidden lg:block" name="Play!"/>
          </div>
          <div className='flex space-x-[15px]' >
              <a onClick={() => setMenuOpen(!menuOpen)}><Image className='w-[30px] h-[30px] cursor-pointer' src={hamburger} alt={'Hamburger Menu'}/></a>
          </div>
      </header>

        {menuOpen && <HamburgerMenu />}


        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </>
  )
}