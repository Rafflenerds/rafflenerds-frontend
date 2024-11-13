import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import {DefaultPage} from "@/components/DefaultPage.tsx";
import BuyersTable from "@/components/BuyersTable.tsx";
import RafflersTable from "@/components/RafflersTable.tsx";

export default function Leaderboard(){
    return (
        <DefaultPage>
            <Header/>
            <h1 className='font-block text-white mb-10 mt-16 xl:mt-40 text-left text-xl xl:text-3xl'>Leaderboard</h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <RafflersTable/>
                <BuyersTable/>
            </div>
            <Footer/>
        </DefaultPage>
    )
}