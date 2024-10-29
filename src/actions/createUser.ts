'use server';

import { zUser, zUserCreate } from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type User = z.infer<typeof zUser>;
type UserCreate = z.infer<typeof zUserCreate>;

export async function createUser(user: UserCreate): Promise<User> {
	const response = await authFetch('/users', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const newUser = await response.json();
	return zUser.parse(newUser);
}