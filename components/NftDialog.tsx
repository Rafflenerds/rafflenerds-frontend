'use client';
import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Nft } from '@/lib/zodSchemas';
import Image from 'next/image';
import iconPlus from '@/public/assets/iconPlus.png';

interface NFTDialogProps {
    userOwnedNFTs: Nft[];
}

export const NFTDialog: React.FC<NFTDialogProps> = ({ userOwnedNFTs }) => {
    const [selectedNFT, setSelectedNFT] = useState<Nft | null>(null);
    
    const handleSelectNFT = (nft: Nft) => {
        setSelectedNFT(nft);
    };
    
    const handleConfirm = () => {
        if (selectedNFT) {
            // onSelectNFT(selectedNFT);
        }
    };
    
    return (
        <Dialog>
            <DialogTrigger className="h-fit">
                <div
                    className="flex flex-col items-center justify-center border border-primary rounded p-8 cursor-pointer max-h-[25rem] text-center">
                    <Image src={iconPlus} alt="Choose NFT" className="w-32 xl:w-40"/>
                    <p className="text-white font-block mt-10">Choose NFT for raffle</p>
                
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Select NFT to Raffle</DialogTitle>
                <DialogDescription>Choose an NFT from your collection to raffle.</DialogDescription>
                <div className="grid grid-cols-3 gap-4">
                    {userOwnedNFTs.map((nft) => (
                        <div
                            key={nft.id}
                            className={`p-4 border rounded-md cursor-pointer ${
                                selectedNFT?.id === nft.id ? 'border-blue-500' : 'border-gray-300'
                            }`}
                            onClick={() => handleSelectNFT(nft)}
                        >
                            {nft.imageUrl &&
                                <img src={nft.imageUrl} alt={nft.name} className="w-full h-40 object-cover mb-2"/>}
                            <h3 className="text-lg font-semibold">{nft.name}</h3>
                            <p className="text-sm text-gray-500">{nft.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-end">
                    <DialogClose>Cancel</DialogClose>
                    <button
                        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={handleConfirm}
                        disabled={!selectedNFT}
                    >
                        Confirm
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};