'use client';
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import iconPlus from "@/assets/iconPlus.png";
import {DatePicker} from "@/components/DatePicker.tsx";
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Separator} from "@/components/ui/separator.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import {z} from "zod";
import Image from "next/image";
import {CreateRaffleForm} from "@/components/CreateRaffleForm.tsx";

export default function CreateRaffle() {

    function handleAddNFT() {
        console.log('Add NFT');
    }

    return (
        <div className='px-40'>
            <Header/>

            <h1 className='font-block text-white mb-10 text-left mt-16'>Create Raffle</h1>

            <div className='flex gap-10 justify-center mb-16'>
                {/*left*/}
                <div className='flex flex-col items-center justify-center border border-primary rounded p-8 cursor-pointer max-h-[25rem]' onClick={() => handleAddNFT()}>
                    <Image src={iconPlus} alt='Choose NFT' width={168}/>
                    <p className='text-white font-block mt-10'>Choose NFT for raffle</p>
                </div>
                {/*right*/}
                <CreateRaffleForm/>
            </div>
            <Footer/>
        </div>
    );
};
