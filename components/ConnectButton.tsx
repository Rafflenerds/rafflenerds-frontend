'use client';
import { useAppKit } from '@reown/appkit/react';
import WireframeButton from '@/components/WireframeButton.tsx';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';

export default function ConnectButton() {
    const { open } = useAppKit();
    // auth on connect
    const { isConnected } = useAccount();
    
    async function signInOnConnect() {
        if (isConnected) {
        
        }
    }
    
    useEffect(() => {
        signInOnConnect().catch(console.error);
    }, [isConnected]);
    
    return (
        <>
            <WireframeButton onClick={() => open()} name="Play!"/>
        </>
    );
}