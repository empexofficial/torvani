import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
    label?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    variant?: "light" | "dark";
    className?: string;
}

export default function SectionTitle({
    label,
    title,
    subtitle,
    align = "center",
    variant = "light",
    className = "",
}: SectionTitleProps) {
    const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
    const titleColor = variant === "light" ? "text-ivory-50" : "text-obsidian";
    const subtitleColor = variant === "light" ? "text-ivory-400" : "text-obsidian-600";
    const labelColor = variant === "light" ? "text-gold-400" : "text-gold-600";

    return (
        <AnimatedSection
            className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass} ${className}`}
        >
            {label && (
                <span className={`inline-block text-3xl font-colbiac ${labelColor} lowercase first-letter:uppercase`}>
                    {label}
                </span>
            )}
            <h2 className={`font-display text-5xl md:text-7xl lg:text-[7.5rem] font-bold ${titleColor} leading-[0.9] tracking-tighter uppercase`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`${subtitleColor} font-body text-base md:text-lg max-w-2xl leading-relaxed`}>
                    {subtitle}
                </p>
            )}
        </AnimatedSection>
    );
}
