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

const createRaffleInput = z.object({
    raffleStartDate: z.date(),
    raffleEndDate: z.date(),
    // supply: z.number().optional(),
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
    return (
        <div className='border border-primary rounded p-8 w-3/5'>
            {/*top*/}
            <div className='flex items-center justify-between'>
                {/*left*/}
                <div>
                    <p className='text-white font-block text-xs'>Raffle Start Date</p>
                    <DatePicker/>

                    {/*<p className='text-white font-block text-xs'>Supply</p>*/}
                    {/*<Input placeholder='No Limit'/>*/}
                </div>

                {/*right*/}
                <div>
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
        </div>
    )
}