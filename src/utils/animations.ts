export const FADE_UP_ANIM = (delay: number = 0) => (
    {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: "easeOut" as const },
    }
)

export const FADE_IN_ANIM = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay, ease: "easeOut" as const },
});