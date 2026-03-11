import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, Shield, ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon: string;
    image: string;
    badge: string;
    price: string;
    modelName: string;
    index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
    sparkles: <Sparkles className="w-4 h-4" />,
    shield: <Shield className="w-4 h-4" />,
};

export default function ServiceCard({
    title,
    description,
    href,
    icon,
    image,
    badge,
    price,
    modelName,
    index = 0,
}: ServiceCardProps) {
    return (
        <AnimatedSection delay={index * 0.15}>
            <Link href={href} className="group block relative aspect-square overflow-hidden rounded-xl bg-obsidian-900 shadow-2xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                />

                {/* Dark Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-900/20 to-transparent group-hover:from-black transition-colors duration-500" />

                {/* Badge Overlay - Top Left */}
                <div className="absolute top-6 left-6 transition-transform duration-500 group-hover:translate-x-1">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md inline-flex items-center gap-2">
                        <span className="text-[10px] text-white font-body uppercase tracking-[0.2em] font-medium">
                            {badge}
                        </span>
                    </div>
                </div>

                {/* Content Overlay - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-1/2">
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 uppercase tracking-wide transition-transform duration-500 group-hover:-translate-y-1">
                        {title}
                    </h3>

                    <div className="flex items-center justify-between pt-2 transition-transform duration-500 group-hover:-translate-y-1">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-body mb-1">Starting At</span>
                            <span className="text-gold-400 font-display font-bold text-lg tracking-wider">{price.toUpperCase()}</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-obsidian group-hover:border-white">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </Link>
        </AnimatedSection>
    );
}
