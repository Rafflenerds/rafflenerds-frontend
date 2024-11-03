import {DatePicker} from "@/components/DatePicker.tsx";
import {Input} from "@/components/ui/input.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {ControllerRenderProps, FieldValues, useForm} from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";

const createRaffleInput = z.object({
    raffleStartDate: z.date(),
    raffleEndDate: z.date(),
    supply: z.number().optional(),
    ticketPrice: z.number(),
    limitPerWallet: z.number().optional(),
    // numberOfWinners: z.number(),
    offers: z.array(z.object({
        numberOfEntries: z.number(),
        discount: z.number(),
        offerEndDate: z.date(),
    })),
});

export function CreateRaffleForm(){
    const form = useForm<z.infer<typeof createRaffleInput>>({
        resolver: zodResolver(createRaffleInput),
    })

    function onSubmit(values: z.infer<typeof createRaffleInput>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className='border border-primary rounded p-8 w-3/5'>
            <Form {...form}>
                {/*top*/}
                <div className='flex items-center justify-between'>
                    {/*left*/}
                    <div>
                        <FormField
                            control={form.control}
                            name="raffleStartDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel  className='text-white font-block text-xs'>Raffle Start Date</FormLabel>
                                    <FormDatePicker {...field} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="supply"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel  className='text-white font-block text-xs'>Supply</FormLabel>
                                    <Input placeholder='No Limit'/>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/*right*/}
                    <div>
                        <FormField
                            control={form.control}
                            name="raffleEndDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel  className='text-white font-block text-xs'>Raffle End Date</FormLabel>
                                    <FormDatePicker {...field} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <p className='text-white font-block text-xs'>Raffle End Date</p>
                        <DatePicker/>

                        <p className='text-white font-block text-xs mt-5'>Ticket Price</p>
                        <div className='flex justify-center'>
                            <Input placeholder="0"/>

                            <DropdownMenu>
                                <DropdownMenuTrigger className='text-accent font-mono'>USD</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Currency</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem>USD</DropdownMenuItem>
                                    <DropdownMenuItem>ETH</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

                {/*middle*/}
                <Separator className='bg-primary my-5'/>

                <div className='flex items-center justify-between'>
                    {/*left*/}
                    <div>
                        <p className='text-white font-block text-xs'>Limit per wallet</p>
                        <Input placeholder='No Limit'/>
                    </div>

                    {/*right*/}
                    <div>
                        {/*<p className='text-white font-block text-xs mt-5'># of winners</p>*/}
                        {/*<Input/>*/}
                    </div>
                </div>

                {/*bottom*/}
                <Separator className='bg-primary my-5'/>


                <div className='text-left'>
                    <h3 className='text-white font-block text-xl mb-6'>Offers</h3>
                    <div className='flex items-center justify-between'>

                        <div className=''>
                            <p className='text-white font-block text-xs'>Number Of Entries</p>
                            <Input placeholder='No Limit'/>
                        </div>

                        <div className=''>
                            <p className='text-white font-block text-xs'>Discount %</p>
                            <Input placeholder="0"/>
                        </div>

                        <div className=''>
                            <p className='text-white font-block text-xs'>Offer End Date</p>
                            <DatePicker/>
                        </div>
                    </div>
                    <PrimaryButton name="Add Offer" active={true}/>
                </div>
            </Form>
        </div>
    )
}

function FormDatePicker(field: ControllerRenderProps<FieldValues, string>){
    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                    >
                        {field.value ? (
                            format(field.value, " ControllerRenderProps<FieldValues, string>PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                        date < new Date()
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>)
}