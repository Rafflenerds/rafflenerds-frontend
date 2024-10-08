import {Avatar} from "@/components/ui/avatar.tsx";
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import {UserLinks} from "@/components/UserLinks.tsx";
import iconFlag from "@/assets/iconFlag.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import RaffleWinnerCard from "@/components/RaffleWinnerCard.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {GradientBorder} from "@/components/GradientBorder.tsx";
import iconDropdown from "@/assets/iconDropdown.svg";
import {DefaultPage} from "@/components/DefaultPage.tsx";
import Image from "next/image";


export function Profile(){
    return (
        <DefaultPage>
            <Header/>
            {/*profile banner*/}
            <div className='h-16'></div>
            {/*1px border*/}
            <GradientBorder>
                <div className="border rounded-2xl pt-60 px-10 pb-5 bg-[url('../assets/profileBGPlaceholder.png')] bg-cover">
                    <div className='flex justify-between'>
                        {/*profile*/}
                        <div className='flex '>
                            <Avatar className='size-32 mr-8'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            {/*user info*/}
                            <div className='my-auto flex flex-col'>
                                <div className='flex mb-2'>
                                    <h1 className='font-block text-primary text-sm'>@mjbreese178</h1>
                                    {/*<a href='#'><Image className='ml-2 size-5' src={iconFlag} alt='Report User'/></a>*/}
                                </div>
                                {/*icons*/}
                                <div className='flex mb-4'>
                                    <UserLinks className='gap-2'/>
                                    {/*    <div className='font-mono text-black bg-primary rounded-2xl text-sm px-3 ml-3'>*/}
                                    {/*        Verification Request*/}
                                    {/*    </div>*/}
                                </div>
                                {/*<PrimaryButton className='rounded-3xl py-1 w-[8rem] h-min' active={true} name={'Follow'}/>*/}
                            </div>
                        </div>
                        {/*stats*/}
                        <div className='align-bottom mt-5'>
                            <h1 className='font-block text-white text-xs text-left mb-3'>Raffle Stats</h1>
                            <div className='flex flex-row gap-5'>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-2xl flex justify-evenly font-mono'>4418</p>
                                    <p className='text-white text-xs font-mono'>Raffles Bought</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-2xl font-mono'>213227</p>
                                    <p className='text-white text-xs font-mono'>Tickets Sold</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-2xl font-mono'>80330.16</p>
                                    <p className='text-white text-xs font-mono'>Raffles Bought</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-2xl font-mono'>27816</p>
                                    <p className='text-white text-xs font-mono'>Sales Volume</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-2xl font-mono'>143761</p>
                                    <p className='text-white text-xs font-mono'>Tickets Bought</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-2xl font-mono'>2871</p>
                                    <p className='text-white text-xs font-mono'>Raffles Won</p>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-primary text-2xl flex justify-evenly font-mono'>43529.59</p>
                                    <p className='text-white text-xs font-mono'>Purchase Volume</p>
                                </div>
                                {/*<div className='text-primary text-s flex justify-evenly font-mono'>*/}
                                {/*    <p>4418</p>*/}
                                {/*    <p>213227</p>*/}
                                {/*    <p>80330.16</p>*/}
                                {/*    <p>27816</p>*/}
                                {/*    <p>143761</p>*/}
                                {/*    <p>2871</p>*/}
                                {/*    <p>43529.59</p>*/}
                                {/*</div>*/}
                                {/*<div className='text-white text-xs font-mono flex justify-evenly'>*/}
                                {/*    <p>Raffles Bought</p>*/}
                                {/*    <p>Tickets Sold</p>*/}
                                {/*    <p>Sales Volume</p>*/}
                                {/*    <p>Raffles Bought</p>*/}
                                {/*    <p>Tickets Bought</p>*/}
                                {/*    <p>Raffles Won</p>*/}
                                {/*    <p>Purchase Volume</p>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </GradientBorder>


            {/*----------------sort ui--------------------*/}
            <div className='flex justify-between mb-10 mt-5'>

                <Tabs defaultValue="created" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="created">Raffles Created</TabsTrigger>
                        <TabsTrigger value="purchased">Raffles Purchased</TabsTrigger>
                    </TabsList>
                </Tabs>


                <DropdownMenu>
                    <DropdownMenuTrigger className='border border-primary rounded-xl text-accent font-mono px-5 py-2 flex my-auto'>
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
            {/*Raffles*/}
            <div className='grid grid-cols-5 gap-2 w-fit mx-auto'>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
                <RaffleWinnerCard/>
            </div>
            <Footer/>
        </DefaultPage>
    )
}