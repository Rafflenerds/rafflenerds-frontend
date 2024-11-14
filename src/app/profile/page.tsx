'use server';
import {Avatar} from "@/components/ui/avatar.tsx";
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import {UserLinks} from "@/components/UserLinks.tsx";
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
import AutoScale from "@/components/AutoScale.tsx";
import {getUser} from "@/actions/getUser.ts";
import {useSearchParams} from "next/navigation";

export default async function Profile({params, searchParams}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {

    const address = (await searchParams).address as string;
    if (!address) {
        return <div>Address not found</div>;
    }
    const user = await getUser(address);

    return (
        <DefaultPage>
            <Header/>
            {/*profile banner*/}
            <div className='h-16'></div>
            {/*1px border*/}
            <GradientBorder>
                <div className={`border rounded-2xl py-5 lg:pt-60 px-10 bg-[url(${user.bannerUrl})] bg-cover`}>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        {/*profile*/}
                        <div className='flex flex-col lg:flex-row'>
                            <Avatar className='size-20 lg:size-32 mx-auto lg:mx-0 lg:mr-8'>
                                <AvatarImage src={user.logoUrl}/>
                                <AvatarFallback>{user.username[0]}</AvatarFallback>
                            </Avatar>
                            {/*user info*/}
                            <div className='my-auto flex flex-col mt-8 lg:mt-auto'>
                                <div className='flex mb-2'>
                                    <h1 className='font-block text-primary text-sm'>{"@" + user.username}</h1>
                                    {/*<a href='#'><Image className='ml-2 size-5' src={iconFlag} alt='Report User'/></a>*/}
                                </div>
                                {/*icons*/}
                                <div className='flex mb-4'>
                                    <UserLinks links={user.links} className='gap-6 mx-auto lg:mx-0 lg:gap-2'/>
                                    {/*    <div className='font-mono text-black bg-primary rounded-2xl text-sm px-3 ml-3'>*/}
                                    {/*        Verification Request*/}
                                    {/*    </div>*/}
                                </div>
                                {/*<PrimaryButton className='rounded-3xl py-1 w-[8rem] h-min' active={true} name={'Follow'}/>*/}
                            </div>
                        </div>
                        {/*stats*/}
                        <div className='align-bottom mt-5 text-center lg:text-left'>
                            <h1 className='font-block text-white text-xs mb-3'>Raffle Stats</h1>
                            <div className='flex flex-col lg:flex-row gap-5'>

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
            <div className='flex flex-col lg:flex-row justify-between mb-10 mt-5'>


                <Tabs defaultValue="created" className="xl:w-[400px]">
                    <TabsList className="flex-wrap gap-4 pb-20 ring-0 lg:ring-1 lg:pb-1 lg:flex-row">
                        <TabsTrigger value="created">Raffles Created</TabsTrigger>
                        <TabsTrigger value="purchased">Raffles Purchased</TabsTrigger>
                    </TabsList>
                </Tabs>


                <DropdownMenu>
                    <DropdownMenuTrigger
                        className='border border-primary rounded-xl text-accent font-mono px-5 py-2 flex my-auto mt-5 lg:mt-0'>
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
            <AutoScale>
                <div className='grid grid-cols-1 xl:grid-cols-5 gap-2 w-fit mx-auto'>
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
            </AutoScale>
            <Footer/>
        </DefaultPage>
    )
}