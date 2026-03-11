import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "outline" | "ghost" | "solid";
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
        "inline-flex items-center justify-center font-body font-semibold tracking-widest uppercase transition-all duration-300 relative overflow-hidden rounded-full";

    const sizeStyles = {
        sm: "px-5 py-2.5 text-xs text-xs",
        md: "px-10 py-3.5 text-xs",
        lg: "px-14 py-4.5 text-sm",
    };

    const variantStyles = {
        primary:
            "border-2 border-white/50 text-white hover:bg-white hover:text-obsidian-900 hover:border-white shadow-sm hover:shadow-md",
        solid:
            "bg-white text-obsidian-900 hover:bg-white/90 border-2 border-white shadow-sm hover:shadow-md",
        outline:
            "border-2 border-white/50 text-white hover:border-white hover:bg-white/5",
        ghost:
            "text-ivory-200 hover:text-white hover:bg-white/5",
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
