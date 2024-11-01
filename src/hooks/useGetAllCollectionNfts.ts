"use client";

import { getAllCollectionNfts } from '@/actions/getAllCollectionNfts';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCollectionNfts = (collectionId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getAllCollectionNfts', collectionId],
		queryFn: async () => {
			const nfts = await getAllCollectionNfts(collectionId);
			return nfts;
		},
	});
	return { status, data, error };
};