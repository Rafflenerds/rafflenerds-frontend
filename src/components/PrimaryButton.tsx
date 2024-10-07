import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";

export default function PrimaryButton(props : { name: string, active: boolean, className?: string }){
    return <Button className={cn(cn('hover:bg-cyan-600 font-bold py-3 px-4 rounded-[8px]', props.className), props.active? 'bg-primary text-black' : 'bg-black text-primary border-2 border-primary')}>
        <p className={`font-block select-none`}>{props.name}</p>
    </Button>
}