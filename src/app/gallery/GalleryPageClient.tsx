"use client";

import { useState } from "react";
import ServiceHero from "@/components/ui/ServiceHero";
import GalleryItem from "@/components/ui/GalleryItem";
import CTABlock from "@/components/ui/CTABlock";
import { galleryImages } from "@/lib/data";

const categories = [
    { id: "all", label: "All" },
    { id: "exterior", label: "Exterior" },
    { id: "interior", label: "Interior" },
    { id: "paint-correction", label: "Paint Correction" },
    { id: "ceramic-coating", label: "Ceramic Coating" },
];

export default function GalleryPageClient() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredImages =
        activeCategory === "all"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <div className="page-transition">
            <ServiceHero
                title="Our Work"
                subtitle="Gallery"
                description="A curated collection of transformations, showcasing the artistry, precision, and passion behind every Torvani detail."
                ctaText="Book Your Detail"
            />

            {/* Filter tabs */}
            <section className="py-12 border-b border-white/5">
                <div className="max-w-8xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2.5 font-body text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                                        ? "gold-gradient-bg text-obsidian font-semibold"
                                        : "text-ivory-400 hover:text-gold-200 border border-white/10 hover:border-gold-500/30"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-8xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredImages.map((image, index) => (
                            <GalleryItem
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                title={image.title}
                                category={image.category}
                                index={index}
                            />
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <p className="font-body text-ivory-400">
                                No images in this category yet.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <CTABlock
                title="Ready for Your Transformation?"
                subtitle="Your vehicle could be our next masterpiece. Book your appointment and let us show you what's possible."
                buttonText="Book Your Detail"
            />
        </div>
    );
}
