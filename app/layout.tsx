import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './App.css';
import './globals.css';
import React from 'react';
import ContextProvider from '@/context';
import { headers } from 'next/headers';
import { Toaster } from '@/components/ui/toaster.tsx';
import { cn } from '@/lib/utils.ts';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { SetMetadata } from '@/metadata.ts';
import { ColorSchemeEnum } from 'next/dist/lib/metadata/types/metadata-types';

const inter = Inter({ subsets: ['latin'] });

/*##################################################################
 * Do not change metadata below, change it in the metadata.ts file *
 *#################################################################*/
const openGraph: OpenGraph = {
    title: SetMetadata.title,
    description: SetMetadata.description,
    // workaround as we cant use as const in metadata.ts
    type: SetMetadata.type as 'website',
    siteName: SetMetadata.siteName,
    url: SetMetadata.url,
    images: [SetMetadata.image],
};

export const metadata: Metadata = {
    title: SetMetadata.title,
    description: SetMetadata.description,
    creator: SetMetadata.author,
    openGraph: openGraph,
    // oembed link workaround
    icons: {
        other: {
            rel: 'alternate',
            url: `${process.env.SITE_URL}/oembed.json`,
            type: 'application/json+oembed',
        },
    },
};

export const viewport: Viewport = {
    themeColor: SetMetadata.themeColor,
    colorScheme: SetMetadata.colorScheme as ColorSchemeEnum,
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const cookies = headers().get('cookie');
    return (
        <html lang="en" className="">
            <body className={cn(inter.className, "!w-full")}>
                <ContextProvider cookies={cookies}>{children}</ContextProvider>
            <Toaster/>
            </body>
        </html>
    );
}