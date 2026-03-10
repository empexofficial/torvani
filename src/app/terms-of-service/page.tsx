import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Torvani Detailing terms of service. Please read these terms carefully before using our services.",
};

/**
 * IMPORTANT: This Terms of Service is a template for a detailing business website.
 * It should be reviewed by a qualified legal professional before publication.
 * This is NOT legal advice and should be customized to your specific business,
 * jurisdiction, and applicable laws.
 */
export default function TermsOfServicePage() {
    return (
        <div className="page-transition pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="max-w-3xl mx-auto px-6">
                <div className="mb-12">
                    <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4 block">
                        Legal
                    </span>
                    <div className="gold-line mb-8" />
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-ivory-50 mb-4">
                        Terms of Service
                    </h1>
                    <p className="font-body text-ivory-400">
                        Last updated: March 2026
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            By accessing and using the Torvani Detailing website and services,
                            you agree to be bound by these Terms of Service. If you do not agree
                            to these terms, please do not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            2. Services Description
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Torvani Detailing provides professional automotive detailing and
                            ceramic coating services. Service descriptions, pricing, and
                            availability on our website are subject to change without notice.
                            Final pricing will be confirmed during your consultation based on
                            your vehicle&apos;s specific condition and requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            3. Booking and Appointments
                        </h2>
                        <div className="font-body text-ivory-300 leading-relaxed space-y-3">
                            <p>
                                Appointments booked through our website are subject to
                                confirmation. We reserve the right to reschedule or cancel
                                appointments as necessary.
                            </p>
                            <p>
                                {/* PLACEHOLDER: Adjust cancellation policy to match your business */}
                                Cancellations must be made at least 48 hours before your
                                scheduled appointment. Late cancellations or no-shows may be
                                subject to a cancellation fee.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            4. Pricing and Payment
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            All prices listed on our website are starting prices and may vary
                            based on vehicle size, condition, and specific requirements. Payment
                            is due upon completion of services unless otherwise agreed upon.
                            We accept major credit cards, debit cards, and other payment methods
                            as specified at the time of service.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            5. Liability and Warranties
                        </h2>
                        <div className="font-body text-ivory-300 leading-relaxed space-y-3">
                            <p>
                                Torvani Detailing takes the utmost care with every vehicle
                                entrusted to us. We carry full insurance coverage for all vehicles
                                in our care.
                            </p>
                            <p>
                                Ceramic coating warranties are subject to proper maintenance as
                                outlined in our aftercare guidelines. Warranty coverage does not
                                extend to damage caused by improper maintenance, accidents,
                                environmental disasters, or modifications to the coated surface.
                            </p>
                            <p>
                                Pre-existing damage, including but not limited to deep scratches,
                                rock chips, and previous poor-quality repairs, may affect the
                                final results and is not covered under our service guarantee.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            6. Vehicle Condition
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Clients are encouraged to remove all personal belongings from the
                            vehicle before the appointment. Torvani Detailing is not
                            responsible for any personal items left in the vehicle during
                            service. Any pre-existing damage will be documented before service
                            begins.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            7. Intellectual Property
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            All content on this website, including text, images, logos, and
                            branding materials, is the property of Torvani Detailing and is
                            protected by copyright and trademark laws. Unauthorized use,
                            reproduction, or distribution is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            8. Privacy
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Your use of our website is also governed by our{" "}
                            <a
                                href="/privacy-policy"
                                className="text-gold-400 hover:text-gold-300 transition-colors"
                            >
                                Privacy Policy
                            </a>
                            , which is incorporated into these Terms of Service by reference.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            9. Modifications
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Torvani Detailing reserves the right to modify these Terms of
                            Service at any time. Changes will be effective immediately upon
                            posting to our website. Continued use of our services constitutes
                            acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            10. Contact
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            For questions about these Terms of Service, please contact us at{" "}
                            {/* PLACEHOLDER: Replace with real email */}
                            <a
                                href="mailto:info@torvani.com"
                                className="text-gold-400 hover:text-gold-300 transition-colors"
                            >
                                info@torvani.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
