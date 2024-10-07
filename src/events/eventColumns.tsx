"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Event = {
    participant: string
    address: string
    action: "entry" | "win"
    amount: number
    timestamp: Date
}

export const eventColumns: ColumnDef<Event>[] = [
    {
        accessorKey: "participant",
        header: "Participants",
    },
    {
        accessorKey: "address",
        header: "User Address",
    },
    {
        accessorKey: "action",
        header: "Action",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "timestamp",
        header: "Time",
    },
]
