'use server';

import { auth } from '@/config/auth';
import jwt from 'jsonwebtoken';

export async function getAccessToken(): Promise<string> {
	const session = await auth();
	if (!session) {
		throw new Error('Unauthorized');
	}
	const nextAuthSecret = process.env.NEXTAUTH_SECRET;
	if (!nextAuthSecret) {
		throw new Error('NEXTAUTH_SECRET is not set');
	}
	const accessToken = jwt.sign(
		{ address: session.address, chainId: session.chainId },
		nextAuthSecret,
		{ expiresIn: '1m' }
	);
	return accessToken;
}