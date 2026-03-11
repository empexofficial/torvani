import AnimatedSection from "./AnimatedSection";

function PointyStar({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 1l3.09 6.26L22 8.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.14l-5-4.87 6.91-1.01L12 1z"
                fill="currentColor"
            />
        </svg>
    );
}

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
                        <PointyStar
                            key={i}
                            className="w-4 h-4 text-gold-500"
                        />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-ivory-200 leading-relaxed mb-8 flex-1 italic">
                    &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                {/* Client */}
                <div className="flex justify-between items-end">
                    <div>
                        <p className="font-display text-lg font-bold text-ivory-50">
                            {name}
                        </p>
                        <p className="font-body text-sm text-ivory-400">{vehicle}</p>
                    </div>
                    <span className="text-xs font-body font-semibold tracking-wider uppercase text-white/50">
                        {service}
                    </span>
                </div>
            </div>
        </AnimatedSection>
    );
}
