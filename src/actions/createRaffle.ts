'use server';

import {zRaffle, zRaffleCreate} from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type Raffle = z.infer<typeof zRaffle>;
type RaffleInput = z.infer<typeof zRaffleCreate>;

export async function createRaffle(raffle: RaffleInput): Promise<Raffle> {
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