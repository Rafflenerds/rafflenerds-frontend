import {Input} from "@/components/ui/input.tsx";
import iconSearch from "@/assets/iconSearch.svg";
import {cn} from "@/lib/utils.ts";
import Image from "next/image";

export const SearchBar = (props: {placeholder: string, className?: string}) => {
    return (
        <div className={cn(props.className, 'flex border border-primary rounded-xl w-full h-fit px-2 py-1')}>
            <Image src={iconSearch} alt='Search' className='h-8'/>
            <Input className='text-white font-mono text-accent focus-visible:border-none focus-visible:ring-0 placeholder:text-accent text-center border-none text-xl' type="text" placeholder={props.placeholder} />
        </div>
    );
};
