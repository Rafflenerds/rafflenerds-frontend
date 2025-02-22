'use server';

import { User, UserCreate, zUser } from '@/lib/zodSchemas';
import { authFetch } from './authFetch';


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