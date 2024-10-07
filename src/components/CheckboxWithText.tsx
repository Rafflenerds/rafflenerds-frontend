import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxWithText(props: { text: string }) {
    return (
        <div className="items-top flex space-x-2 m-auto">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <p className="text-sm text-muted-foreground font-mono">
                    {props.text}
                </p>
            </div>
        </div>
    )
}
