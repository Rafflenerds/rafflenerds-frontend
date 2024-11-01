"use client"

import { getUserCreditTransactions } from '@/actions/getUserCreditTransactions';
import { useQuery } from '@tanstack/react-query';

export const useGetUserCreditTransaction = (address: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getUserCreditTransaction', address],
		queryFn: async () => {
			const creditTransactions = await getUserCreditTransactions(address);
			return creditTransactions;
		},
	});
	return { status, data, error };
};