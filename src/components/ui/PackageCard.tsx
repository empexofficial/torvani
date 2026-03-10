import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Button from "./Button";

interface PackageCardProps {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
    index?: number;
    ctaHref?: string;
}

export default function PackageCard({
    name,
    price,
    description,
    features,
    popular = false,
    index = 0,
    ctaHref = "/booking",
}: PackageCardProps) {
    return (
        <AnimatedSection delay={index * 0.15}>
            <div
                className={`relative h-full flex flex-col p-8 md:p-10 transition-all duration-500 ${popular
                        ? "glass-card border-gold-500/30 shadow-gold"
                        : "glass-card glass-card-hover"
                    }`}
            >
                {/* Popular badge */}
                {popular && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2">
                        <div className="gold-gradient-bg px-6 py-1.5 text-obsidian text-xs font-body font-bold tracking-wider uppercase">
                            Most Popular
                        </div>
                    </div>
                )}

                {/* Header */}
                <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold text-ivory-50 mb-2">
                        {name}
                    </h3>
                    <p className="gold-gradient-text font-display text-3xl font-bold mb-4">
                        {price}
                    </p>
                    <p className="font-body text-ivory-400 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent mb-8" />

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                            <span className="font-body text-sm text-ivory-300">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Button
                    href={ctaHref}
                    variant={popular ? "primary" : "outline"}
                    className="w-full"
                >
                    Select Package
                </Button>
            </div>
        </AnimatedSection>
    );
}
