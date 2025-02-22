'use client';

import { getNftCollection } from '@/actions/getNftCollection.ts';
import { REQUEST_STALE_TIME } from '../lib/constants.ts';
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