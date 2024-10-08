import RNCoins from "../assets/RNCoins.png";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import Image from "next/image";

export default function CTA(){
    return (
        <div className='flex flex-row px-40 pb-20 bg-[url("../assets/CTABG.png");] bg-no-repeat bg-cover' id='CTA'>
            <Image src={RNCoins} alt={'RaffleNerds Coins'} width='50%'/>
            <div className='m-auto'>
                <h2 className='text-5xl mt-{107px} text-secondary font-mono text-left mb-8'>Buy credits and<br/>win amazing NFTs!</h2>
                <div className='w-3/5 ml-8'>
                    <PrimaryButton active={true} name="BUY CREDITS" className='text-xl p-6 rounded-xl'/>
                </div>
            </div>
        </div>
    )
}