"use client"

import { getRaffleWinner } from '@/actions/getRaffleWinner';
import { useQuery } from '@tanstack/react-query';

export const useGetRaffleWinner = (raffleId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getRaffleWinner', raffleId],
		queryFn: async () => {
			const winner = await getRaffleWinner(raffleId);
			return winner;
		},
	});
	return { status, data, error };
};