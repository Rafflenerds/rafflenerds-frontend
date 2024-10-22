'use server';

import { zNftSummary } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type NftSummary = z.infer<typeof zNftSummary>;

export async function getAllCollectionNfts(id: string): Promise<NftSummary[]> {
	const response = await unauthFetch(`/nft-collections/${id}/nfts`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const nfts = await response.json();
	return zNftSummary.array().parse(nfts);
}