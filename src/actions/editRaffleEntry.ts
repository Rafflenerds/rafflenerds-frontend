'use server';

import { zRaffleEntry, zRaffleEntryPartialUpdate } from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type RaffleEntry = z.infer<typeof zRaffleEntry>;
type RaffleEntryPartialUpdate = z.infer<typeof zRaffleEntryPartialUpdate>;

export async function editRaffleEntry(raffleId: string, raffleEntryId: string, raffleEntry: RaffleEntryPartialUpdate): Promise<RaffleEntry> {
	const response = await authFetch(`/raffles/${raffleId}/entries/${raffleEntryId}`, {
		method: 'PATCH',
		body: JSON.stringify(raffleEntry),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const updatedRaffleEntry = await response.json();
	return zRaffleEntry.parse(updatedRaffleEntry);
}