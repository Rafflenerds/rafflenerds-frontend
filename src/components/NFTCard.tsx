import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import placeholderNFT from "../assets/nftPlaceholder.png";
import CaptionButton from "@/components/CaptionButton.tsx";
import GreenCircle from "../assets/greenCircle.svg";
import Image from "next/image";

export default function NFTCard(){
    return(
        <div className="w-80 bg-[url('../assets/raffleBG.svg')] bg-cover bg-no-repeat flex justify-center pr-6 pl-7 pb-3">
            <Card className='w-full'>
                <CardContent className='px-0 pb-0 pt-3'>
                    <Image className='w-full py-2' src={placeholderNFT} alt={'NFT'}/>
                </CardContent>
                <CardHeader className='text-left pt-0 pb-2 px-0'>
                    <span className='flex'>
                        <p className='text-primary mr-2 mt-[-5px]'>Bored Ape Yacht Club</p>
                        <GreenCircle className='w-[15px] mb-1' alt='Active'/>
                    </span>
                    <CardTitle className='text-white text-2xl !mt-1'>#5570</CardTitle>

                    <div className='flex justify-between text-[#CB5EFE] !mt-0'>
                        <p>Price/Ticket</p>
                        <p>Tickets Remaining:</p>
                    </div>
                    <div className='flex justify-between text-[#68FF65] !mt-0'>
                        <p className='text-xl'>105 Credits</p>
                        <p className='text-xl'>24/50</p>
                    </div>
                </CardHeader>
                <CardFooter className='px-0'>
                    <CaptionButton name={"View Raffle"} caption='Ends in 3mins14s'/>
                </CardFooter>
            </Card>
        </div>
    )
}