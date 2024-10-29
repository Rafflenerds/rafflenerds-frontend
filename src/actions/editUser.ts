'use server';

import { zUser, zUserPartialUpdate } from '@/lib/zodSchemas';
import { z } from 'zod';
import { authFetch } from './authFetch';

type User = z.infer<typeof zUser>;
type UserPartialUpdate = z.infer<typeof zUserPartialUpdate>;

export async function editUser(address: string, user: UserPartialUpdate): Promise<User> {
	const response = await authFetch(`/users/${address}`, {
		method: 'PATCH',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const editedUser = await response.json();
	return zUser.parse(editedUser);
}