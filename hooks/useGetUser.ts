"use client";

import { getUser } from '@/actions/getUser.ts';
import { REQUEST_STALE_TIME } from '../lib/constants.ts';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = (userId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getUser', userId],
		queryFn: async () => {
			const user = await getUser(userId);
			return user;
		},
		staleTime: REQUEST_STALE_TIME,
	});
	return { status, data, error };
};