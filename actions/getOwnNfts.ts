'use server';

import { authFetch } from '@/actions/authFetch.ts';
import { zNft } from '@/lib/zodSchemas.ts';

export async function getOwnNfts() {
    const response = await authFetch(`/users/nfts`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const nfts = await response.json();
    return zNft.array().parse(nfts);
}