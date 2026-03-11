"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-obsidian/95 backdrop-blur-xl border-b border-white/5 py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Left — Hamburger Menu */}
                    <div className="flex-1 flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative z-10 p-2 -ml-2 flex items-center gap-2 text-ivory-100 hover:text-gold-200 transition-colors cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                            <span className="font-body text-xs tracking-[0.2em] uppercase">
                                Menu
                            </span>
                        </button>
                    </div>

                    {/* Center — Logo */}
                    <Link href="/" className="relative z-10">
                        <span className="font-display text-2xl md:text-3xl tracking-[0.15em] uppercase text-ivory-50">
                            Torvani
                        </span>
                    </Link>

                    {/* Right — Book Now */}
                    <div className="flex-1 flex items-center justify-end">
                        <Button href="/booking" variant="solid" size="sm">
                            Book Now
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-obsidian/98 backdrop-blur-2xl"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="relative h-full flex flex-col items-center justify-center gap-8"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`font-display text-3xl tracking-wider uppercase transition-colors duration-300 ${pathname === link.href
                                            ? "gold-gradient-text"
                                            : "text-ivory-200 hover:text-gold-200"
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4"
                            >
                                <Button href="/booking" variant="solid" size="lg">
                                    Book Your Detail
                                </Button>
                            </motion.div>

                            {/* Decorative element */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-12 text-center"
                            >
                                <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory-400">
                                    Your Car, Our Canvas
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
