import { getAddressFromMessage, getChainIdFromMessage, verifySignature } from '@reown/appkit-siwe';
import type {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from "next";
import type { AuthOptions, NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import credentialsProvider from 'next-auth/providers/credentials';

const nextAuthSecret = process.env.NEXTAUTH_SECRET;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
	throw new Error('NEXT_PUBLIC_PROJECT_ID is not set');
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
				placeholder: '0x0'
			},
			signature: {
				label: 'Signature',
				type: 'text',
				placeholder: '0x0'
			}
		},
		async authorize(credentials) {
			try {
				if (!credentials?.message) {
					throw new Error('SiweMessage is undefined');
				}
				const { message, signature } = credentials;
				const address = getAddressFromMessage(message);
				const chainId = getChainIdFromMessage(message);

				const isValid = await verifySignature({ address, message, signature, chainId, projectId });

				if (isValid) {
					return {
						id: `${chainId}:${address}`
					};
				}

				return null;
			} catch (e) {
				return null;
			}
		}
	})
];

export const nextAuthConfig: AuthOptions = {
	secret: nextAuthSecret,
	providers,
	session: {
		strategy: 'jwt'
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
		}
	},
	pages: {
		signIn: '/login',
	}
} satisfies NextAuthOptions;

// Use it in server contexts
export async function auth(
	...args:
		| [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return await getServerSession(...args, nextAuthConfig);
}