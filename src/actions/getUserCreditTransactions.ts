 'use server';

import { zCreditTransaction } from '@/lib/zodSchemas';
import { z } from 'zod';
import { unauthFetch } from './unauthFetch';

type CreditTransaction = z.infer<typeof zCreditTransaction>;

export async function getUserCreditTransactions(address: string): Promise<CreditTransaction[]> {
	const response = await unauthFetch(`/users/${address}/creditTransactions`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const creditTransactions = await response.json();
	return zCreditTransaction.array().parse(creditTransactions);
}