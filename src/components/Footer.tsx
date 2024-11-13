import RNLogo from '../assets/RNLogo.png';
import {cn} from "@/lib/utils.ts";
import Image from "next/image";

export default function Footer(props: { className?: string }){
    return(
        <>
            <footer>
                <div className='flex justify-center align-middle mt-32'>
                    <div className={cn('flex flex-col space-y-4 justify-center mb-10 lg:mb-96 text-center', props.className)}>
                        <Image className='w-[206px] m-auto mb-10' src={RNLogo} alt={'RaffleNerds Logo'}/>
                        <p className='text-primary text-3xl font-mono'>(C) 2024 //TWITTER //DISCORD //TG</p>
                    </div>
                </div>
            </footer>
        </>
    )
}