'use client';
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";

export default function SecondaryButton(props : { name: string, onClick?: () => void, className?: string}){
    return (
            <Button onClick={props.onClick} className={cn("bg-black hover:bg-primary hover:text-black text-white font-bold py-6 px-4 rounded-xl border-2 border-primary", props.className)}>
                <p className='font-block select-none'>{props.name}</p>
            </Button>
    )
}