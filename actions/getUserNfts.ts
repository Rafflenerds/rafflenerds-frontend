'use server';

import { Nft, zNft } from '@/lib/zodSchemas';
import { unauthFetch } from './unauthFetch';

export async function getUserNfts(address: string, chainId: number): Promise<Nft[]> {
    const response = await unauthFetch(`/users/${chainId}/${address}/nfts`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const nfts = await response.json();
    return zNft.array().parse(nfts);
}