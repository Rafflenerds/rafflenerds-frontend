import iconGlobe from "@/assets/iconGlobe.png";
import iconX from "@/assets/iconX.png";
import {cn} from "@/lib/utils.ts";

export const UserLinks = (props: {className?: string}) => {
    return (
        <div className={cn('flex justify-evenly my-auto', props.className)}>
            <a href=''><img src={iconGlobe} alt='Etherscan' className='w-5'/></a>
            <a href=''><img src={iconX} alt='X.com' className='w-5'/></a>
            {/*<a href=''><img src={iconDiscord} alt='Discord.com' className='w-5'/></a>*/}
        </div>
    );
};
