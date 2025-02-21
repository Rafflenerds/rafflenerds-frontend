'use server';

import { unauthFetch } from './unauthFetch';
import { Nft, zNft } from '@/lib/zodSchemas.ts';

export async function getAllCollectionNfts(chainId: string, address: string): Promise<Nft[]> {
	const response = await unauthFetch(`/nft-collections/${chainId}/${address}/nfts`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const nfts = await response.json();
	return zNft.array().parse(nfts);
}