import NFTBR from '../assets/nftCard/NFTBR.svg'
import NFTRight from '../assets/nftCard/NFTRight.svg'

export default function NFTCardTest({ children }: { children: React.ReactNode }) {
    
    return (
        <div className="border-2 border-primary rounded-xl h-full ml-5 mr-4 mb-5 -z-10 relative">
            
            <div className="w-full h-full bg-nft-card z-10 rounded-xl ">
                
                {children}
                
                <NFTRight className="absolute right-0 bottom-[10%] w-[1.2rem] -mr-[0.5rem] bg-black -z-10"/>
               
                <NFTBR className="absolute bottom-0 left-0 h-[1rem] bg-black -mb-2 -ml-2 -z-10"/>
            </div>
            
        </div>
    )
}