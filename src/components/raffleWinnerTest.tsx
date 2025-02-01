
import WinnerBottom from '@/assets/raffleWinner/winnerBottom.svg';
import WinnerTop from '@/assets/raffleWinner/winnerTop.svg';
import LRSide from '@/assets/raffleWinner/lrSide.svg';
import TopCorner from '@/assets/raffleWinner/topCorner.svg';
import BottomCorner from '@/assets/raffleWinner/bottomCorner.svg';
import TBSide from '@/assets/raffleWinner/tbSide.svg';

export default function RaffleWinnerTest(){
    
    return(
        <div className="h-full w-full grid grid-rows-[auto,1fr,auto], grid-cols-[auto,1fr,auto]">
            
            {/*top*/}
            <TopCorner className="col-span-1 row-span-1 scale-x-[-1] w-8" alt=""/>
            {/*wrap in div to hide line getting thicker*/}
            <div className="h-[2px] overflow-y-hidden">
                <TBSide className=" w-full row-span-1" alt=""/>
            </div>
            <TopCorner className="col-span-1 row-span-1 w-8" alt=""/>
            
            {/*middle*/}
            <LRSide className=" w-fit h-full row-span-1 mr-auto pl-[6px]" alt=""/>
            {/*/!*actual content*!/*/}
            <div className="w-full h-full row-span-1">
                <p className="text-white text-2xl"> test</p>
            </div>
            <LRSide className=" w-fit h-full row-span-1 ml-auto pr-[6px]" alt=""/>
            
  
            {/*bottom*/}
            <BottomCorner className="col-span-1 row-span-1 scale-x-[-1]" alt=""/>
            {/*wrap in div to hide line getting thicker*/}
            <div className="h-[2px] overflow-y-hidden mt-auto">
                <TBSide className=" w-full row-span-1" alt=""/>
            </div>
            <BottomCorner className="col-span-1 row-span-1" alt=""/>
            
        </div>
    )
}