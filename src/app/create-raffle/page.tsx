'use client';
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import iconPlus from "@/assets/iconPlus.png";
import Image from "next/image";
import {CreateRaffleForm} from "@/components/CreateRaffleForm.tsx";

export default function CreateRaffle() {

    function handleAddNFT() {
        
        console.log('Add NFT');
    }

    return (
        <div className='px-2 xl:px-40'>
            <Header/>

            <h1 className='font-block text-white mb-10 text-left mt-16'>Create Raffle</h1>

            <div className='grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-10 justify-center mb-16 max-w-screen-2xl mx-auto'>
                {/*left*/}
                <div className='flex flex-col items-center justify-center border border-primary rounded p-8 cursor-pointer max-h-[25rem] text-center' onClick={() => handleAddNFT()}>
                    <Image src={iconPlus} alt='Choose NFT' className="w-32 xl:w-40"/>
                    <p className='text-white font-block mt-10'>Choose NFT for raffle</p>
                </div>
                {/*right*/}
                <CreateRaffleForm/>
            </div>
            <Footer/>
        </div>
    );
};
