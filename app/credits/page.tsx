"use client";
import Header from '@/components/Header.tsx';
import Footer from '@/components/Footer.tsx';
import PrimaryButton from '@/components/PrimaryButton.tsx';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import IconCoin from '@/public/assets/iconCoin.svg';
import IconDropdown from '@/public/assets/iconDropdown.svg';
import { Input } from '@/components/ui/input.tsx';
import { DefaultPage } from '@/components/DefaultPage.tsx';
import { useState } from 'react';

type mode = 'buy' | 'redeem';
export default function Credits() {
    const [mode, setMode] = useState<mode>('buy');

    return (
        <DefaultPage>
            <Header/>
            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="font-block text-2xl text-secondary mb-8">Credits</h1>

                {/*box*/}
                <div className="flex flex-col items-center justify-center border border-primary rounded-xl p-4 xl:py-8 xl:px-10 max-w-[45rem] w-full">
                    <div className='flex justify-end w-full'>
                        <IconCoin alt='Coin Icon'/>
                        <p className='text-primary font-mono ml-2 text-2xl'>999</p>
                    </div>

                    {/*buy and redeem*/}
                    <div className='flex flex-col gap-4 justify-between w-full p-y2 mt-5 xl:flex-row'>
                        <PrimaryButton active={mode === 'buy'} name='Buy Credits'  onClick={()=>setMode('buy')}/>
                        <PrimaryButton active={mode === 'redeem'} name='Redeem Credits' className='py-0 text-primary' onClick={()=>setMode('redeem')}/>
                    </div>

                    {/*amount and currency*/}
                    <div className='flex justify-between border border-primary rounded-2xl w-full p-2 xl:px-6 py-5 my-5'>
                        <Input className='text-white font-block !border-none focus-visible:border-none focus-visible:ring-0 xl:text-xl w-2/5' type="number" defaultValue={500} />

                        <DropdownMenu>
                            <DropdownMenuTrigger className='text-secondary font-block text-sm xl:text-base flex my-auto'>
                                USDT
                                <IconDropdown className='my-auto ml-2' alt='Dropdown'/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Token</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>ETH</DropdownMenuItem>
                                <DropdownMenuItem>USDC</DropdownMenuItem>
                                <DropdownMenuItem>USDT</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/*network and fees*/}
                    <div className='flex justify-between border border-primary border-dashed rounded-3xl w-full px-4 p-2 xl:px-8 xl:py-3 mb-5'>
                        <p className='text-white font-regular text-center'>Est total fees: $2.96</p>

                        <DropdownMenu>
                            <DropdownMenuTrigger className='text-primary font-block text-sm flex my-auto'>
                                Polygon
                                <IconDropdown className='my-auto ml-2' alt='Dropdown'/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Network</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>ETH Mainnet</DropdownMenuItem>
                                <DropdownMenuItem>Polygon</DropdownMenuItem>
                                <DropdownMenuItem>Base</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <PrimaryButton active={true} className='mb-8 py-6 px-12 mt-3'  name={mode === "buy" ? 'Buy Credits': 'Redeem Credits'}  />
                    <p className='text-white font-regular mb-10 text-l text-center'>By continuing you agree to our <a href='#' className='text-primary'>terms and services</a></p>
                </div>
            </div>

            <Footer className='mb-10'/>
        </DefaultPage>
    );
}
