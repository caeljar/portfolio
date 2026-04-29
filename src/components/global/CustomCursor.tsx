import { useEffect, useRef, useState } from "react"

function CustomCursor() {
    const cursorRef = useRef<HTMLSpanElement>(null);
    const ringRef = useRef<HTMLSpanElement>(null);

    const [isHovering, setIsHovering] = useState<Boolean>(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            // translate(-50%, -50%)_ center of the div sits on mouse tip
            const transformValue: string = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            if (cursorRef.current) {
                cursorRef.current.style.transform = transformValue;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = transformValue;
            }
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target: HTMLElement = e.target as HTMLElement;

            // Check if hovering over an anchor, button or something with pointer-events
            if (target.closest('a') || target.closest('button'))
                setIsHovering(true);
            else
                setIsHovering(false);
        }

        window.addEventListener('mousemove', updatePosition)
        window.addEventListener('mouseover', handleMouseOver)


    }, [])

    return (
        <>
            <span ref={cursorRef}
                className={`
                pointer-events-none fixed top-0 left-0 z-[9999] 
                rounded-full
                /* The negative translate centers the cursor exactly on the mouse point */ 
                /* Use CSS transitions for the smooth "trailing/easing" animation */
                transition-[width,height,background-color] duration-300 ease-out
                ${isHovering
                        ? "w-6 h-6 bg-primary/40 backdrop-blur-xs " // Hover state
                        : "w-3 h-3 bg-primary "                   // Default state
                    }
            `}
            />
            <span
                ref={ringRef}
                className={`
                    pointer-events-none fixed top-0 left-0 z-[9998] 
                    rounded-full border border-primary
                    /* Add 'transform' to the transition list to create the 500ms trailing delay! */
                    transition-[transform,width,height,background-color] duration-400 ease-out
                    w-8 h-8 bg-transparent
                `}

            />
        </>
    )
}

export default CustomCursor