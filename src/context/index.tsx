'use client';

import { projectId, wagmiAdapter } from '@/config/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { base, mainnet, sepolia } from '@reown/appkit/networks';
import { type ReactNode } from 'react';
import { type Config, cookieToInitialState, WagmiProvider } from 'wagmi';
import { DefaultSIWX } from '@reown/appkit-siwx';
import { SetMetadata } from '@/metadata.ts';

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
    throw new Error('Project ID is not defined');
}

// todo Set up metadata
const metadata = {
    name: SetMetadata.siteName,
    description: SetMetadata.description,
    url: SetMetadata.url!, // origin must match your domain & subdomain
    icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

// Create the modal
const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, base, sepolia],
    defaultNetwork: mainnet,
    metadata: metadata,
    features: {
        analytics: true,
    },
    siwx: new DefaultSIWX(),
});

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies);

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}

export default ContextProvider;
