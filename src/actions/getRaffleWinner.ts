'use server';

import { zRaffleWinner } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type RaffleWinner = z.infer<typeof zRaffleWinner>;

export async function getRaffleWinner(id: string): Promise<RaffleWinner> {
	const response = await unauthFetch(`/raffles/${id}/winner`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const raffle = await response.json();
	return zRaffleWinner.parse(raffle);
}