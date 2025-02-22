'use server';

import { NftCollectionPartialUpdate, zNftCollectionPartialUpdate } from '@/lib/zodSchemas';
import { authFetch } from './authFetch';


export async function editNftCollection(id: string, nftCollection: NftCollectionPartialUpdate): Promise<NftCollectionPartialUpdate> {
	const response = await authFetch(`/nft-collections/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(nftCollection),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const editedNftCollection = await response.json();
	return zNftCollectionPartialUpdate.parse(editedNftCollection);
}