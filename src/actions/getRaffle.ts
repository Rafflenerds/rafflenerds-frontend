'use server';

import { zRaffle } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type Raffle = z.infer<typeof zRaffle>;

export async function getRaffle(id: string): Promise<Raffle> {
	const response = await unauthFetch(`/raffles/${id}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const raffle = await response.json();
	return zRaffle.parse(raffle);
}