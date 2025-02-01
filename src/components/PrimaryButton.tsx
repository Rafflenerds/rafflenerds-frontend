'use client';
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";

export default function PrimaryButton(props : { name: string, active: boolean, className?: string, onClick?: () => void, type?: 'button' | 'submit' | 'reset' }) {


    return <Button onClick={props.onClick} type={props.type} className={cn('hover:bg-cyan-600 font-bold py-3 px-4 rounded-[8px]' , props.active? 'bg-primary text-black' : 'bg-black text-primary border-2 border-primary', props.className)}>
        <p className={`font-block select-none`}>{props.name}</p>
    </Button>

}