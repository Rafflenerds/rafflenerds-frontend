import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import {DefaultPage} from "@/components/DefaultPage.tsx";

export default function Leaderboard(){
    return (
        <DefaultPage>
            <Header/>
            <h1 className='font-block text-white mb-10 mt-40 text-left text-3xl'>Leaderboard</h1>

            <Footer/>
        </DefaultPage>
    )
}