"use client";

import {DataTable} from "@/components/ui/data-table.tsx";
import {ColumnDef} from "@tanstack/react-table";

export type UserEntry = {
    username: string,
    numRaffles: number,
    numTicketsSold: number,
    volume: number,
}


export const columns: ColumnDef<UserEntry>[] = [
    {
        header: 'Rank',
        accessorKey: 'rank',
    },
    {
        accessorKey: "username",
        header: "Status",
    },
    {
        accessorKey: "numRaffles",
        header: "Raffles",
    },
    {
        accessorKey: "numTicketsSold",
        header: "Tickets Sold",
    },
    {
        accessorKey: "volume",
        header: "Volume",
    },
]

const data = [
    {
        rank: 1,
        username: "User1",
        numRaffles: 10,
        numTicketsSold: 100,
        volume: 1000,
    },
    {
        rank: 2,
        username: "User2",
        numRaffles: 5,
        numTicketsSold: 50,
        volume: 500,
    },
    {
        rank: 3,
        username: "User3",
        numRaffles: 2,
        numTicketsSold: 20,
        volume: 200,
    },
    {
        rank: 4,
        username: "User4",
        numRaffles: 1,
        numTicketsSold: 10,
        volume: 100,
    }
]


export default function BuyersTable(){

    return(
        <div>
            <h3 className="text-white font-block xl:text-xl mb-4">Top Buyers</h3>
            <DataTable columns={columns} data={data}/>

        </div>
    )

}