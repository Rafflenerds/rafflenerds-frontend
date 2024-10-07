import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

export const OfferTable = () => {
    return (
        <Table className=' border-primary rounded-3xl'>
            <TableBody>
                <TableRow>
                    <TableCell className='text-white font-block border border-primary text-xs'>Free Entries:10</TableCell>
                    <TableCell className='text-white font-block border border-primary text-xs'>Discount:5%</TableCell>
                    <TableCell className='text-white font-block border border-primary text-xs'>Start: 05/20/2024, 5:30 am</TableCell>
                    <TableCell className='text-white font-block border border-primary text-xs'>End: 05/20/2024, 5:30 am</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};
