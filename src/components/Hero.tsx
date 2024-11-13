import hero from '../assets/hero.png';
import Image from "next/image";

export default function Hero(){
    return(
        <Image className='w-full mt-4 xl:mt-0' draggable={false} src={hero} alt={'New Raffles Everyday!'}/>
    )
}