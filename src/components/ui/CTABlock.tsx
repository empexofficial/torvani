import AnimatedSection from "./AnimatedSection";
import Button from "./Button";

interface CTABlockProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    className?: string;
}

export default function CTABlock({
    title = "Ready to Elevate Your Vehicle?",
    subtitle = "Experience the Torvani difference. Book your appointment today and discover what true automotive care looks like.",
    buttonText = "Book Your Detail",
    buttonHref = "/booking",
    className = "",
}: CTABlockProps) {
    return (
        <section className={`py-24 md:py-32 relative overflow-hidden ${className}`}>
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-200 via-obsidian to-obsidian-200" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, #c78918 0%, transparent 50%)",
            }} />

            <div className="relative max-w-3xl mx-auto px-6 text-center">
                <AnimatedSection>
                    <div className="gold-line mx-auto mb-8" />
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory-50 mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-ivory-300 font-body text-lg md:text-xl mb-10 leading-relaxed">
                        {subtitle}
                    </p>
                    <Button href={buttonHref} size="lg">
                        {buttonText}
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
}
