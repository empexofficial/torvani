import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface TestimonialCardProps {
    name: string;
    vehicle: string;
    quote: string;
    rating: number;
    service: string;
    index?: number;
}

export default function TestimonialCard({
    name,
    vehicle,
    quote,
    rating,
    service,
    index = 0,
}: TestimonialCardProps) {
    return (
        <AnimatedSection delay={index * 0.1}>
            <div className="glass-card h-full p-8 md:p-10 flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 fill-gold-400 text-gold-400"
                        />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-ivory-200 leading-relaxed mb-8 flex-1 italic">
                    &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mb-6" />

                {/* Client */}
                <div className="flex justify-between items-end">
                    <div>
                        <p className="font-display text-lg font-bold text-ivory-50">
                            {name}
                        </p>
                        <p className="font-body text-sm text-ivory-400">{vehicle}</p>
                    </div>
                    <span className="text-xs font-body font-semibold tracking-wider uppercase text-gold-500/60">
                        {service}
                    </span>
                </div>
            </div>
        </AnimatedSection>
    );
}
