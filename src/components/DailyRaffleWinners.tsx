import RaffleWinnerCard from "@/components/RaffleWinnerCard.tsx";
import AutoScale from "@/components/AutoScale.tsx";

export default function DailyRaffleWinners(){
    return(
        <>
            <h2 className='text-xl xl:text-3xl text-white font-block mb-10 text-center'>Daily Raffle Winners!</h2>
            <AutoScale className="mb-20">

            <div className='grid grid-cols-1 lg:grid-cols-5 justify-center gap-5 h-full'>
                <RaffleWinnerCard />
                <RaffleWinnerCard />
                <RaffleWinnerCard />
                <RaffleWinnerCard />
                <RaffleWinnerCard />
            </div>
            </AutoScale>

        </>
    )
}