'use server';

import { Raffle, zRaffle } from '@/lib/zodSchemas';
import { unauthFetch } from './unauthFetch';

export async function getRaffle(id: string): Promise<Raffle> {
	const response = await unauthFetch(`/raffles/${id}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const raffle = await response.json();
	return zRaffle.parse(raffle);
}