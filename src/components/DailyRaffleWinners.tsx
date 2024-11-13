import RaffleWinnerCard from "@/components/RaffleWinnerCard.tsx";
import AutoScale from "@/components/AutoScale.tsx";

export default function DailyRaffleWinners(){
    return(
        <>
            <h2 className='text-3xl text-white font-block mb-10 text-center'>Daily Raffle Winners!</h2>
            <AutoScale className="mb-20">

            <div className='grid grid-cols-1 lg:grid-cols-6 justify-center gap-3  h-full'>
                <RaffleWinnerCard />
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