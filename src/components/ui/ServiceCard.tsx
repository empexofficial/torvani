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
            <Link href={href} className="group block relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl bg-obsidian-900 shadow-2xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                />

                {/* Dark Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/40 to-obsidian-900/20 group-hover:from-obsidian-950 transition-colors duration-500" />

                {/* Top Overlay: Service "Model" Name */}
                <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
                    <span className="font-colbiac text-6xl md:text-7xl lg:text-8xl text-white/20 uppercase tracking-tighter opacity-80 transition-all duration-700 group-hover:opacity-40 group-hover:scale-105 inline-block">
                        {modelName}
                    </span>
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-32 left-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full inline-flex items-center gap-2">
                        <span className="text-[10px] text-white font-body uppercase tracking-[0.2em]">
                            {badge}
                        </span>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-0 flex flex-col justify-end h-1/2">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                        {title}
                    </h3>
                    <p className="text-white/70 font-body text-sm leading-relaxed mb-4 line-clamp-2 transition-transform duration-500 group-hover:-translate-y-1 opacity-100 group-hover:opacity-90">
                        {description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 transition-transform duration-500 group-hover:-translate-y-1">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/50 uppercase tracking-wider font-body">Starting At</span>
                            <span className="text-gold-400 font-display font-bold">{price}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-obsidian group-hover:border-white">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </Link>
        </AnimatedSection>
    );
}
