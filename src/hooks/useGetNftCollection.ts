"use client"

import { getNftCollection } from '@/actions/getNftCollection';
import { REQUEST_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

export const useGetNftCollection = (collectionId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getNftCollection', collectionId],
		queryFn: async () => {
			const collection = await getNftCollection(collectionId);
			return collection;
		},
		staleTime: REQUEST_STALE_TIME,
	});
	return { status, data, error };
};