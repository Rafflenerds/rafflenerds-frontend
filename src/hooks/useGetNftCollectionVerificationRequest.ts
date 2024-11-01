"use client"

import { getNftCollectionVerificationRequest } from '@/actions/getNftCollectionVerificationRequest';
import { useQuery } from '@tanstack/react-query';

export const useGetNftCollectionVerificationRequest = (collectionId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getNftCollectionVerificationRequest', collectionId],
		queryFn: async () => {
			const request = await getNftCollectionVerificationRequest(collectionId);
			return request;
		},
	});
	return { status, data, error };
};