import Header from "@/components/Header.tsx";
import {DefaultPage} from "@/components/DefaultPage.tsx";

export default function AdminDashboard(){
    return(
        <DefaultPage>
            <Header/>
            <h1 className='text-white font-block'>Admin Dashboard</h1>
        </DefaultPage>
    );
}