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
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? "bg-obsidian/95 backdrop-blur-xl border-b border-white/5 py-3"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-10">
                        <span className="font-display text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase text-ivory-50">
                            Torvani
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 ${pathname === link.href
                                        ? "text-gold-300"
                                        : "text-ivory-300 hover:text-gold-200"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button href="/booking" size="sm">
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden relative z-10 p-2 text-ivory-100 hover:text-gold-200 transition-colors cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-obsidian/98 backdrop-blur-2xl"
                            onClick={() => setIsMobileOpen(false)}
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
                                        className={`font-display text-3xl font-bold tracking-wider uppercase transition-colors duration-300 ${pathname === link.href
                                                ? "gold-gradient-text"
                                                : "text-ivory-200 hover:text-gold-200"
                                            }`}
                                        onClick={() => setIsMobileOpen(false)}
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
                                <Button href="/booking" size="lg">
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
