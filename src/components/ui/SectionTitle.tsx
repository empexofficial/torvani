import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
    label?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export default function SectionTitle({
    label,
    title,
    subtitle,
    align = "center",
    className = "",
}: SectionTitleProps) {
    const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <AnimatedSection
            className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass} ${className}`}
        >
            {label && (
                <span className="inline-block text-3xl font-colbiac text-gold-400 lowercase first-letter:uppercase">
                    {label}
                </span>
            )}
            <div className="gold-line mx-auto" style={align === "left" ? { margin: 0 } : {}} />
            <h2 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] font-bold text-ivory-50 leading-[0.9] tracking-tighter uppercase">
                {title}
            </h2>
            {subtitle && (
                <p className="text-ivory-400 font-body text-base md:text-lg max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </AnimatedSection>
    );
}
