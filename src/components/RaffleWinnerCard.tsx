import nftPlaceholder from '../assets/nftPlaceholder.png';
import crown from '../assets/crown.svg';
import Image from "next/image";

export default function RaffleWinnerCard(){
    return(
        <div className="w-52 px-5 pt-3 pb-1 bg-[url('../assets/raffleWinnerBG.png')] bg-contain bg-no-repeat">
            <Image className='w-full pb-4' src={nftPlaceholder} alt='NFT'/>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-center'>
                    <Image className='w-7' src={crown} alt='Crown Icon'/>
                    <p className='font-sans text-[#FFD86A] uppercase mt-1'>Raffle Winner!</p>
                </div>
                <p className='font-sans text-primary text-xl'>@mjbreese178</p>
                <p className='font-sans text-[#FFD86A] text-sm'>Won with 10 Ticket(s)</p>
            </div>
        </div>
    )
}