'use server';

import { authFetch } from './authFetch';

export async function deleteRaffleEntry(raffleId: string, raffleEntryId: string): Promise<void> {
	const response = await authFetch(`/raffles/${raffleId}/entries/${raffleEntryId}`, {
		method: 'DELETE',
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
}