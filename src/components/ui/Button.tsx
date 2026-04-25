
interface ButtonProps {
    icon?: string;
    text?: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}

function Button({ icon, text, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
    const baseClasses: string = "flex items-center gap-2 px-6 py-3 justify-center rounded-md text-xs border-1 font-semibold cursor-pointer pointer-events-auto transition-all duration-400 ease-in-out";
    let config: string[] = []
    if (variant === 'primary') {
        config = [
            "bg-primary text-background border-background", //base style classes
            "hover:bg-primary-hover hover:border-surface" //hover style classes
        ]
    } else {
        config = [
            "bg-surface text-white border-primary", //base style classes
            "hover:bg-surface-muted hover:border-primary-hover"
        ]

    }
    return (
        <button className={`${baseClasses} ${config.join(" ")} `} onClick={onClick} disabled={disabled}>
            {icon && <span>{icon}</span>}
            <h4>{text || 'Button'}</h4>
        </button>
    );
}

export default Button;