"use client";

import { getUser } from '@/actions/getUser';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = (userId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getUser', userId],
		queryFn: async () => {
			const user = await getUser(userId);
			return user;
		},
	});
	return { status, data, error };
};