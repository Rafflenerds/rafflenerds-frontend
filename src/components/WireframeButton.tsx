'use client';
import {Button} from "@/components/ui/button.tsx";
import {GradientBorder} from "@/components/GradientBorder.tsx";

export default function WireframeButton(props: { name: string }){
    return (
        <GradientBorder>
            <Button className="bg-black hover:bg-black text-primary px-10 rounded-xl h-min text-[1.3rem] py-1 select-none">
                {props.name}
            </Button>
        </GradientBorder>
    )
}