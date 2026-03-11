import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import GalleryItem from "@/components/ui/GalleryItem";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABlock from "@/components/ui/CTABlock";
import {
  services,
  testimonials,
  galleryImages,
  homeFAQ,
  processSteps,
} from "@/lib/data";
import { Shield, Award, Clock, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Torvani — Premium Automotive Detailing & Ceramic Coating",
  description:
    "Experience ultra-premium automotive detailing and ceramic coating by Torvani. Obsessive craftsmanship, world-class results. Your car, our canvas.",
};

export default function HomePage() {
  return (
    <div className="page-transition">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1172397411?background=1&autoplay=1&loop=1&byline=0&title=0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-obsidian-900/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <AnimatedSection className="max-w-5xl mx-auto flex flex-col items-center mt-16 md:mt-24">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-colbiac text-white mb-4 lowercase first-letter:uppercase drop-shadow-md">
              Auto Detailing Done Right
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold text-white mb-6 leading-none tracking-wide uppercase">
              Your Car, Our Canvas
            </h1>
            <p className="font-body text-xs md:text-sm text-white/90 tracking-[0.2em] md:tracking-[0.25em] uppercase max-w-2xl mb-12 leading-relaxed">
              Obsessive craftsmanship meets automotive excellence. We don&apos;t just detail vehicles — we elevate them to art.
            </p>
            <div className="flex justify-center">
              <Button href="/booking">
                Book Your Detail
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── Brand Positioning ── */}
      <section className="py-24 md:py-32 bg-black flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <AnimatedSection className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://1clfha3f90.ucarecd.net/2f345942-ea6c-4064-888a-ee6b28b6614c/TovoniWebsiteImage1.jpg")' }}
            />

            {/* Dark Overlay for depth and readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

            {/* Content Container */}
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
              {/* The brand name in script/cursive font */}
              <h2 className="font-colbiac text-6xl md:text-8xl lg:text-[7.5rem] text-white drop-shadow-xl mb-4 lowercase first-letter:uppercase leading-none">
                Torvani
              </h2>

              {/* The subtitle / tagline */}
              <p className="font-body text-[10px] md:text-xs text-ivory-300 tracking-[0.25em] md:tracking-[0.4em] mb-10 uppercase font-medium">
                ROOTED IN TRADITION. BUILT TO LEAVE A LEGACY.
              </p>

              {/* Discovery Button */}
              <Button href="/services" variant="outline" className="rounded-full px-10 py-3 text-[10px] tracking-[0.2em] text-white border-white/40 hover:bg-white hover:text-black transition-all duration-500 uppercase font-semibold">
                Discover the Torvani Standard
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section className="py-20 md:py-32 bg-black relative flex items-center justify-center">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-colbiac text-4xl md:text-6xl lg:text-[5.5rem] text-ivory-50 leading-relaxed md:leading-tight">
              If comparable, it is no longer Bugatti
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 md:py-32 bg-obsidian-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Our Services"
            title="Signature Services"
            subtitle="Each service is executed with surgical precision, premium products, and an unwavering commitment to excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                href={service.href}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Torvani ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Why Torvani"
            title="The Difference Is in the Details"
            subtitle="We don't cut corners. We don't rush. We don't compromise. Here's what sets us apart."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Gem className="w-6 h-6" />,
                title: "Premium Products",
                description:
                  "We exclusively use professional-grade products from the world's leading manufacturers. No shortcuts, no compromises.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Certified Artisans",
                description:
                  "Our team holds certifications from top coating manufacturers and undergoes continuous advanced training.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Guaranteed Results",
                description:
                  "Every service comes with our satisfaction guarantee. We stand behind our work with complete confidence.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Meticulous Process",
                description:
                  "Our multi-stage process ensures every surface is properly prepared, corrected, and protected to the highest standard.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card p-8 h-full group hover:border-gold-500/20 transition-all duration-500">
                  <div className="text-gold-400 mb-5 group-hover:text-gold-300 transition-colors duration-300">
                    {item.icon}
                  </div>
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

      {/* ── Process / Craftsmanship ── */}
      <section className="py-24 md:py-32 bg-obsidian-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Our Process"
            title="Craftsmanship, Refined"
            subtitle="Every Torvani detail follows a meticulous process designed to deliver perfection at every stage."
          />
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="flex gap-6 md:gap-8 mb-10 last:mb-0">
                  {/* Step number */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center text-obsidian font-display font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px flex-1 mt-3 bg-gradient-to-b from-gold-500/30 to-transparent" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-10">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ivory-50 mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-ivory-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Preview ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Client Experiences"
            title="What Our Clients Say"
            subtitle="Don't take our word for it. Hear from the owners who've experienced the Torvani standard."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
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
          <AnimatedSection className="text-center mt-12">
            <Button href="/testimonials" variant="outline">
              Read More Reviews
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="py-24 md:py-32 bg-obsidian-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Our Work"
            title="The Portfolio"
            subtitle="A curated selection of transformations and the artistry behind every detail."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((image, index) => (
              <GalleryItem
                key={image.id}
                src={image.src}
                alt={image.alt}
                title={image.title}
                category={image.category}
                index={index}
              />
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            label="Questions"
            title="Frequently Asked"
            subtitle="Everything you need to know about our services, process, and what makes Torvani different."
          />
          <FAQAccordion items={homeFAQ} />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTABlock
        title="Experience the Torvani Difference"
        subtitle="Your vehicle deserves world-class care. Book your appointment today and discover what true automotive craftsmanship looks like."
        buttonText="Reserve Your Appointment"
      />
    </div>
  );
}
