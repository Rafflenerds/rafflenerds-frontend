import { nextAuthConfig } from '@/config/auth';
import { type SIWESession } from '@reown/appkit-siwe';
import NextAuth from 'next-auth';

declare module 'next-auth' {
	interface Session extends SIWESession {
		address: string;
		chainId: number;
	}
}

const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST };
