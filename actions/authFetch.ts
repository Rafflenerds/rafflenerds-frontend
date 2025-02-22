'use server';

import { getAccessToken } from './getAccessToken';

export async function authFetch(path: string, options?: RequestInit): Promise<Response> {
	const token = await getAccessToken();
	const baseUrl = process.env.REST_API_BASE_URL;
	console.log('baseUrl', baseUrl);
	if (!baseUrl) {
		throw new Error('REST_API_BASE_URL is not set');
	}
	return await fetch(baseUrl + path, {
		...options,
		headers: {
			...options?.headers,
			Authorization: `Bearer ${token}`,
		},
	});
}