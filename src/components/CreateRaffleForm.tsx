import {Input} from "@/components/ui/input.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {ControllerRenderProps, FieldValues, useFieldArray, useForm} from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {format} from "date-fns";
import {CalendarIcon, Trash2} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {zNftType, zRaffleCreate} from "@/lib/zodSchemas.ts";
import {useState} from "react";
import {createRaffle} from "@/actions/createRaffle.ts";
import catchError from "@/utils/catchError.ts";
import {useToast} from "@/components/ui/use-toast.ts";

type RaffleInput = z.infer<typeof zRaffleCreate>;
export function CreateRaffleForm(){


    const [discountIndex, setDiscountIndex] = useState(0);
    const { toast } = useToast();

    const form = useForm<RaffleInput>({
        resolver: zodResolver(zRaffleCreate),
        defaultValues: {
            listerId: '',
            nftAmount: 0,
        }
    })

    function onSubmit(values: RaffleInput) {
        createRaffle(values).then((res) => {
            toast({
                title: "✅ Raffle Created",
                description: "Raffle Created Successfully",
            })
            }
        ).catch(() => {
            toast({
                title: "❌ Error",
                description: "Raffle Creation Failed",
                variant: 'destructive',
        })
    })}

    function addDiscountHandler({ minTickets, discountPrice }: { minTickets: number, discountPrice: number }) {

        if (minTickets === 0 || discountPrice === 0) {
            return;
        }

        if (!minTickets || !discountPrice) {
            return;
        }

        append({ minTickets, discountPrice });
        setDiscountIndex(discountIndex + 1);
    }

    const { fields, append, remove } = useFieldArray({
        name: 'bulkDiscounts',
        control: form.control,
    });

    const [minTickets, setMinTickets] = useState('0');
    const [discount, setDiscount] = useState('0');
    const [nftType, setNftType] = useState<z.infer<typeof zNftType>>('erc721');

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, (e)=> console.log(e))} className="text-center">
                    <div className='border border-primary rounded p-8 mb-10'>
                        <h3 className='text-white font-block text-xl mb-6 text-center'>Raffle Details</h3>
                        {/*top*/}
                        <div className='flex flex-col xl:flex-row gap-4 xl:gap-0 items-center justify-between'>


                            <FormField
                                control={form.control}
                                name="endDate"
                                render={({field}) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className='text-white font-block text-sm xl:text-base'>Raffle End Date</FormLabel>
                                        <FormDatePicker {...field} />
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {nftType === 'erc1155' && <FormField
								control={form.control}
								name="nftAmount"
								render={({field}) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className='text-white font-block text-sm xl:text-base'>NFT
                                            amount</FormLabel>
                                        <Input placeholder='No Limit' {...field}/>
                                        <FormMessage/>
                                    </FormItem>
                                )}
							/>}

                            <FormField
                                control={form.control}
                                name="ticketPrice"
                                render={({field}) => (
                                    <FormItem className="">
                                        <FormLabel className='text-white font-block text-sm xl:text-base'>Price Per
                                            Ticket</FormLabel>
                                        <div className="flex justify-center">
                                            <Input placeholder='0' {...field}/>

                                            {/*<DropdownMenu>*/}
                                            {/*    <DropdownMenuTrigger className='text-accent font-mono'>USD</DropdownMenuTrigger>*/}
                                            {/*    <DropdownMenuContent>*/}
                                            {/*        <DropdownMenuLabel>Currency</DropdownMenuLabel>*/}
                                            {/*        <DropdownMenuSeparator/>*/}
                                            {/*        <DropdownMenuItem>USD</DropdownMenuItem>*/}
                                            {/*        <DropdownMenuItem>ETH</DropdownMenuItem>*/}
                                            {/*    </DropdownMenuContent>*/}
                                            {/*</DropdownMenu>*/}
                                        </div>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                        </div>

                        {/*middle*/}
                        <Separator className='bg-primary my-5'/>

                        <h3 className='text-white font-block text-xl mb-6 text-center'>Ticket Limits</h3>
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-10 items-center justify-between'>
                            {/*left*/}

                            <FormField
                                control={form.control}
                                name="maxTickets"
                                render={({field}) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className='text-white font-block text-sm xl:text-base'>Max tickets</FormLabel>
                                        <Input placeholder='No Limit' {...field}/>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/*mid*/}
                            <FormField
                                control={form.control}
                                name="maxTicketsPerUser"
                                render={({field}) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className='text-white font-block text-sm xl:text-base'>Min per wallet</FormLabel>
                                        <Input placeholder='No Limit' {...field}/>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/*right*/}
                            <FormField
                                control={form.control}
                                name="maxTicketsPerUser"
                                render={({field}) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className='text-white font-block text-sm xl:text-base'>Max per wallet</FormLabel>
                                        <Input placeholder='No Limit' {...field}/>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                        </div>

                        {/*bottom*/}
                        <Separator className='bg-primary my-5'/>


                        <div className='text-center'>
                            <h3 className='text-white font-block text-xl mb-6 text-center'>Offers</h3>
                            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 items-center justify-between'>

                                <FormField
                                    control={form.control}
                                    name={`bulkDiscounts.${discountIndex}.minTickets`}
                                    render={({field}) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel className='text-white font-block text-sm xl:text-base'>Min Tickets</FormLabel>
                                            <Input placeholder='No Limit' {...field} value={minTickets}
                                                   onChange={(e) => setMinTickets(e.target.value)}/>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`bulkDiscounts.${discountIndex}.discountPrice`}
                                    render={({field}) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel className='text-white font-block text-sm xl:text-base'>Discount
                                                Price</FormLabel>
                                            <Input placeholder='0' {...field} value={discount}
                                                   onChange={(e) => setDiscount(e.target.value)}/>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <PrimaryButton onClick={() => addDiscountHandler({
                                    minTickets: Number(minTickets),
                                    discountPrice: Number(discount)
                                })} name="Add Offer" active={true} className="mt-auto"/>
                            </div>

                        </div>


                    </div>

                    {fields.length > 0 && <h3 className="text-white font-block text-xl mb-4">Discounts</h3>}
                    <div className="flex flex-col gap-2 text-white font-block text-sm text-center">
                    {fields.map((field, index) => (
                        <div className='border border-primary rounded py-5 grid grid-cols-[1fr_1fr_3rem] items-center w-1/2' key={index}>
                            <p>Min Tickets: {field.minTickets}</p>
                            <p>Price: {field.discountPrice}</p>

                            <Trash2 color="red" onClick={() => remove(index)} className="cursor-pointer" />
                        </div>))
                    }
                    </div>

                    <div className='flex justify-center mt-10'>
                        <PrimaryButton type="submit" name="Create Raffle" active={true}/>

                    </div>
                </form>
            </Form>
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