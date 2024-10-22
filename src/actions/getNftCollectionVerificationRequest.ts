'use server';

import { z } from 'zod';
import { authFetch } from './authFetch';

const zNftCollectionVerificationRequest = z.object({ accepted: z.boolean() });
type NftCollectionVerificationRequest = z.infer<typeof zNftCollectionVerificationRequest>;

export async function getNftCollectionVerificationRequest(id: string): Promise<NftCollectionVerificationRequest> {
	const response = await authFetch(`/nft-collections/${id}/verification-request`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const nftCollectionVerificationRequest = await response.json();
	return zNftCollectionVerificationRequest.parse(nftCollectionVerificationRequest);
}