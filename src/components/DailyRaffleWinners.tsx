import RaffleWinnerCard from "@/components/RaffleWinnerCard.tsx";

export default function DailyRaffleWinners(){
    return(
        <>
            <h2 className='text-3xl text-white font-block mb-10'>Daily Raffle Winners!</h2>
            <div className='flex justify-center gap-3 mb-20'>
                <RaffleWinnerCard />
                <RaffleWinnerCard />
                <RaffleWinnerCard />
                <RaffleWinnerCard />
                <RaffleWinnerCard />
                <RaffleWinnerCard />
            </div>
        </>
    )
}