"use client";

import { getUser } from '@/actions/getUser';
import { REQUEST_STALE_TIME } from '@/lib/constants';
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