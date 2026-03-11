"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    return (
        <AnimatedSection delay={index * 0.08}>
            <div
                onClick={onClick}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-obsidian-100"
            >
                {/* Background Image / Placeholder */}
                <div className="absolute inset-0 bg-obsidian-200">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Gradient Overlay for bottom text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-80" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex items-end justify-between">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                        {title}.
                    </h3>
                    <div className="w-10 h-10 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
