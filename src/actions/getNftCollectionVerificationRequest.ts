'use server';

import { zNftCollectionVerificationRequest } from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type NftCollectionVerificationRequest = z.infer<typeof zNftCollectionVerificationRequest>;

export async function getNftCollectionVerificationRequest(id: string): Promise<NftCollectionVerificationRequest> {
	const response = await authFetch(`/nft-collections/${id}/verification-request`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const nftCollectionVerificationRequest = await response.json();
	return zNftCollectionVerificationRequest.parse(nftCollectionVerificationRequest);
}