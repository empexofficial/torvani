import { Metadata } from "next";
import ServiceHero from "@/components/ui/ServiceHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PackageCard from "@/components/ui/PackageCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABlock from "@/components/ui/CTABlock";
import { ceramicPackages, ceramicCoatingFAQ } from "@/lib/data";
import {
    Droplets,
    Shield,
    Sun,
    Timer,
    Layers,
    Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Ceramic Coating",
    description:
        "Torvani's professional ceramic coating delivers unmatched gloss, hydrophobic performance, and years of paint protection for luxury vehicles.",
};

export default function CeramicCoatingPage() {
    return (
        <div className="page-transition">
            <ServiceHero
                title="Ceramic Coating"
                subtitle="Advanced Protection"
                description="Laboratory-grade ceramic protection that delivers unmatched gloss, hydrophobic performance, and long-term paint preservation. The ultimate investment in your vehicle's finish."
                ctaText="Protect Your Finish"
            />

            {/* What is Ceramic Coating */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="block text-3xl font-colbiac text-gold-400 mb-4 lowercase first-letter:uppercase">
                                The Science of Protection
                            </span>
                            <div className="gold-line mb-8" />
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-6 leading-tight">
                                What Is Ceramic Coating?
                            </h2>
                            <p className="font-body text-ivory-300 text-lg leading-relaxed mb-6">
                                Ceramic coating is a liquid polymer that chemically bonds with
                                your vehicle&apos;s factory paint, creating a permanent or
                                semi-permanent layer of protection that cannot be washed off or
                                broken down by environmental factors.
                            </p>
                            <p className="font-body text-ivory-400 leading-relaxed">
                                Unlike traditional waxes and sealants that sit on top of the
                                paint and degrade within weeks, a professional ceramic coating
                                becomes part of the surface itself — providing years of
                                protection, extraordinary gloss depth, and a self-cleaning
                                hydrophobic effect that makes maintenance effortless.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="aspect-[4/3] bg-gradient-to-br from-obsidian-100 to-obsidian-300 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full gold-gradient-bg opacity-15" />
                                        <p className="text-ivory-400/30 text-xs font-body uppercase tracking-wider px-8">
                                            Water beading on ceramic-coated surface
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
                        label="Protection Benefits"
                        title="Why Ceramic Coating"
                        subtitle="Superior protection that outperforms every traditional method of surface preservation."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Droplets className="w-6 h-6" />,
                                title: "Hydrophobic Surface",
                                description:
                                    "Water and contaminants bead and roll off effortlessly, keeping your vehicle cleaner for longer between washes.",
                            },
                            {
                                icon: <Sun className="w-6 h-6" />,
                                title: "UV Protection",
                                description:
                                    "Blocks harmful UV rays that cause paint oxidation, fading, and clear coat degradation over time.",
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Chemical Resistance",
                                description:
                                    "Protects against bird droppings, tree sap, acid rain, industrial fallout, and other corrosive contaminants.",
                            },
                            {
                                icon: <Sparkles className="w-6 h-6" />,
                                title: "Unmatched Gloss",
                                description:
                                    "Creates an incredible depth of gloss and clarity that makes your paint look wet and mirror-like at all times.",
                            },
                            {
                                icon: <Timer className="w-6 h-6" />,
                                title: "Years of Protection",
                                description:
                                    "Unlike wax that lasts weeks, ceramic coating provides protection measured in years — up to a lifetime with our Grand package.",
                            },
                            {
                                icon: <Layers className="w-6 h-6" />,
                                title: "Scratch Resistance",
                                description:
                                    "The hardened coating creates a sacrificial layer that significantly reduces the risk of light scratches and swirl marks.",
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

            {/* Why Torvani's Coating */}
            <section className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <AnimatedSection>
                        <span className="block text-3xl font-colbiac text-gold-400 mb-4 lowercase first-letter:uppercase">
                            The Torvani Advantage
                        </span>
                        <div className="gold-line mx-auto mb-8" />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-6 leading-tight">
                            Why Torvani&apos;s Ceramic Coating Is Different
                        </h2>
                        <p className="font-body text-ivory-300 text-lg leading-relaxed mb-4">
                            Not all ceramic coatings are created equal. The difference between
                            a coating that lasts and one that fails lies in preparation,
                            application technique, and the quality of the product itself.
                        </p>
                        <p className="font-body text-ivory-400 leading-relaxed">
                            At Torvani, every ceramic coating begins with full paint correction
                            — because coating over imperfections only seals them in permanently.
                            Our certified installers use only professional-grade coatings from
                            Gtechniq and Gyeon, applied in controlled environments using
                            precise techniques that ensure complete coverage, proper bonding,
                            and maximum durability.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Prep / Correction Process */}
            <section className="py-24 md:py-32 bg-obsidian-200/50">
                <div className="max-w-3xl mx-auto px-6">
                    <SectionTitle
                        label="Preparation"
                        title="The Process Before the Coating"
                        subtitle="Proper preparation is the foundation of a flawless ceramic coating. Here's how we do it."
                    />
                    <div className="space-y-6">
                        {[
                            {
                                step: "01",
                                title: "Full Decontamination Wash",
                                description:
                                    "Multi-stage wash including foam pre-wash, contact wash, iron decontamination, tar removal, and thorough rinsing.",
                            },
                            {
                                step: "02",
                                title: "Clay Bar Treatment",
                                description:
                                    "Removes bonded above-surface contaminants that washing alone cannot remove, creating a perfectly smooth surface.",
                            },
                            {
                                step: "03",
                                title: "Paint Measurement",
                                description:
                                    "Digital paint thickness readings across every panel to determine safe correction limits and identify any previous work.",
                            },
                            {
                                step: "04",
                                title: "Multi-Stage Correction",
                                description:
                                    "Systematic paint correction using professional polishers to remove swirl marks, scratches, and imperfections.",
                            },
                            {
                                step: "05",
                                title: "IPA Wipedown",
                                description:
                                    "Isopropyl alcohol wipedown removes all polishing oils, revealing the true condition of the paint and ensuring proper coating bonding.",
                            },
                            {
                                step: "06",
                                title: "Ceramic Application",
                                description:
                                    "Precise panel-by-panel application of the ceramic coating in a controlled environment, followed by infrared curing.",
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

            {/* Package Tiers */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle
                        label="Packages"
                        title="Ceramic Coating Packages"
                        subtitle="Three levels of protection. Each includes comprehensive paint preparation and professional-grade coating application."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ceramicPackages.map((pkg, index) => (
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

            {/* Aftercare */}
            <section className="py-24 md:py-32 bg-obsidian-200/50">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionTitle
                        label="Aftercare"
                        title="Maintaining Your Coating"
                        subtitle="Proper maintenance ensures your ceramic coating performs at its best for its full lifespan."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Wash Method",
                                description:
                                    "Hand wash or touchless wash only. Avoid automatic car washes with brushes that can mar the coated surface.",
                            },
                            {
                                title: "Cleaning Products",
                                description:
                                    "Use only pH-neutral car shampoo. Avoid harsh chemicals, dish soap, or abrasive cleaning products.",
                            },
                            {
                                title: "Maintenance Spray",
                                description:
                                    "Apply a ceramic maintenance spray every 2–3 months to rejuvenate the hydrophobic layer and boost gloss.",
                            },
                            {
                                title: "Annual Inspection",
                                description:
                                    "Schedule an annual inspection with Torvani to assess coating condition and apply any necessary touch-ups.",
                            },
                        ].map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-8 h-full">
                                    <h3 className="font-display text-xl font-bold text-ivory-50 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="font-body text-sm text-ivory-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 md:py-32">
                <div className="max-w-3xl mx-auto px-6">
                    <SectionTitle
                        label="Questions"
                        title="Ceramic Coating FAQ"
                        subtitle="Common questions about our ceramic coating services and protection options."
                    />
                    <FAQAccordion items={ceramicCoatingFAQ} />
                </div>
            </section>

            <CTABlock
                title="Protect Your Investment"
                subtitle="Give your vehicle the ultimate protection with Torvani's professional ceramic coating. Years of brilliance, applied in days."
                buttonText="Protect Your Finish"
            />
        </div>
    );
}
