'use server';

import { zRaffle } from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type Raffle = z.infer<typeof zRaffle>;

export async function creatRaffle(raffle: Raffle): Promise<Raffle> {
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