'use server';

import { Raffle, RaffleCreate, zRaffle } from '@/lib/zodSchemas';
import { authFetch } from './authFetch';

export async function createRaffle(raffle: RaffleCreate): Promise<Raffle> {
	const response = await authFetch('/raffles', {
		method: 'POST',
		body: JSON.stringify(raffle),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const newRaffle = await response.json();
	return zRaffle.parse(newRaffle);
}