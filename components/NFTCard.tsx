import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import placeholderNFT from '@/public/assets/nftPlaceholder.png';
import CaptionButton from '@/components/CaptionButton.tsx';
import GreenCircle from '@/public/assets/greenCircle.svg';
import Image from 'next/image';
import NFTRight from '@/public/assets/nftCard/NFTRight.svg';
import NFTBR from '@/public/assets/nftCard/NFTBR.svg';

export default function NFTCard(){
    return(
        <div className="border-2 border-primary rounded-xl h-fit w-fit ml-5 mr-4 mb-5 -z-10 relative">
            
            <div className="w-full h-full bg-nft-card z-10 rounded-xl px-8">
                
                <Card className='w-full h-full'>
                    <CardContent className='px-0 pb-0 pt-3'>
                        <Image className='py-2 w-full' src={placeholderNFT} alt={'NFT'}/>
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
                
                <NFTRight className="absolute right-0 bottom-[10%] w-[1.2rem] -mr-[0.5rem] bg-black -z-10"/>
                
                <NFTBR className="absolute bottom-0 left-0 h-[1rem] bg-black -mb-2 -ml-2 -z-10"/>
            </div>
        
        </div>
    )
}