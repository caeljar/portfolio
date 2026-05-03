import { useState, useEffect } from "react";

// Using standard Tailwind CSS breakpoints
export function useViewport() {
    const [viewport, setViewport] = useState({
        isXs: false, // Mobile screens (< 640px)
        isSm: false, // Tablets (640px - 767px)
        isMd: false, // Small Laptops (768px - 1023px)
        isLg: false, // Desktops (1024px - 1279px)
        isXl: false, // Large Monitors (>= 1280px)
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setViewport({
                isXs: width < 640,
                isSm: width >= 640 && width < 768,
                isMd: width >= 768 && width < 1024,
                isLg: width >= 1024 && width < 1280,
                isXl: width >= 1280,
            });
        };

        // Run once on mount to get initial size
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return viewport;
}