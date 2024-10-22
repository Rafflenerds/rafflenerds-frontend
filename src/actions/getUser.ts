'use server';

import { zUser } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type User = z.infer<typeof zUser>;

export async function getUser(address: string): Promise<User> {
	const response = await unauthFetch(`/users/${address}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const user = await response.json();
	return zUser.parse(user);
}