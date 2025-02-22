// Validation schemas for client input to routes

import { getAddress } from 'ethers';
import { z } from 'zod';

export const CREDIT_TRANSACTION_TYPES = [
    'purchase_credits',
    'withdraw_credits',
    'purchase_raffle_entry',
    'refund_raffle_entry',
    'collect_raffle_pot',
    'receive_gift',
] as const;

/***************************************/
/************* Common Schemas **********/
/***************************************/
export const zEthereumAddress = z.string().regex(/0x[a-fA-F0-9]{40}/, { message: 'Invalid Ethereum address' }).transform((val, ctx) => {
    let checksum;
    try {
        checksum = getAddress(val);
    } catch {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Bad address checksum',
        });
        return z.NEVER;
    }
    return checksum;
});



export const zLink = z.object({
    platform: z.enum(['twitter', 'discord', 'website', 'telegram']),
    url: z.string().url(),
});

/***************************************/
/************* User Schemas ************/
/***************************************/
export const zUser = z.object({
    id: z.string().uuid(),
    address: zEthereumAddress,
    username: z.string().min(1).nullable(),
    credits: z.coerce.number().int(),
    logoUrl: z.string().url().nullable(),
    bannerUrl: z.string().url().nullable(),
    links: zLink.array(),
    roles: z.string().array(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export type User = z.infer<typeof zUser>;

export const zUserCreate = z.object({
    address: zEthereumAddress,
    username: z.string().min(1).optional(),
});

export type UserCreate = z.infer<typeof zUserCreate>;

export const zUserPartialUpdate = z.object({
    username: z.string().min(1).optional(),
    logoUrl: z.string().url().nullish(),
    bannerUrl: z.string().url().nullish(),
    links: zLink.array().optional(),
});

export type UserPartialUpdate = z.infer<typeof zUserPartialUpdate>;

/***************************************/
/************ Admin Schemas ************/
/***************************************/
export const zAdmin = z.object({
    address: zEthereumAddress,
    username: z.string().min(1),
});

export type Admin = z.infer<typeof zAdmin>;

export const zAdminCreate = z.object({
    address: zEthereumAddress,
});

export type AdminCreate = z.infer<typeof zAdminCreate>;


/***************************************/
/****** Credit Transaction Schemas *****/
/***************************************/
export const zCreditTransaction = z.object({
    id: z.string().uuid(),
    type: z.enum(CREDIT_TRANSACTION_TYPES),
    amount: z.coerce.number().int(),
    createdAt: z.string().datetime(),
});

export type CreditTransaction = z.infer<typeof zCreditTransaction>;

/***************************************/
/************* NFT Schemas *************/
/***************************************/

export const zNftType = z.enum(['erc721', 'erc1155']);


export const zNftCollection = z.object({
    id: z.string().uuid(),
    bannerUrl: z.string().url().optional(),
    chainId: z.coerce.number().int(),
    contractAddress: zEthereumAddress,
    links: zLink.array(),
    logoUrl: z.string().url().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    type: z.enum(['erc721', 'erc1155']),
    verified: z.boolean(),
});

export type NftCollection = z.infer<typeof zNftCollection>;

export const zNftCollectionCreate = z.object({
    bannerUrl: z.string().url().optional(),
    chainId: z.coerce.number().int(),
    contractAddress: zEthereumAddress,
    links: zLink.array().optional(),
    logoUrl: z.string().url().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    type: z.enum(['erc721', 'erc1155']),
    verified: z.boolean(),
});

export type NftCollectionCreate = z.infer<typeof zNftCollectionCreate>;

export const zNftCollectionPartialUpdate = z.object({
    bannerUrl: z.string().url().nullish(),
    links: zLink.array().optional(),
    logoUrl: z.string().url().nullish(),
    name: z.string().nullish(),
    slug: z.string().nullish(),
});

export type NftCollectionPartialUpdate = z.infer<typeof zNftCollectionPartialUpdate>;

export const zNft = z.object({
    id: z.string().uuid(),
    tokenId: z.string().uuid(),
    name: z.string().optional(),
    description: z.string().optional(),
    imageUrl: z.string().url().optional(),
    nftCollection: zNftCollection.optional(),
});

export type Nft = z.infer<typeof zNft>;

export const zNftCreate = z.object({
    tokenId: z.string().uuid(),
    name: z.string().optional(),
    description: z.string().optional(),
    imageUrl: z.string().url().optional(),
    nftCollectionId: z.string().uuid(),
});

export type NftCreate = z.infer<typeof zNftCreate>;

/***************************************/
/*********** Raffle Schemas ************/
/***************************************/
export const zBulkDiscount = z.object({
    minTickets: z.coerce.number().int(),
    discountPrice: z.coerce.number().int(),
});

export type BulkDiscount = z.infer<typeof zBulkDiscount>;

export const zRaffle = z.object({
    id: z.string().uuid(),
    lister: zUser,
    nft: zNft,
    nftAmount: z.coerce.number().int(),
    ticketPrice: z.coerce.number().int(),
    maxTickets: z.coerce.number().int(),
    maxTicketsPerUser: z.coerce.number().int(),
    minTicketsPerUser: z.coerce.number().int(),
    bulkDiscounts: zBulkDiscount.array(),
    drawBlockHash: z.string().regex(/^0x[a-fA-F0-9]{64}$/).nullable(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export type Raffle = z.infer<typeof zRaffle>;

export const zRaffleCreate = z.object({
    listerId: z.string().uuid(),
    nftId: z.string().uuid(),
    nftAmount: z.coerce.number().int(),
    ticketPrice: z.coerce.number().int(),
    maxTickets: z.coerce.number().int(),
    maxTicketsPerUser: z.coerce.number().int(),
    minTicketsPerUser: z.coerce.number().int(),
    bulkDiscounts: zBulkDiscount.array(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
});

export type RaffleCreate = z.infer<typeof zRaffleCreate>;

export const zRaffleEntry = z.object({
    id: z.string().uuid(),
    cost: z.coerce.number().int(),
    createdAt: z.string().datetime(),
    tickets: z.coerce.number().int().min(1),
    // We do not need reference to the raffle id or user address:
    // Raffle ID can be inferred from the endpoint path
    // User address can be inferred from the JWT
});

export type RaffleEntry = z.infer<typeof zRaffleEntry>;

export const zRaffleEntryCreate = z.object({
    tickets: z.coerce.number().int().min(1),
});

export type RaffleEntryCreate = z.infer<typeof zRaffleEntryCreate>;

export const zRaffleWinner = z.object({
    winner: zUser.nullable(),
    createdAt: z.string().datetime().nullable(),
});

export type RaffleWinner = z.infer<typeof zRaffleWinner>;

export const zRaffleWinnerCreate = z.object({
    raffleId: z.string().uuid(),
    winnerId: z.string().uuid(),
});

export type RaffleWinnerCreate = z.infer<typeof zRaffleWinnerCreate>;
