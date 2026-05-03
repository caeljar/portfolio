interface HeroLabel {
    label: string
}

function HeroLabel({ label }: HeroLabel) {
    return (
        <div className="
            min-w-full sm:min-w-36 text-xs bg-surface-elevated text-primary px-3 py-1.5 md:py-2 rounded-md border-primary border-1 transition-all duration-300 ease-in-out
            hover:bg-surface-elevated-hover pointer-events-auto
        ">
            <span className="italic block !text-center md:!text-left">{label}</span>
        </div>
    )
}
export default HeroLabel