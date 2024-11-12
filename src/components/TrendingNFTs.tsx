import NFTCard from "@/components/NFTCard.tsx";
import WireframeButton from "@/components/WireframeButton.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import PrimaryNFTCard from "@/components/PrimaryNFTCard.tsx";

export default function TrendingNFTs(){
    return (
        <>
            <div className='flex flex-col xl:flex-row justify-between my-10'>
                <h3 className='font-block text-primary'>Trending Ending Soon</h3>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <WireframeButton name='Featured' />
                    <WireframeButton name='Past Raffles' />
                    <PrimaryButton active={true} name='Play!' />
                </div>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-[1fr,3fr] gap-10'>
                <div className=''>
                    <PrimaryNFTCard />
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-1 gap-5'>
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