import Header from '@/components/Header.tsx';
import Footer from '@/components/Footer.tsx';
import { CreateRaffleForm } from '@/components/CreateRaffleForm.tsx';
import { NFTDialog } from '@/components/NftDialog.tsx';
import { getOwnNfts } from '@/actions/getOwnNfts.ts';

export default async function CreateRaffle() {
    const nfts = await getOwnNfts();
    
    return (
        <div className='px-2 xl:px-40'>
            <Header/>
            
            <h1 className='font-block text-white mb-10 text-left mt-16'>Create Raffle</h1>
            
            <div
                className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-10 justify-center mb-16 max-w-screen-2xl mx-auto">
                {/*left*/}
                <NFTDialog userOwnedNFTs={nfts}/>
                {/*right*/}
                <CreateRaffleForm/>
            </div>
            <Footer/>
        </div>
    );
};
