import NFTCard from "@/components/NFTCard.tsx";
import WireframeButton from "@/components/WireframeButton.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import PrimaryNFTCard from "@/components/PrimaryNFTCard.tsx";
import AutoScale from "@/components/AutoScale.tsx";

export default function TrendingNFTs(){
    return (
        <>
            <div className='flex flex-col xl:flex-row justify-between my-10'>
                <h3 className='font-block text-primary text-center text-xl mt-10 mb-5 xl:my-0 xl:text-left xl:text-base'>Trending Ending Soon</h3>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <WireframeButton className="mx-auto xl:mx-0" name='Featured' />
                    <WireframeButton className="mx-auto xl:mx-0" name='Past Raffles' />
                    <PrimaryButton className="hidden xl:block" active={true} name='Play!' />
                </div>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-[1fr,3fr] gap-10'>
                <div className='hidden xl:block'>
                    <PrimaryNFTCard />
                </div>
                <AutoScale>
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
                </AutoScale>
            </div>
        </>
    )
}