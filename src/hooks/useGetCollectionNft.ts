"use client"

import { getCollectionNft } from '@/actions/getCollectionNft';
import { useQuery } from '@tanstack/react-query';

export const useGetCollectionNft = (collectionId: string, tokenId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getCollectionNft', collectionId, tokenId],
		queryFn: async () => {
			const nft = await getCollectionNft(collectionId, tokenId);
			return nft;
		},
	});
	return { status, data, error };
};