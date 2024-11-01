"use client"

import { getNftCollectionVerificationRequest } from '@/actions/getNftCollectionVerificationRequest';
import { REQUEST_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

export const useGetNftCollectionVerificationRequest = (collectionId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getNftCollectionVerificationRequest', collectionId],
		queryFn: async () => {
			const request = await getNftCollectionVerificationRequest(collectionId);
			return request;
		},
		staleTime: REQUEST_STALE_TIME,
	});
	return { status, data, error };
};