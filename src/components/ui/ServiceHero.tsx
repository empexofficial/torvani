import AnimatedSection from "./AnimatedSection";
import Button from "./Button";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function ServiceHero({
    title,
    subtitle,
    description,
    ctaText = "Book This Service",
    ctaHref = "/booking",
}: ServiceHeroProps) {
    return (
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-300 via-obsidian to-obsidian" />
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 70% 30%, #c78918 0%, transparent 50%)",
                }}
            />

            <div className="relative max-w-8xl mx-auto px-6 py-32 md:py-40 w-full">
                <AnimatedSection className="max-w-3xl">
                    <span className="inline-block text-3xl font-colbiac text-white mb-6 lowercase first-letter:uppercase">
                        {subtitle}
                    </span>
                    <div className="gold-line mb-8" style={{ background: 'white' }} />
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-ivory-50 mb-6 leading-[1.1]">
                        {title}
                    </h1>
                    <p className="text-ivory-300 font-body text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        {description}
                    </p>
                    <Button href={ctaHref} size="lg">
                        {ctaText}
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
}
