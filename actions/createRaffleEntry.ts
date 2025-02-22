'use server';

import { RaffleEntry, RaffleEntryCreate, zRaffleEntry } from '@/lib/zodSchemas';
import { authFetch } from './authFetch';


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