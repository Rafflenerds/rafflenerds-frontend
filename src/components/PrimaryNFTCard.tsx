import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import placeholderNFT from "../assets/nftPlaceholder.png";
import greenCircle from "../assets/greenCircle.svg";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import {UserLinks} from "@/components/UserLinks.tsx";
import {LikeAndShareButtons} from "@/components/LikeAndShareButtons.tsx";
import {Countdown} from "@/components/Countdown.tsx";
import Image from "next/image";

export default function PrimaryNFTCard(){
    return(
        <div className="bg-[url('../assets/raffleBG.svg')] bg-cover bg-no-repeat flex justify-center lg:px-12 lg:mx-10 pb-3 pt-4">
            <Card className='w-full'>
                <CardContent className='px-0 pt-3'>
                    <Image className='w-full py-2' src={placeholderNFT} alt={'NFT'}/>
                </CardContent>
                <CardHeader className='text-left pt-0 pb-2 px-0 text-xl'>
                    <div className='flex justify-between'>
                        <span className='flex'>
                            <p className='text-primary mr-2 mt-[-5px]'>Bored Ape Yacht Club</p>
                            <Image className='w-[15px] mb-2' src={greenCircle} alt='Active'/>
                        </span>

                        <p className='text-primary'>FP: 12.9ETH</p>
                    </div>

                    <div className='flex justify-between text-secondary text-5xl !mt-0 !mb-5'>
                        <p>#5570</p>
                        <LikeAndShareButtons/>
                    </div>

                    <p className='font-block text-primary text-sm'>Raffler:</p>
                    <div className='flex justify-between text-[#cb5efe] text-2xl !mt-0 font-mono !mb-4'>
                        <p>mranonym619</p>
                        <div className='w-[100px]'>
                            <UserLinks/>
                        </div>
                    </div>

                    <p className='text-secondary font-mono text-xl !mb-2'>Ticket Sales End:</p>
                    {/*<div className='font-mono text-secondary'>*/}
                        <Countdown className="scale-50 lg:scale-100" days={3} hours={6} minutes={10}/>
                    {/*</div>*/}
                </CardHeader>
                <CardFooter className='px-0 flex flex-col'>
                    <PrimaryButton active={true} name={"Buy"} className='w-full text-4xl py-10'/>
                    <div className='flex justify-between text-[#68FF65] mt-4 w-full mb-16'>
                        <p className='text-2xl'>105 / Ticket</p>
                        <div className='flex'>
                            <p className='text-2xl text-[#cb5efe] mr-1'>Ticket Remaining:</p>
                            <p className='text-2xl'>24/50</p>
                        </div>

                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}