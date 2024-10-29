'use server';

import { zRaffleEntry, zRaffleEntryCreate } from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type RaffleEntry = z.infer<typeof zRaffleEntry>;
type RaffleEntryCreate = z.infer<typeof zRaffleEntryCreate>;

export async function createRaffleEntry(raffleId: string, raffleEntry: RaffleEntryCreate): Promise<RaffleEntry> {
	const response = await authFetch(`/raffles/${raffleId}/entries`, {
		method: 'POST',
		body: JSON.stringify(raffleEntry),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const newRaffleEntry = await response.json();
	return zRaffleEntry.parse(newRaffleEntry);
}