import { getAddressFromMessage, getChainIdFromMessage, verifySignature } from '@reown/appkit-siwe';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import type { AuthOptions, NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import credentialsProvider from 'next-auth/providers/credentials';
import { getOwnNfts } from '@/actions/getOwnNfts.ts';
import { exponentialRetry } from '../lib/utils.ts';

const nextAuthSecret = process.env.NEXTAUTH_SECRET;
if (!nextAuthSecret) {
    throw new Error('NEXTAUTH_SECRET is not set');
}
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
if (!projectId) {
    throw new Error('NEXT_PUBLIC_REOWN_PROJECT_ID is not set');
}

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
const providers = [
    credentialsProvider({
        name: 'Ethereum',
        credentials: {
            message: {
                label: 'Message',
                type: 'text',
                placeholder: '0x0',
            },
            signature: {
                label: 'Signature',
                type: 'text',
                placeholder: '0x0',
            },
        },
        async authorize(credentials) {
            if (!credentials?.message) {
                console.error('SiweMessage is undefined');
                return null;
            }
            const { message, signature } = credentials;
            const address = getAddressFromMessage(message);
            const chainId = getChainIdFromMessage(message);

            const isValid = await verifySignature({ address, message, signature, chainId, projectId });

            if (isValid) {
                exponentialRetry(getOwnNfts, {
                    maxAttempts: 3,
                    baseDelay: 1000
                }).catch((e) => {
                    console.error("Failed to fetch user Nfts ", e);
                })
                return {
                    id: `${chainId}:${address}`,
                };
            }

            console.error('Invalid Signature');
            return null;
        },
    }),
];

export const nextAuthConfig: AuthOptions = {
    secret: nextAuthSecret,
    providers,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        session({ session, token }) {
            if (!token.sub) {
                return session;
            }

            const [, chainId, address] = token.sub.split(':');
            if (chainId && address) {
                session.address = address;
                session.chainId = parseInt(chainId, 10);
            }

            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
} satisfies NextAuthOptions;

// Use it in server contexts
export async function auth(
    ...args:
        | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return await getServerSession(...args, nextAuthConfig);
}