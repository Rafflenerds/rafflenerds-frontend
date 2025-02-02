import React from 'react';
import CornerSvg from '@/public/custom_borders/raffle_winner/corner.svg';
import BorderHorizontalSvg from '@/public/custom_borders/raffle_winner/border_horizontal.svg';
import BorderVerticalSvg from '@/public/custom_borders/raffle_winner/border_vertical.svg';

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
                    {children}
                </div>
            </div>
        </div>
    );
}