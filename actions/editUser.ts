'use server';

import { User, UserPartialUpdate, zUser } from '@/lib/zodSchemas';
import { authFetch } from './authFetch';

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