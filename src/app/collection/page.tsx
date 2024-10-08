import Header from "@/components/Header.tsx";
import {GradientBorder} from "@/components/GradientBorder.tsx";
import {Avatar} from "@/components/ui/avatar.tsx";
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {UserLinks} from "@/components/UserLinks.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import iconDropdown from "@/assets/iconDropdown.svg";
import {SearchBar} from "@/components/SearchBar.tsx";
import greenCircle from "@/assets/greenCircle.svg";
import nftCollectionPlaceholder from "@/assets/nftCollectionPlaceholder.png";
import {NftFilters} from "@/components/NftFilters.tsx";
import NFTCard from "@/components/NFTCard.tsx";
import {DefaultPage} from "@/components/DefaultPage.tsx";
import Image from "next/image";

export default function NftCollection(){
    return(
        <DefaultPage>
            <Header/>
            {/*spacer*/}
            <div className='h-16'></div>
            {/*profile banner*/}
            {/*1px border*/}
            <GradientBorder>
                <div
                    className="border rounded-2xl pt-60 px-10 pb-5 bg-[url('../assets/profileBGPlaceholder.png')] bg-cover">
                    <div className='flex justify-between'>
                        {/*profile*/}
                        <div className='flex '>
                            <Avatar className='size-32 mr-8 rounded'>
                                {/*<AvatarImage src={nftCollectionPlaceholder}/>*/}
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            {/*<Image src={iconFlag} alt='Report'/>*/}


                            {/*collection info*/}
                            <div className='my-auto flex flex-col'>
                                <div className='flex mb-2'>
                                    <h1 className='font-block text-primary'>Bored Ape Yacht Club</h1>
                                    {/*<a href='#'><Image className='ml-2 size-5' src={iconFlag} alt='Report User'/></a>*/}
                                </div>
                                {/*icons*/}
                                <div className='flex mb-2'>
                                    <UserLinks className='gap-2'/>

                                    {/*    todo: add verification symbol*/}
                                    <div className='font-mono text-black bg-primary rounded-2xl text-sm px-3 ml-3'>
                                        Verification Request
                                    </div>
                                </div>

                                {/*metadata*/}
                                <div className='flex flex-col text-left mt-5'>
                                    <p className='text-primary font-block'>Items: 9.998</p>
                                    <p className='text-white font-mono mt-1'>Created: Apr 2021 | Creator earnings:1%|
                                        Chain: Ethereum</p>
                                </div>


                            </div>
                        </div>
                        {/*stats*/}
                        <div className='align-bottom mt-5'>
                            <div className='flex flex-row gap-5'>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-xl flex justify-evenly font-mono'>1,530,454 ETH</p>
                                    <p className='text-white text-xs font-mono'>Total Volume</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-xl font-mono'>16.2 ETH</p>
                                    <p className='text-white text-xs font-mono'>Floor Price</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-xl font-mono'>10.0652 WETH</p>
                                    <p className='text-white text-xs font-mono'>Best Offer</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-xl font-mono'>1%</p>
                                    <p className='text-white text-xs font-mono'>Listed</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-xl font-mono'>5,364 (54%)</p>
                                    <p className='text-white text-xs font-mono'>Owners (Unique)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GradientBorder>
            <p className='text-white font-mono text-left mt-1 ml-52'>The Bored Ape Yacht Club is a collection of 10,000
                unique Bored Ape... See more</p>


            {/*----------------sort ui--------------------*/}
            <div className='flex justify-between mb-10 mt-8 gap-3'>

                <Image className='size-3 my-auto' src={greenCircle} alt='Green Circle'/>
                <p className='text-white text-xl font-mono my-auto mr-4'>Live</p>

                <p className='text-primary text-sm font-block my-auto'>4,985</p>
                <p className='text-white text-sm font-block my-auto mr-4'>Raffles</p>

                <SearchBar className='my-auto' placeholder='Search raffle by name'/>


                <DropdownMenu>
                    <DropdownMenuTrigger className='border border-primary rounded-xl text-accent font-mono px-5 py-2 flex my-auto w-60'>
                        Sort Entries
                        <Image className='my-auto ml-2' src={iconDropdown} alt='Dropdown'/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=''>
                        {/*<DropdownMenuLabel>Sort Entries</DropdownMenuLabel>*/}
                        {/*<DropdownMenuSeparator />*/}
                        <DropdownMenuItem className='font-mono text-[1rem] px-5'>Alphabetical</DropdownMenuItem>
                        <DropdownMenuItem className='font-mono text-[1rem] px-5'>Date</DropdownMenuItem>
                        <DropdownMenuItem className='font-mono text-[1rem] px-5'>Price</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/*nft sections*/}
            <div className='flex'>
                {/*filters*/}
                <div className='w-1/5 mr-4'>
                    <NftFilters/>
                </div>

                {/*nft list*/}
                <div className='grid grid-cols-4 gap-2 w-4/5'>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                </div>

            </div>
        </DefaultPage>
    )
}