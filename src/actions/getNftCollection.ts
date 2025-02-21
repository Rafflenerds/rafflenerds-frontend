'use server';

import { NftCollection, zNftCollection } from '@/lib/zodSchemas';
import { unauthFetch } from './unauthFetch';

export async function getNftCollection(chainId: string, address: string): Promise<NftCollection> {
	const response = await unauthFetch(`/nft-collections/${chainId}/${address}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const raffle = await response.json();
	return zNftCollection.parse(raffle);
}