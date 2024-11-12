import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import DailyRaffleWinners from "@/components/DailyRaffleWinners.tsx";
import CTA from "@/components/CTA.tsx";
import TrendingNFTs from "@/components/TrendingNFTs.tsx";
import LiveActivityBoard from "@/components/LiveActivityBoard.tsx";
import Footer from "@/components/Footer.tsx";
import {DefaultPage} from "@/components/DefaultPage.tsx";

export default function Home(){
    return (
        <div className="w-full">
            <DefaultPage>
                <Header/>
            </DefaultPage>
            <Hero/>
            <DefaultPage>
                <DailyRaffleWinners/>
            </DefaultPage>
            <CTA/>
            <DefaultPage>
                <TrendingNFTs/>
                <LiveActivityBoard/>
                <Footer/>
            </DefaultPage>
        </div>
    )
}