"use client"

import { getCollectionNft } from '@/actions/getCollectionNft';
import { REQUEST_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

export const useGetCollectionNft = (collectionId: string, tokenId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getCollectionNft', collectionId, tokenId],
		queryFn: async () => {
			const nft = await getCollectionNft(collectionId, tokenId);
			return nft;
		},
		staleTime: REQUEST_STALE_TIME,
	});
	return { status, data, error };
};