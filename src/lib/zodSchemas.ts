// Validation schemas for client input to routes

import { getAddress } from 'ethers';
import { z } from 'zod';

/***************************************/
/************* Common Schemas **********/
/***************************************/
export const zEthereumAddress = z.string().regex(/0x[a-fA-F0-9]{40}/, { message: 'Invalid Ethereum address' }).transform((val, ctx) => {
	let checksummed; try {
		checksummed = getAddress(val);
	}
	catch {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: 'Bad address checksum',
		});
		return z.NEVER;
	}
	return checksummed;
});

// todo use real data
enum LinkType {
	Twitter = 'Twitter',
	Instagram = 'Instagram',
	Facebook = 'Facebook',
	LinkedIn = 'LinkedIn',
	GitHub = 'GitHub',
	Website = 'Website',
	Other = 'Other',
}

export const zLink = z.object({
	type: z.nativeEnum(LinkType),
	url: z.string().url(),
});

/***************************************/
/************* User Schemas ************/
/***************************************/
export const zUser = z.object({
	id: z.string().uuid(),
	address: zEthereumAddress,
	username: z.string().min(1),
	credits: z.coerce.number().int(),
	logoUrl: z.string().url(),
	bannerUrl: z.string().url(),
	links: zLink.array(),
	createdAt: z.string().datetime(),
	updatedAt: z.string().datetime(),
});

export const zUserCreate = z.object({
	address: zEthereumAddress,
	username: z.string().min(1).optional(),
});

export const zUserPartialUpdate = z.object({
	username: z.string().min(1).optional(),
	logoUrl: z.string().url().nullish(),
	bannerUrl: z.string().url().nullish(),
	links: zLink.array().optional(),
});

export const zUserSummary = zUser.pick({
	address: true,
	username: true,
	credits: true
});

/***************************************/
/************ Admin Schemas ************/
/***************************************/
export const zAdmin = z.object({
	address: zEthereumAddress,
	username: z.string().min(1),
});

export const zAdminCreate = z.object({
	address: zEthereumAddress,
});


/***************************************/
/****** Credit Transaction Schemas *****/
/***************************************/
export const zCreditTransaction = z.object({
	id: z.string().uuid(),
	type: z.enum([
		'purchase',
		'redeem',
		'enter_raffle',
		'refund_entry',
		'collect_raffle_pot',
		'reward',
	]),
	amount: z.coerce.number().int(),
	createdAt: z.string().datetime(),
});

/***************************************/
/************* NFT Schemas *************/
/***************************************/
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
	id: z.string().uuid(),
});

export const zNftCollectionPartialUpdate = z.object({
	bannerUrl: z.string().url().nullish(),
	links: zLink.array().optional(),
	logoUrl: z.string().url().nullish(),
	name: z.string().nullish(),
	slug: z.string().nullish(),
});

export const zNftCollectionSummary = zNftCollection.pick({
	chainId: true,
	contractAddress: true,
	name: true,
	slug: true,
	type: true,
	verified: true,
});

export const zNft = z.object({
	id: z.string().uuid(),
	imageUrl: z.string().url().optional(),
	tokenId: z.string().uuid(),
	nftCollection: zNftCollectionSummary,
});

export const zNftCreate = z.object({
	imageUrl: z.string().url().optional(),
	tokenId: z.string().uuid(),
	nftCollectionId: z.string().uuid(),
});

export const zNftPartialUpdate = z.object({
	imageUrl: z.string().url().nullable(),
});

export const zNftSummary = zNft.pick({ imageUrl: true, tokenId: true });

/***************************************/
/*********** Raffle Schemas ************/
/***************************************/
export const zBulkDiscounts = z.object({
	minTickets: z.coerce.number().int(),
	discountPrice: z.coerce.number().int(),
});

export const zRaffle = z.object({
	id: z.string().uuid(),
	bulkDiscounts: zBulkDiscounts.array(),
	createdAt: z.string().datetime(),
	endDate: z.string().datetime(),
	lister: zUserSummary,
	maxTickets: z.coerce.number().int(),
	maxTicketsPerUser: z.coerce.number().int(),
	minTicketsPerUser: z.coerce.number().int(),
	nft: zNftSummary,
	nftAmount: z.coerce.number().int(),
	startDate: z.string().datetime(),
	ticketPrice: z.coerce.number().int(),
	updatedAt: z.string().datetime(),
});

export const zRaffleCreate = z.object({
	bulkDiscounts: zBulkDiscounts.array().optional(),
	endDate: z.string().datetime(),
	listerId: z.string().uuid(),
	maxTickets: z.coerce.number().int(),
	maxTicketsPerUser: z.coerce.number().int(),
	minTicketsPerUser: z.coerce.number().int(),
	nftAmount: z.coerce.number().int(),
	nftId: z.string().uuid(),
	ticketPrice: z.coerce.number().int(),
});

export const zRaffleSummary = zRaffle.pick({
	endDate: true,
	maxTickets: true,
	maxTicketsPerUser: true,
	minTicketsPerUser: true,
	nftAmount: true,
	startDate: true,
	ticketPrice: true,
});

export const zRaffleEntry = z.object({
	id: z.string().uuid(),
	cost: z.coerce.number().int(),
	createdAt: z.string().datetime(),
	// We do not need reference to the raffle id or user address:
	// Raffle ID can be inferred from the endpoint path
	// User address can be inferred from the JWT
});

export const zRaffleWinner = z.object({
	createdAt: z.string().datetime().nullable(),
	drawTransactionHash: z.string().regex(/0x[a-fA-F0-9]{64}/).nullable(),
	raffle: zRaffleSummary,
	winner: zUserSummary.nullable(),
});

export const zRaffleWinnerCreate = z.object({
	drawTransactionHash: z.string().regex(/0x[a-fA-F0-9]{64}/),
	raffleId: z.string().uuid(),
	winnerId: z.string().uuid(),
});