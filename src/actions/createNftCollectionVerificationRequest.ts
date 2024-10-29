'use server';

import { zNftCollectionVerificationRequest } from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type NftCollectionVerificationRequest = z.infer<typeof zNftCollectionVerificationRequest>;

export async function createNftCollectionVerificationRequest(nftCollectionId: string): Promise<NftCollectionVerificationRequest> {
	const response = await authFetch(`/nft-collections/${nftCollectionId}/verification-request`, {
		method: 'POST',
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return z.object({ accepted: z.boolean() }).parse(await response.json());
}