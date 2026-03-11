import { Metadata } from "next";
import ServiceHero from "@/components/ui/ServiceHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PackageCard from "@/components/ui/PackageCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABlock from "@/components/ui/CTABlock";
import { detailingPackages, autoDetailingFAQ } from "@/lib/data";
import { Droplets, Shield, Sparkles, Eye, Brush, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Auto Detailing",
    description:
        "Torvani's premium auto detailing service restores your vehicle to showroom perfection. Meticulous interior and exterior care for luxury and exotic vehicles.",
};

export default function AutoDetailingPage() {
    return (
        <div className="page-transition">
            <ServiceHero
                title="Auto Detailing"
                subtitle="Signature Service"
                description="Meticulous interior and exterior detailing that restores your vehicle to a condition beyond showroom perfection. Every surface, every crevice — elevated."
                ctaText="Book Your Detail"
            />

            {/* Overview */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="block text-3xl font-colbiac text-gold-400 mb-4 lowercase first-letter:uppercase">
                                The Art of Detailing
                            </span>
                            <div className="gold-line mb-8" />
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-6 leading-tight">
                                Beyond Clean. Beyond Perfect.
                            </h2>
                            <p className="font-body text-ivory-300 text-lg leading-relaxed mb-6">
                                A Torvani detail isn&apos;t a car wash. It&apos;s a comprehensive
                                restoration process that addresses every surface of your vehicle
                                with professional-grade products and techniques refined over
                                thousands of hours.
                            </p>
                            <p className="font-body text-ivory-400 leading-relaxed">
                                From precision paint correction that eliminates swirl marks and
                                imperfections to deep interior restoration that revives every
                                surface — our process delivers results that redefine what your
                                vehicle can look like.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="aspect-[4/3] bg-gradient-to-br from-obsidian-100 to-obsidian-300 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full gold-gradient-bg opacity-15" />
                                        <p className="text-ivory-400/30 text-xs font-body uppercase tracking-wider px-8">
                                            Auto detailing in progress
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 md:py-32 bg-obsidian-200/50">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle
                        label="Benefits"
                        title="What You Get"
                        subtitle="Every Torvani detail delivers measurable results you can see and feel."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Sparkles className="w-6 h-6" />,
                                title: "Showroom Finish",
                                description:
                                    "Paint correction removes imperfections, revealing a deep, mirror-like gloss that turns heads.",
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Surface Protection",
                                description:
                                    "Sealants and waxes create a protective barrier against UV damage, contaminants, and environmental hazards.",
                            },
                            {
                                icon: <Droplets className="w-6 h-6" />,
                                title: "Deep Clean",
                                description:
                                    "Every crevice, every surface — inside and out — is thoroughly decontaminated and restored.",
                            },
                            {
                                icon: <Eye className="w-6 h-6" />,
                                title: "Interior Revival",
                                description:
                                    "Leather conditioning, fabric extraction, and trim restoration bring your cabin back to life.",
                            },
                            {
                                icon: <Brush className="w-6 h-6" />,
                                title: "Paint Correction",
                                description:
                                    "Multi-stage polishing eliminates swirl marks, scratches, and oxidation for a flawless finish.",
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "Value Preservation",
                                description:
                                    "Regular professional detailing maintains your vehicle's appearance and protects its resale value.",
                            },
                        ].map((benefit, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-8 h-full group hover:border-gold-500/20 transition-all duration-500">
                                    <div className="text-gold-400 mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ivory-50 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="font-body text-sm text-ivory-400 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Package Tiers */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle
                        label="Packages"
                        title="Choose Your Detail"
                        subtitle="Three tiers of excellence. Each designed for a different level of restoration and protection."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {detailingPackages.map((pkg, index) => (
                            <PackageCard
                                key={pkg.name}
                                name={pkg.name}
                                price={pkg.price}
                                description={pkg.description}
                                features={pkg.features}
                                popular={pkg.popular}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Section */}
            <section className="py-24 md:py-32 bg-obsidian-200/50">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle
                        label="Results"
                        title="The Transformation"
                        subtitle="See the dramatic difference a professional Torvani detail makes."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Before */}
                        <AnimatedSection>
                            <div className="relative">
                                <div className="aspect-[4/3] bg-gradient-to-br from-obsidian-100 to-obsidian-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-ivory-400/10" />
                                        <p className="text-ivory-400/30 text-xs font-body uppercase tracking-wider">
                                            Before image placeholder
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 px-4 py-2 bg-obsidian/80 backdrop-blur-sm">
                                    <span className="text-xs font-body font-bold tracking-wider uppercase text-ivory-300">
                                        Before
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* After */}
                        <AnimatedSection delay={0.15}>
                            <div className="relative">
                                <div className="aspect-[4/3] bg-gradient-to-br from-obsidian-100 to-obsidian-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-3 rounded-full gold-gradient-bg opacity-20" />
                                        <p className="text-ivory-400/30 text-xs font-body uppercase tracking-wider">
                                            After image placeholder
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 px-4 py-2 gold-gradient-bg">
                                    <span className="text-xs font-body font-bold tracking-wider uppercase text-obsidian">
                                        After
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 md:py-32">
                <div className="max-w-3xl mx-auto px-6">
                    <SectionTitle
                        label="Our Process"
                        title="How It Works"
                        subtitle="A meticulous, multi-stage approach designed to deliver flawless results every time."
                    />
                    <div className="space-y-6">
                        {[
                            {
                                step: "01",
                                title: "Assessment & Consultation",
                                description:
                                    "We evaluate your vehicle's condition under professional lighting, document existing imperfections, and discuss your goals.",
                            },
                            {
                                step: "02",
                                title: "Decontamination Wash",
                                description:
                                    "Thorough pre-wash, foam bath, two-bucket method wash, iron decontamination, tar removal, and clay bar treatment.",
                            },
                            {
                                step: "03",
                                title: "Paint Correction",
                                description:
                                    "Using professional dual-action and rotary polishers, we systematically remove defects through multiple polishing stages.",
                            },
                            {
                                step: "04",
                                title: "Interior Restoration",
                                description:
                                    "Deep cleaning, extraction, leather conditioning, glass treatment, and meticulous attention to every interior surface.",
                            },
                            {
                                step: "05",
                                title: "Protection & Finishing",
                                description:
                                    "Application of premium sealants, waxes, or ceramic coatings to protect and enhance the corrected surfaces.",
                            },
                            {
                                step: "06",
                                title: "Final Inspection & Reveal",
                                description:
                                    "Comprehensive quality check under inspection lighting, final touches, and your personal walkthrough of the completed work.",
                            },
                        ].map((step, index) => (
                            <AnimatedSection key={index} delay={index * 0.08}>
                                <div className="glass-card p-6 md:p-8 flex gap-6 items-start group hover:border-gold-500/20 transition-all duration-500">
                                    <span className="gold-gradient-text font-display text-3xl font-bold flex-shrink-0">
                                        {step.step}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-ivory-50 mb-2 group-hover:text-gold-200 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="font-body text-sm text-ivory-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 md:py-32 bg-obsidian-200/50">
                <div className="max-w-3xl mx-auto px-6">
                    <SectionTitle
                        label="Questions"
                        title="Auto Detailing FAQ"
                        subtitle="Common questions about our auto detailing services."
                    />
                    <FAQAccordion items={autoDetailingFAQ} />
                </div>
            </section>

            <CTABlock
                title="Ready for a Showroom Finish?"
                subtitle="Book your auto detailing appointment and experience the Torvani standard. Your vehicle deserves nothing less."
                buttonText="Book Your Detail"
            />
        </div>
    );
}
