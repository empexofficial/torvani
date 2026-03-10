import { Metadata } from "next";
import ServiceHero from "@/components/ui/ServiceHero";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTABlock from "@/components/ui/CTABlock";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
    title: "Testimonials",
    description:
        "Read what luxury vehicle owners say about Torvani's premium automotive detailing and ceramic coating services.",
};

export default function TestimonialsPage() {
    return (
        <div className="page-transition">
            <ServiceHero
                title="Client Experiences"
                subtitle="Testimonials"
                description="Real stories from real owners. Discover why discerning vehicle enthusiasts trust Torvani with their most prized automobiles."
                ctaText="Join Our Clients"
                ctaHref="/booking"
            />

            {/* Featured Testimonial */}
            <section className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="gold-line mx-auto mb-8" />
                    <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-ivory-100 leading-snug mb-8 italic">
                        &ldquo;Torvani doesn&apos;t just detail cars. They transform them into
                        something that takes your breath away. The level of care, the attention to
                        every surface, every crevice — it&apos;s unlike anything I&apos;ve experienced.&rdquo;
                    </blockquote>
                    <div>
                        <p className="font-display text-lg font-bold text-ivory-50">
                            {testimonials[0].name}
                        </p>
                        <p className="font-body text-sm text-gold-400">
                            {testimonials[0].vehicle}
                        </p>
                    </div>
                </div>
            </section>

            {/* All Testimonials */}
            <section className="py-12 md:py-16 bg-obsidian-200/50">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                name={testimonial.name}
                                vehicle={testimonial.vehicle}
                                quote={testimonial.quote}
                                rating={testimonial.rating}
                                service={testimonial.service}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTABlock
                title="Ready to Become Our Next Success Story?"
                subtitle="Experience the level of care that has earned us the trust of the most discerning vehicle owners."
                buttonText="Book Your Detail"
            />
        </div>
    );
}
