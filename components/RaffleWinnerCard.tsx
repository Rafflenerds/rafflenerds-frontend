import React from 'react';
import CornerSvg from '@/public/custom_borders/raffle_winner/corner.svg';
import BorderHorizontalSvg from '@/public/custom_borders/raffle_winner/border_horizontal.svg';
import BorderVerticalSvg from '@/public/custom_borders/raffle_winner/border_vertical.svg';
import Image from 'next/image';
import Crown from '@/public/assets/crown.svg';
import nftPlaceholder from '@/public/assets/nftPlaceholder.png';

export default function RaffleWinnerCard({ children, ...props }: React.ComponentProps<'div'>) {
    return (
        <div {...props}>
            <div className="relative h-full w-full">
                <div className="absolute inset-0">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-row justify-between w-full">
                            <CornerSvg/>
                            <BorderHorizontalSvg className="w-full"/>
                            <CornerSvg className="transform scale-x-[-1]"/>
                        </div>
                        <div className="flex flex-row justify-between h-full">
                            <BorderVerticalSvg/>
                            <BorderVerticalSvg className="transform rotate-180"/>
                        </div>
                        <div className="flex flex-row justify-between items-end w-full">
                            <CornerSvg className="transform scale-y-[-1]"/>
                            <BorderHorizontalSvg className="w-full"/>
                            <CornerSvg className="transform scale-x-[-1] scale-y-[-1] "/>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-2 z-10">
                    <Image className='w-full pb-4' src={nftPlaceholder} alt='NFT'/>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-center'>
                            <Crown className='w-7' alt='Crown Icon'/>
                            <p className='font-sans text-[#FFD86A] uppercase mt-1'>Raffle Winner!</p>
                        </div>
                        <p className='font-sans text-primary text-xl'>@mjbreese178</p>
                        <p className='font-sans text-[#FFD86A] text-sm'>Won with 10 Ticket(s)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}