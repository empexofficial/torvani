"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface FAQAccordionProps {
    items: { question: string; answer: string }[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.08}>
                    <div className="glass-card overflow-hidden">
                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer group"
                            aria-expanded={openIndex === index}
                        >
                            <span className="font-display text-lg md:text-xl font-semibold text-ivory-100 pr-4 group-hover:text-gold-200 transition-colors duration-300">
                                {item.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                                        <div className="w-full h-px bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent mb-4" />
                                        <p className="font-body text-ivory-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
}
