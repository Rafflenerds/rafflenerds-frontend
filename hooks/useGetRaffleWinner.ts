'use client';

import { getRaffleWinner } from '@/actions/getRaffleWinner.ts';
import { REQUEST_STALE_TIME } from '../lib/constants.ts';
import { useQuery } from '@tanstack/react-query';

export const useGetRaffleWinner = (raffleId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getRaffleWinner', raffleId],
		queryFn: async () => {
			const winner = await getRaffleWinner(raffleId);
			return winner;
		},
		staleTime: REQUEST_STALE_TIME,
	});
	return { status, data, error };
};