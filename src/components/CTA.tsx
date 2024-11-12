import RNCoins from "../assets/RNCoins.png";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import Image from "next/image";

export default function CTA(){
    return (
        <div className='grid grid-cols-1 xl:px-40 xl:pb-20 bg-[url("../assets/CTABG.png");] bg-no-repeat bg-cover'>
            <div>
                <Image src={RNCoins} alt={'RaffleNerds Coins'} className='w-full'/>
            </div>
            <div className='m-auto'>
                <h2 className='text-5xl mt-{107px} text-secondary font-mono text-left mb-8'>Buy credits and<br/>win amazing NFTs!</h2>
                <div className='w-3/5 ml-8'>
                    <PrimaryButton active={true} name="BUY CREDITS" className='text-xl rounded-xl'/>
                </div>
            </div>
        </div>
    )
}