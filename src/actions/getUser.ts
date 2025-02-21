'use server';

import { User, zUser } from '@/lib/zodSchemas';
import { unauthFetch } from './unauthFetch';

export async function getUser(address: string): Promise<User> {
	const response = await unauthFetch(`/users/${address}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const user = await response.json();
	return zUser.parse(user);
}