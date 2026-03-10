"use client";

import AnimatedSection from "./AnimatedSection";

interface GalleryItemProps {
    src: string;
    alt: string;
    title: string;
    category: string;
    index?: number;
    onClick?: () => void;
}

export default function GalleryItem({
    src,
    alt,
    title,
    category,
    index = 0,
    onClick,
}: GalleryItemProps) {
    const categoryLabels: Record<string, string> = {
        exterior: "Exterior",
        interior: "Interior",
        "paint-correction": "Paint Correction",
        "ceramic-coating": "Ceramic Coating",
    };

    return (
        <AnimatedSection delay={index * 0.08}>
            <div
                onClick={onClick}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-obsidian-100"
            >
                {/* Placeholder image styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-obsidian-100 to-obsidian-300 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full gold-gradient-bg opacity-20" />
                        <p className="text-ivory-400/40 text-xs font-body uppercase tracking-wider">
                            {alt}
                        </p>
                    </div>
                </div>

                {/* If real images exist, uncomment:
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        /> */}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-obsidian/70 backdrop-blur-sm rounded-sm">
                    <span className="text-xs font-body font-semibold tracking-wider uppercase text-gold-300">
                        {categoryLabels[category] || category}
                    </span>
                </div>

                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-display text-xl font-bold text-ivory-50">
                        {title}
                    </h3>
                </div>
            </div>
        </AnimatedSection>
    );
}
