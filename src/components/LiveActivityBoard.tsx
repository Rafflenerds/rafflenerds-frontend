import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import IconCoin from "../assets/iconCoin.svg"
import IconSquare from "../assets/iconSquare.svg"
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {Avatar} from "@/components/ui/avatar.tsx";
import Image from "next/image";

export default function LiveActivityBoard(){
    return(
        <>
            <h2 className='text-xl text-white font-block mt-10 xl:mt-60 mb-8 xl:text-3xl'>Live Activity Board</h2>
            <Table className="">
                <TableHeader className='font-block'>
                    <TableRow>
                        <TableHead className='text-secondary'>Raffle</TableHead>
                        <TableHead className='text-secondary p-3'>User</TableHead>
                        <TableHead className='text-secondary'>Action</TableHead>
                        <TableHead className='text-secondary'>Amount</TableHead>
                        <TableHead className='text-secondary'>Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className='font-mono text-secondary text-xl'>
                        <TableCell className='text-left'>
                            {/*todo maybe add back idk what this is tbh*/}
                            {/*<Image src={iconSquare} alt='Coins' className='mr-2 my-auto'/>*/}
                            Bored Ape Yacht Club
                        </TableCell>
                        <TableCell className='align-middle'>
                            <div className="flex items-center">
                                <Avatar className='size-8 mr-3'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                Enzoetixx
                            </div>
                        </TableCell>
                        <TableCell className='text-left'>ENTRY</TableCell>
                        <TableCell className='text-primary align-middle'>
                            <div className="flex items-center">
                                <IconCoin alt='Coins' className='mr-2'/>
                                0.004
                            </div>
                        </TableCell>
                        <TableCell className='text-left'>Now</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
    </>
    )
}