"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

export default function FloatingActionButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show buttons after scrolling 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    exit={{ y: 100, x: "-50%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-8 left-1/2 z-40 flex items-center gap-3 px-4 py-3 bg-obsidian/90 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                    {/* Booking Button */}
                    <Link
                        href="/booking"
                        className="flex items-center gap-2 px-6 py-2.5 bg-white text-obsidian border border-transparent rounded-full font-display text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:border-white hover:text-white transition-all duration-300"
                    >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book</span>
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-4 bg-white/20" />

                    {/* Call Button */}
                    <a
                        href="tel:+16021112222"
                        className="flex items-center gap-2 px-6 py-2.5 bg-white text-obsidian border border-transparent rounded-full font-display text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:border-white hover:text-white transition-all duration-300"
                    >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
