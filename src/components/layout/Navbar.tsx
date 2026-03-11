"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

    // Menu categories and images
    const menuGroups = [
        {
            category: "THE STUDIO",
            links: [
                { label: "Home", href: "/", image: "https://1clfha3f90.ucarecd.net/5b46d6a1-26bc-4236-bf98-8f9c6cbe361f/TorvaniWebsiteImage4.jpg" },
                { label: "Gallery", href: "/gallery", image: "https://1clfha3f90.ucarecd.net/b3369a9c-658c-4465-936a-814e59ee8255/TorvaniWebsiteImage3.jpg" },
                { label: "Testimonials", href: "/testimonials", image: "https://1clfha3f90.ucarecd.net/b3369a9c-658c-4465-936a-814e59ee8255/TorvaniWebsiteImage3.jpg" },
            ]
        },
        {
            category: "SERVICES",
            links: [
                { label: "Auto Detailing", href: "/services/auto-detailing", image: "https://1clfha3f90.ucarecd.net/5b46d6a1-26bc-4236-bf98-8f9c6cbe361f/TorvaniWebsiteImage4.jpg" },
                { label: "Ceramic Coating", href: "/services/ceramic-coating", image: "/images/services/ceramic.png" },
            ]
        },
        {
            category: "RESERVE",
            links: [
                { label: "Book Now", href: "/booking", image: "https://1clfha3f90.ucarecd.net/5b46d6a1-26bc-4236-bf98-8f9c6cbe361f/TorvaniWebsiteImage4.jpg" },
            ]
        }
    ];

    const [activeImage, setActiveImage] = useState(menuGroups[0].links[0].image);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-obsidian/95 backdrop-blur-xl border-b border-white/5 py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
                    {/* Left — Hamburger Menu */}
                    <div className="flex-1 flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative z-10 p-2 -ml-2 flex items-center gap-3 text-ivory-100 hover:text-gold-200 transition-colors cursor-pointer group"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex flex-col gap-1.5"
                                        >
                                            <span className="w-6 h-0.5 bg-current rounded-full transition-transform group-hover:translate-x-1" />
                                            <span className="w-4 h-0.5 bg-current rounded-full transition-transform group-hover:translate-x-2" />
                                            <span className="w-6 h-0.5 bg-current rounded-full transition-transform group-hover:translate-x-1" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <span className="font-display text-[10px] tracking-[0.3em] uppercase mt-0.5">
                                {isMenuOpen ? "Close" : "Menu"}
                            </span>
                        </button>
                    </div>

                    {/* Center — Logo */}
                    <Link href="/" className="relative z-10">
                        <span className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-ivory-50">
                            Torvani
                        </span>
                    </Link>

                    {/* Right — Book Now */}
                    <div className="flex-1 flex items-center justify-end gap-8">
                        <a
                            href="tel:+16021112222"
                            className="hidden md:block font-body text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:text-gold-200 transition-colors"
                        >
                            (602) 111-2222
                        </a>
                        <Button href="/booking" variant="solid" size="sm" className="hidden sm:inline-flex">
                            Reserve
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
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-obsidian flex flex-col pt-24 md:pt-0"
                    >
                        {/* Backdrop with subtle gradient */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-obsidian-lighter/20 via-obsidian to-obsidian" />

                        <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-2 gap-0">
                            {/* Left Column: Navigation */}
                            <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0 overflow-y-auto custom-scrollbar">
                                <nav className="space-y-12">
                                    {menuGroups.map((group, idx) => (
                                        <div key={group.category} className="space-y-6">
                                            <motion.p
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + idx * 0.1 }}
                                                className="font-display text-[11px] tracking-[0.4em] uppercase text-ivory-400/60"
                                            >
                                                {group.category}
                                            </motion.p>
                                            <ul className="flex flex-col gap-4">
                                                {group.links.map((link, linkIdx) => (
                                                    <motion.li
                                                        key={link.href}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 + idx * 0.1 + linkIdx * 0.05 }}
                                                    >
                                                        <Link
                                                            href={link.href}
                                                            onMouseEnter={() => setActiveImage(link.image)}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className={`group relative inline-flex items-center gap-4 py-1 font-display text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase transition-all duration-300 ${pathname === link.href ? "text-white" : "text-ivory-300 hover:text-white"
                                                                }`}
                                                        >
                                                            <span className={`h-px w-0 bg-gold-400 group-hover:w-8 transition-all duration-500 ${pathname === link.href ? "w-8" : ""}`} />
                                                            {link.label}
                                                        </Link>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </nav>

                                {/* Footer info in menu */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                                >
                                    <div>
                                        <p className="font-display text-[10px] tracking-[0.2em] uppercase text-ivory-500 mb-2">Location</p>
                                        <p className="font-body text-sm text-ivory-100">Scottsdale, Arizona</p>
                                    </div>
                                    <div>
                                        <p className="font-display text-[10px] tracking-[0.2em] uppercase text-ivory-500 mb-2">Connect</p>
                                        <div className="flex gap-4">
                                            <a href="#" className="font-body text-sm text-ivory-100 hover:text-gold-200 transition-colors">Instagram</a>
                                            <a href="#" className="font-body text-sm text-ivory-100 hover:text-gold-200 transition-colors">Facebook</a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column: Dynamic Image Wrapper */}
                            <div className="hidden md:block relative h-full w-full overflow-hidden bg-obsidian-darker">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeImage}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute inset-0"
                                    >
                                        {/* Image overlay for better text contrast/depth */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent z-10" />
                                        <div className="absolute inset-0 bg-black/20 z-10" />

                                        <img
                                            src={activeImage}
                                            alt="Featured content"
                                            className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                                        />

                                        {/* Branding watermark */}
                                        <div className="absolute bottom-12 right-12 z-20 overflow-hidden">
                                            <motion.p
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.5, duration: 0.8 }}
                                                className="font-display text-[120px] leading-none tracking-tighter text-white/5 uppercase select-none font-black"
                                            >
                                                Torvani
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
