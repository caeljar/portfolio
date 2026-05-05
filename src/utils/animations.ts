export const FADE_UP_ANIM = (delay: number = 0) => (
    {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: "easeOut" as const },
        viewport: { once: true, amount: 0.2 }
    }
)

export const FADE_IN_ANIM = (delay = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1, delay, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.2 }
});