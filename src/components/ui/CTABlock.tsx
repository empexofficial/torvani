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
    buttonText = "Reserve Appointment",
    buttonHref = "/booking",
    className = "",
}: CTABlockProps) {
    return (
        <section className={`py-48 md:py-64 relative overflow-hidden flex items-center justify-center ${className}`}>
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                style={{
                    backgroundImage: 'url("https://1clfha3f90.ucarecd.net/f6403327-09d1-4a56-94ae-64a7fb522c67/TorvaniWebsiteImage5.jpg")',
                }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Ambient accent */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, #c78918 0%, transparent 70%)",
            }} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <AnimatedSection>
                    <div className="gold-line mx-auto mb-8" />
                    <h2 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] font-bold text-ivory-50 mb-6 leading-[0.9] tracking-tighter uppercase">
                        {title}
                    </h2>
                    <p className="text-ivory-300 font-body text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                    <Button href={buttonHref} size="md">
                        {buttonText}
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
}
