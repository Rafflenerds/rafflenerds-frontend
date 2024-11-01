"use client"

import { getNftCollection } from '@/actions/getNftCollection';
import { useQuery } from '@tanstack/react-query';

export const useGetNftCollection = (collectionId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getNftCollection', collectionId],
		queryFn: async () => {
			const collection = await getNftCollection(collectionId);
			return collection;
		},
	});
	return { status, data, error };
};