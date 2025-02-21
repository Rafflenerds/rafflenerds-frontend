'use server';

import { authFetch } from '@/actions/authFetch.ts';

export async function getOwnNfts() {
    const response = await authFetch(`/users/nfts`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
}