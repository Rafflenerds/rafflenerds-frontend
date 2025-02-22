import WireframeButton from '@/components/WireframeButton.tsx';
import NFTCard from '@/components/NFTCard.tsx';

export default function NFTRaffleList(){
    return (
        <>
            <div>
                <h4>NFT Raffle List</h4>
                <div>
                    <WireframeButton name={"Featured"}/>
                    <WireframeButton name={"Past Raffles"}/>
                </div>
            </div>

            <div>

            </div>

            <div>
                <NFTCard/>
                <NFTCard/>
                <NFTCard/>
                <NFTCard/>
                <NFTCard/>
            </div>
        </>
    )
}