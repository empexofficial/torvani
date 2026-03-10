import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, Shield } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon: string;
    index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
    sparkles: <Sparkles className="w-6 h-6" />,
    shield: <Shield className="w-6 h-6" />,
};

export default function ServiceCard({
    title,
    description,
    href,
    icon,
    index = 0,
}: ServiceCardProps) {
    return (
        <AnimatedSection delay={index * 0.15}>
            <Link href={href} className="group block h-full">
                <div className="glass-card glass-card-hover h-full p-8 md:p-10 transition-all duration-500 hover:shadow-premium-card">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 gold-gradient-bg text-obsidian transition-transform duration-500 group-hover:scale-110">
                        {iconMap[icon] || <Sparkles className="w-6 h-6" />}
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ivory-50 mb-4 group-hover:text-gold-200 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-ivory-400 font-body leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Link indicator */}
                    <div className="flex items-center gap-2 text-gold-400 font-body text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                        <span>Explore</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </Link>
        </AnimatedSection>
    );
}
