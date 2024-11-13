"use client";
import React, { useRef, useEffect, useState } from 'react';

const AutoScale = ({ children, style = {}, maxWidth, maxHeight, className, ...props }: { children: React.ReactNode; style?: React.CSSProperties; maxWidth?: number; maxHeight?: number, className?: string }) => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [scaledHeight, setScaledHeight] = useState('auto');

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                // @ts-ignore
                const containerWidth = containerRef.current.offsetWidth;
                // @ts-ignore
                const child = containerRef.current.firstChild;

                if (child) {
                    const childWidth = child.offsetWidth;
                    const childHeight = child.offsetHeight;

                    // Calculate scale based on the width of the container only
                    const scaleWidth = containerWidth / childWidth;

                    // Apply maxWidth constraint if provided
                    const constrainedScale = maxWidth
                        ? Math.min(scaleWidth, maxWidth / childWidth)
                        : scaleWidth;

                    // Set the scale and update the scaled height
                    setScale(constrainedScale);
                    // @ts-ignore
                    setScaledHeight(childHeight * constrainedScale);
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [children, maxWidth, maxHeight]);

    return (
        <div
            className={className}
            ref={containerRef}
            style={{
                ...style,
                position: 'relative',
                overflow: 'hidden',
                maxWidth: maxWidth || '100%',
                maxHeight: maxHeight || '100%',
                height: scaledHeight, // Dynamically set container height to scaled child height
            }}
            {...props}
        >
            <div
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width: 'fit-content',
                    height: 'fit-content',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default AutoScale;
