import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

interface GradientBorderProps {
    children: ReactNode;
    className?: string
}

export const GradientBorder: React.FC<GradientBorderProps> = ({ children, className }) => {
    return (
        <div className={cn('bg-gradient-to-r from-[#60fff5] to-[#60fff5] from-[-20%] via-50% to-[110%] via-[#cb5efe] p-[1px] rounded-xl h-min', className)}>
            {children}
        </div>
    );
};