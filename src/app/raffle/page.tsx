import PrimaryButton from "@/components/PrimaryButton.tsx";
import {CheckboxWithText} from "@/components/CheckboxWithText.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import nftPlaceholder from "@/assets/nftPlaceholder.png";
import buttonHeart from "@/assets/buttonHeart.svg";
import buttonShare from "@/assets/buttonShare.svg";
import iconX from "@/assets/iconX.png";
import iconDiscord from "@/assets/iconDiscord.png";
import iconTelegram from "@/assets/iconTelegram.png";
import {OfferTable} from "@/components/OfferTable.tsx";
import Image from "next/image";

export function Raffle(){
    return (
        <div className='p-5'>
            <div className='flex flex-col justify-center border border-primary rounded-xl p-10'>

                <div className='flex'>
                    <Image src={nftPlaceholder} alt='nft image' className='w-[400px]'/>
                    <div className='ml-8 w-full'>
                        <h2 className='text-2xl font-block text-white text-left mb-4'>Raffle Details</h2>

                        <div className='flex justify-between'>
                            {/*left*/}
                            <div className='flex flex-col text-left mb-10'>
                                {/*1*/}
                                <h4 className='text-primary font-sans'>Bored Ape Yacht Club</h4>
                                <p className='text-white font-sans text-5xl'>#5570</p>

                            </div>
                            {/*right*/}
                            <div className='flex flex-col ml-4 text-right'>
                                {/*1*/}
                                <h4 className='text-primary font-sans'>FP: 12.9 ETH</h4>
                                <div className='flex justify-end'>
                                    <a href='#'>
                                        <Image className='mr-2' src={buttonHeart} alt='Favourite Button'/>
                                    </a>
                                    <a href='#'>
                                        <Image src={buttonShare} alt='Share Button'/>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-between'>
                            {/*left*/}
                            <div className='flex flex-col text-left'>
                                {/*2*/}
                                <h5 className='text-primary font-block'>Raffle Start Date:</h5>
                                <p className='text-white font-mono'>May 20, 2024, 5:30 AM</p>

                                {/*3*/}
                                <h5 className='text-primary font-block'>Raffle End Date:</h5>
                                <p className='text-white font-mono'>May 20, 2024, 5:30 AM</p>


                                {/*4*/}
                                <h5 className='text-primary font-block'>Raffler:</h5>
                                <div className='flex items-center'>
                                    <p className='text-[#CB5EFE] font-mono'>mranonym619</p>
                                    <a href='#' className='ml-2'>
                                        <Image className='w-[21px]' src={iconX} alt='X.com'/>
                                    </a>
                                    <a href='#' className='ml-2'>
                                        <Image className='w-[21px]' src={iconDiscord} alt='discord.com'/>
                                    </a>
                                    <a href='#' className='ml-2'>
                                        <Image className='w-[21px]' src={iconTelegram} alt='telegram.com'/>
                                    </a>
                                </div>
                            </div>

                            {/*right*/}
                            <div className='flex flex-col ml-4 text-right'>
                                {/*2*/}
                                <h5 className='text-primary font-block'>Ticket Supply</h5>
                                <p className='text-white font-mono'>150/150 TICKETS</p>

                                {/*3*/}
                                <h5 className='text-primary font-block'>Ticket Cost</h5>
                                <p className='text-white font-mono'>30 USDT/CREDIT</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className='bg-primary h-0.5 my-8'/>
                <h2 className='text-2xl font-block text-white text-left mb-5'>Offer Details</h2>
                <OfferTable/>

                {/*spacer*/}
                <div className='mb-10'></div>

                <CheckboxWithText text='Do you confirm that all the raffle information is accurate?'/>
                <div className='m-auto mt-10 max-w-[450px] w-full'>
                    <PrimaryButton active={true} name='Create Raffle'/>
                </div>
            </div>
        </div>
    )
}