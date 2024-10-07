import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import iconCoin from "../assets/iconCoin.svg"
import iconSquare from "../assets/iconSquare.svg"
import "../App.css"
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function LiveActivityBoard(){
    return(
        <>
            <h2 className='text-3xl text-white font-block mt-60 mb-8'>Live Activity Board</h2>
            <Table>
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
                            {/*<img src={iconSquare} alt='Coins' className='mr-2 my-auto'/>*/}
                            Bored Ape Yacht Club
                        </TableCell>
                        <TableCell className='flex'>
                            <Avatar className='size-8 mr-3 my-auto'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            Enzoetixx
                        </TableCell>
                        <TableCell className='text-left'>ENTRY</TableCell>
                        <TableCell className='text-primary flex'>
                            <img src={iconCoin} alt='Coins' className='mr-2 my-auto'/>
                            0.004
                        </TableCell>
                        <TableCell className='text-left'>Now</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
    </>
    )
}