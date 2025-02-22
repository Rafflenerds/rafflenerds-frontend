import hero from '@/public/assets/hero.png';
import Image from 'next/image';

export default function Hero(){
    return(
        <div className="overflow-hidden max-w-[1920px] mx-auto">
            <Image className='w-full mt-4 xl:mt-0 scale-125 lg:scale-100' draggable={false} src={hero} alt={'New Raffles Everyday!'}/>
        </div>
    )
}