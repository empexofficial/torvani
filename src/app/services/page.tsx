import { Metadata } from "next";
import ServiceHero from "@/components/ui/ServiceHero";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABlock from "@/components/ui/CTABlock";
import { services } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Torvani's premium automotive detailing and ceramic coating services. Professional-grade care for luxury and exotic vehicles.",
};

export default function ServicesPage() {
    return (
        <div className="page-transition">
            <ServiceHero
                title="Our Services"
                subtitle="Premium Automotive Care"
                description="Every Torvani service is built on a foundation of obsessive craftsmanship, premium products, and a refined process that delivers extraordinary results."
                ctaText="Book Now"
            />

            {/* Services Grid */}
            <section className="pb-24 md:pb-32 bg-black">
                <div className="max-w-5xl mx-auto px-6">
                    <SectionTitle
                        label="What We Offer"
                        title="Signature Services"
                        subtitle="Select a service to explore our packages, process, and what makes each offering exceptional."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                description={service.shortDescription}
                                href={service.href}
                                icon={service.icon}
                                image={service.image}
                                badge={service.badge}
                                price={service.price}
                                modelName={service.modelName}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Professional Detailing Matters */}
            <section className="py-24 md:py-32 bg-obsidian-200/50">
                <div className="max-w-8xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="block text-3xl font-colbiac text-gold-400 mb-4 lowercase first-letter:uppercase">
                                The Professional Advantage
                            </span>
                            <div className="gold-line mb-8" />
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-6 leading-tight">
                                Why Professional Detailing Matters
                            </h2>
                            <p className="font-body text-ivory-300 text-lg leading-relaxed mb-8">
                                Your vehicle is more than transportation — it&apos;s a statement
                                of who you are. Professional detailing isn&apos;t a luxury;
                                it&apos;s an investment in your vehicle&apos;s longevity,
                                appearance, and value retention.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Preserves your vehicle's resale value by up to 15%",
                                    "Removes harmful contaminants that accelerate paint degradation",
                                    "Restores and protects interior surfaces from UV and wear damage",
                                    "Delivers results impossible to achieve with consumer-grade products",
                                    "Identifies and addresses potential issues before they become costly repairs",
                                ].map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                                        <span className="font-body text-ivory-300 text-sm leading-relaxed">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            {/* Placeholder for detailing craftsmanship image */}
                            <div className="aspect-square bg-gradient-to-br from-obsidian-100 to-obsidian-300 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full gold-gradient-bg opacity-15" />
                                        <p className="text-ivory-400/30 text-xs font-body uppercase tracking-wider px-8">
                                            Detailing craftsmanship close-up
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <CTABlock
                title="Ready to Experience Professional Care?"
                subtitle="Choose your service and experience the Torvani difference. We look forward to exceeding your expectations."
                buttonText="Book Your Detail"
            />
        </div>
    );
}
