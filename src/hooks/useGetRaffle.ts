"use client";

import { getRaffle } from '@/actions/getRaffle';
import { REFETCH_INTERVAL, REQUEST_STALE_TIME, RETRY_AMOUNT } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

export const useGetRaffle = (raffleId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getRaffle', raffleId],
		queryFn: async () => {
			const raffle = await getRaffle(raffleId);
			return raffle;
		},
		staleTime: REQUEST_STALE_TIME,
		retry: RETRY_AMOUNT,
		refetchInterval: REFETCH_INTERVAL,
	});
	return { status, data, error };
};