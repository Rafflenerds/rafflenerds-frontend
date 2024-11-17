import SecondaryButton from "@/components/SecondaryButton.tsx";
import {Avatar} from "@/components/ui/avatar.tsx";
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {cn} from "@/lib/utils.ts";
import {getUser} from "@/actions/getUser.ts";
import {redirect} from "next/navigation";


export default async function HamburgerMenu({className, address}: { className?: string, address: string }) {
    const user = await getUser(address);

    function nav(page: string) {
        redirect(page);
    }

    return (
        <div
            className={cn('flex flex-col gap-2 w-80 border-2 p-3 border-primary absolute right-60 bg-black z-10', className)}>
            <div className='border-2 p-3 border-primary rounded-xl flex flex-row'>
                <Avatar>
                    <AvatarImage src={user.logoUrl}/>
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                </Avatar>
                <p className='text-white font-block text-sm my-auto ml-3'>{user.address || "Anon"}</p>
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