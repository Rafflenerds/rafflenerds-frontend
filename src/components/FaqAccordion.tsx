import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";

export default function FaqAccordion(props: {question: string, answer: string}){
    return (
        <Accordion type="single" collapsible className='border-2 border-primary rounded-2xl'>
            <AccordionItem value="item-1" className='border-0'>
                <AccordionTrigger className='text-white font-mono ml-8 no-underline text-xl'>{props.question}</AccordionTrigger>
                <AccordionContent className='text-white font-mono text-left ml-8'>
                    {props.answer}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}