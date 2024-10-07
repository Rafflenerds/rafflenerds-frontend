import {Button} from "@/components/ui/button.tsx";

export default function CaptionButton(props : { name: string, caption: string, className?: string }){
    return <Button className={`bg-primary flex flex-col hover:bg-blue-700 text-black font-bold py-8 w-full rounded-xl ${props.className} pt-9`}>
        <p className={`font-block mb-1.5 select-none`}>{props.name}</p>
        <p className={`font-sans select-none`}>{props.caption}</p>
    </Button>
}