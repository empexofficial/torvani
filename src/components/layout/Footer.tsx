import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/">
                            <span className="font-display text-2xl font-bold tracking-[0.15em] uppercase text-ivory-50">
                                Torvani
                            </span>
                        </Link>
                        <p className="font-body text-sm text-ivory-400 mt-4 leading-relaxed">
                            Your car, our canvas. Premium automotive detailing and ceramic
                            coating for discerning owners.
                        </p>
                        <p className="font-body text-xs text-ivory-400/50 mt-3 tracking-wider">
                            Est. 2026
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-display text-sm font-bold tracking-wider uppercase text-ivory-100 mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="font-body text-sm text-ivory-400 hover:text-gold-300 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display text-sm font-bold tracking-wider uppercase text-ivory-100 mb-6">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/services/auto-detailing"
                                    className="font-body text-sm text-ivory-400 hover:text-gold-300 transition-colors duration-300"
                                >
                                    Auto Detailing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/ceramic-coating"
                                    className="font-body text-sm text-ivory-400 hover:text-gold-300 transition-colors duration-300"
                                >
                                    Ceramic Coating
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-sm font-bold tracking-wider uppercase text-ivory-100 mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-3 font-body text-sm text-ivory-400">
                            <li>
                                <a
                                    href="tel:+16021112222"
                                    className="hover:text-gold-300 transition-colors duration-300"
                                >
                                    (602) 111-2222
                                </a>
                            </li>
                            <li>
                                {/* PLACEHOLDER: Replace with real email */}
                                <a
                                    href="mailto:info@torvani.com"
                                    className="hover:text-gold-300 transition-colors duration-300"
                                >
                                    info@torvani.com
                                </a>
                            </li>
                            <li>
                                {/* PLACEHOLDER: Replace with real address */}
                                <span className="text-ivory-400/60">
                                    [City, State]
                                </span>
                            </li>
                        </ul>

                        {/* Social */}
                        <div className="flex gap-4 mt-6">
                            {/* PLACEHOLDER: Replace with real social links */}
                            {["Instagram", "Facebook", "TikTok"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="font-body text-xs tracking-wider uppercase text-ivory-400/60 hover:text-gold-300 transition-colors duration-300"
                                    aria-label={social}
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body text-xs text-ivory-400/40">
                        © {new Date().getFullYear()} Torvani Detailing. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/terms-of-service"
                            className="font-body text-xs text-ivory-400/40 hover:text-ivory-300 transition-colors duration-300"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/privacy-policy"
                            className="font-body text-xs text-ivory-400/40 hover:text-ivory-300 transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
