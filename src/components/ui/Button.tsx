import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function Button({
    children,
    href,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase transition-all duration-300 relative overflow-hidden";

    const sizeStyles = {
        sm: "px-5 py-2.5 text-xs",
        md: "px-7 py-3.5 text-sm",
        lg: "px-9 py-4.5 text-sm",
    };

    const variantStyles = {
        primary:
            "gold-gradient-bg text-obsidian hover:shadow-gold hover:scale-[1.02] active:scale-[0.98]",
        outline:
            "border border-gold-500/40 text-gold-200 hover:border-gold-400 hover:text-gold-100 hover:bg-gold-500/5",
        ghost:
            "text-ivory-200 hover:text-gold-200 hover:bg-white/5",
    };

    const disabledStyles = disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "cursor-pointer";

    const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
