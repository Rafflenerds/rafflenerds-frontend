import type {Metadata, Viewport} from 'next';
import { Inter } from 'next/font/google';
import './App.css';
import './globals.css';
import React from 'react';
import ContextProvider from '@/context';
import { headers } from 'next/headers';
import {Toaster} from "@/components/ui/toaster.tsx";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Rafflenerds',
    description: 'Rafflenerds is a Web3 decentralised raffle platform for raffling NFTs and other digital assets.',
    keywords: 'raffle, rafflenerds, nft, web3, blockchain',
    robots: 'index, follow',
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const cookies = headers().get('cookie');
    return (
        <html lang="en">
            <body className={inter.className}>
                <ContextProvider cookies={cookies}>{children}</ContextProvider>
            <Toaster/>
            </body>
        </html>
    );
}

export const viewport: Viewport = {
    themeColor: 'black',
    colorScheme: 'dark',
}
