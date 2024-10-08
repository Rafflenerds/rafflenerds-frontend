import NFTCard from "@/components/NFTCard.tsx";
import WireframeButton from "@/components/WireframeButton.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import PrimaryNFTCard from "@/components/PrimaryNFTCard.tsx";

export default function TrendingNFTs(){
    return (
        <>
            <div className='flex justify-between my-10'>
                <h3 className='font-block text-primary'>Trending Ending Soon</h3>

                <div className='flex gap-3'>
                    <WireframeButton name='Featured' />
                    <WireframeButton name='Past Raffles' />
                    <PrimaryButton active={true} name='Play!' />
                </div>
            </div>

            <div className='flex'>
                <div className='w-2/5'>
                    <PrimaryNFTCard />
                </div>
                <div className='w-3/5 grid grid-cols-3 gap-5'>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                    <NFTCard/>
                </div>
            </div>
        </>
    )
}