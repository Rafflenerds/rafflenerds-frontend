import SecondaryButton from "@/components/SecondaryButton.tsx";
import {Avatar} from "@/components/ui/avatar.tsx";
import iconVerified from "../assets/iconVerified.png"
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import { useRouter } from 'next/navigation';


export default function HamburgerMenu(){
    const router = useRouter();

    function nav(page: string){
        router.push(page);
    }
    return(
        <div className='flex flex-col gap-2 w-80 border-2 p-3 border-primary absolute right-60 bg-black '>
            <div className='border-2 p-3 border-primary rounded-xl flex flex-row'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-white font-block text-sm my-auto ml-3'>MR. ANONYMON</p>
                {/*<Image src={iconVerified} alt='Verified' className='w-8 h-8 my-auto'/>*/}
                {/*todo: idk why this is here*/}
                {/*<UserLinks/>*/}
            </div>
            <SecondaryButton name={'Leaderboard'} onClick={() => {
                nav('/leaderboard')
            }}/>
            <SecondaryButton name={'Create Raffle'} onClick={() => nav('/create-raffle')}/>
            <SecondaryButton name={'Credits'} onClick={() => nav('/credits')}/>
            <SecondaryButton name={'My Profile'} onClick={() => nav('/profile')}/>
            <SecondaryButton name={'FAQs'} onClick={() => nav('/faq')}/>

        </div>
    )
}