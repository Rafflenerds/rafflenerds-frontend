'use server';

export async function unauthFetch(path: string, options?: RequestInit): Promise<Response> {
	const baseUrl = process.env.REST_API_BASE_URL;
	if (!baseUrl) {
		throw new Error('REST_API_BASE_URL is not set');
	}
	return await fetch(baseUrl + path, {
		...options,
	});
}