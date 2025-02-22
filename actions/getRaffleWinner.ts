'use server';

import { RaffleWinner, zRaffleWinner } from '@/lib/zodSchemas';
import { unauthFetch } from './unauthFetch';

export async function getRaffleWinner(id: string): Promise<RaffleWinner> {
	const response = await unauthFetch(`/raffles/${id}/winner`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const raffle = await response.json();
	return zRaffleWinner.parse(raffle);
}