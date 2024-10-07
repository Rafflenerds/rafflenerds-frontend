import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {CheckboxWithText} from "@/components/CheckboxWithText.tsx";

export const TraitDropdown = (props: {name: string, options: string[]}) => {
    return (
        <Accordion type="single" collapsible className=''>
            <AccordionItem value="item-1" className='border-0'>
                <AccordionTrigger className='text-white font-mono no-underline text-base py-2'>
                    <div className='flex justify-between w-full pr-2'>
                        <p className=''>{props.name}</p>
                        <p className='text-accent'>{props.options.length}</p>
                    </div>
                </AccordionTrigger>
                {props.options.map((option, index) => (
                    <AccordionContent key={index} className='text-white font-mono text-left text-base'>
                        <CheckboxWithText text={option} />
                    </AccordionContent>
                ))}
            </AccordionItem>
        </Accordion>
    );
};
