import RNCoins from "../assets/RNCoins.png";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import Image from "next/image";

export default function CTA(){
	return (
		<div className='grid grid-cols-1 lg:px-40 lg:pb-20 lg:grid-cols-2 bg-[url("../assets/CTABG.png");] bg-no-repeat bg-cover'>
			<div>
				<Image src={RNCoins} alt={'RaffleNerds Coins'} className='w-full pl-10 lg:pl-0'/>
			</div>
			<div className='m-auto'>
				<h2 className='text-3xl xl:text-5xl text-secondary font-mono mb-8 text-center lg:text-left'>Buy credits and <br className="hidden xl:block"/>win amazing NFTs!</h2>
				<div className='w-full lg:w-3/5 xl:ml-8 flex'>
					<PrimaryButton active={true} name="BUY CREDITS" className='text-xl rounded-xl justify-center'/>
				</div>
			</div>
		</div>
	)
}