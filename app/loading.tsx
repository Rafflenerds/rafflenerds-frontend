import React from 'react';

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
    );
}