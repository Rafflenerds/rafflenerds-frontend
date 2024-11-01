"use client"

import { getUserCreditTransactions } from '@/actions/getUserCreditTransactions';
import { REQUEST_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

export const useGetUserCreditTransaction = (address: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getUserCreditTransaction', address],
		queryFn: async () => {
			const creditTransactions = await getUserCreditTransactions(address);
			return creditTransactions;
		},
		staleTime: REQUEST_STALE_TIME,
	});
	return { status, data, error };
};