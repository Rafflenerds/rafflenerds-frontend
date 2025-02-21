'use server';

import { Nft, zNft } from '@/lib/zodSchemas';
import { unauthFetch } from './unauthFetch';

export async function getCollectionNft(chainId: number, address: string, tokenId: string): Promise<Nft> {
	const response = await unauthFetch(`/nft-collections/${chainId}/${address}/nfts/${tokenId}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const nft = await response.json();
	return zNft.parse(nft);
}