'use server';

import { zNft } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type Nft = z.infer<typeof zNft>;

export async function getCollectionNft(collectionId: string, tokenId: string): Promise<Nft> {
	const response = await unauthFetch(`/nft-collections/${collectionId}/nfts/${tokenId}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const nft = await response.json();
	return zNft.parse(nft);
}