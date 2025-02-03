'use server';

import { zNftSummary } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type NftSummary = z.infer<typeof zNftSummary>;

export async function getAllCollectionNfts(chainId: string, address: string): Promise<NftSummary[]> {
	const response = await unauthFetch(`/nft-collections/${chainId}/${address}/nfts`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const nfts = await response.json();
	return zNftSummary.array().parse(nfts);
}