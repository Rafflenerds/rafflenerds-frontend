'use server';

import { zNftCollection } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type NftCollection = z.infer<typeof zNftCollection>;

export async function getNftCollection(id: string): Promise<NftCollection> {
	const response = await unauthFetch(`/nft-collections/${id}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const raffle = await response.json();
	return zNftCollection.parse(raffle);
}