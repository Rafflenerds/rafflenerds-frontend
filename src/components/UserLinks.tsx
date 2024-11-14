import iconGlobe from "@/assets/iconGlobe.png";
import iconX from "@/assets/iconX.png";
import {cn} from "@/lib/utils.ts";
import Image from "next/image";
import {Link} from "@/lib/zodSchemas.ts";

export const UserLinks = (props: {className?: string, links: Link[]}) => {
    return (
        <div className={cn('flex justify-evenly my-auto', props.className)}>
            {/*todo add all link types*/}
            {props.links.map((link, i) => (
                <a key={i} href={link.url}>
                    <Image src={link.type === 'Twitter' ? iconX : iconGlobe} alt={link.type} className='w-5'/>
                </a>
            ))
            }
        </div>
    );
};
