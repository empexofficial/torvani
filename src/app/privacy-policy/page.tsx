import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Torvani Detailing privacy policy. Learn how we collect, use, and protect your personal information.",
};

/**
 * IMPORTANT: This Privacy Policy is a template for a detailing business website.
 * It should be reviewed by a qualified legal professional before publication.
 * This is NOT legal advice and should be customized to your specific business,
 * jurisdiction, and applicable privacy laws (e.g., CCPA, GDPR).
 */
export default function PrivacyPolicyPage() {
    return (
        <div className="page-transition pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="max-w-3xl mx-auto px-6">
                <div className="mb-12">
                    <span className="block text-3xl font-colbiac text-gold-400 mb-4 lowercase first-letter:uppercase">
                        Legal
                    </span>
                    <div className="gold-line mb-8" />
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-ivory-50 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="font-body text-ivory-400">
                        Last updated: March 2026
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            1. Introduction
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Torvani Detailing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy
                            and is committed to protecting the personal information you share
                            with us. This Privacy Policy explains how we collect, use,
                            disclose, and safeguard your information when you visit our website
                            or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            2. Information We Collect
                        </h2>
                        <div className="font-body text-ivory-300 leading-relaxed space-y-4">
                            <div>
                                <h3 className="font-display text-lg font-semibold text-ivory-200 mb-2">
                                    Personal Information
                                </h3>
                                <p>
                                    When you book a service or submit a contact form, we may
                                    collect your name, email address, phone number, mailing address
                                    or ZIP code, vehicle information (make, model, year, color),
                                    and service preferences.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-display text-lg font-semibold text-ivory-200 mb-2">
                                    Automatically Collected Information
                                </h3>
                                <p>
                                    When you visit our website, we may automatically collect
                                    certain information including your IP address, browser type,
                                    operating system, referring URLs, and browsing behavior on our
                                    site through cookies and similar tracking technologies.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            3. How We Use Your Information
                        </h2>
                        <ul className="font-body text-ivory-300 leading-relaxed space-y-2 list-disc list-inside">
                            <li>To provide and manage our detailing services</li>
                            <li>To process and confirm your bookings</li>
                            <li>To communicate with you about your appointments</li>
                            <li>To send service reminders and follow-up communications</li>
                            <li>To improve our website and services</li>
                            <li>To respond to your inquiries and requests</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            4. Information Sharing
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            We do not sell, trade, or rent your personal information to third
                            parties. We may share your information with trusted service
                            providers who assist us in operating our website and conducting
                            our business, provided those parties agree to keep your
                            information confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            5. Data Security
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            We implement appropriate technical and organizational measures to
                            protect your personal information against unauthorized access,
                            alteration, disclosure, or destruction. However, no method of
                            transmission over the Internet is 100% secure, and we cannot
                            guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            6. Cookies
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Our website uses cookies and similar technologies to enhance your
                            browsing experience, analyze site traffic, and personalize content.
                            You can control cookie preferences through your browser settings.
                            Disabling cookies may affect certain functionality of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            7. Your Rights
                        </h2>
                        <div className="font-body text-ivory-300 leading-relaxed space-y-3">
                            <p>Depending on your jurisdiction, you may have the right to:</p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Opt out of marketing communications</li>
                                <li>Object to processing of your information</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us using the
                                information provided below.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            8. Third-Party Links
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Our website may contain links to third-party websites. We are not
                            responsible for the privacy practices or content of those sites. We
                            encourage you to review the privacy policies of any third-party
                            sites you visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            9. Children&apos;s Privacy
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            Our services are not directed to individuals under the age of 18.
                            We do not knowingly collect personal information from children. If
                            we learn we have collected information from a child, we will take
                            steps to delete that information promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            10. Changes to This Policy
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            We may update this Privacy Policy from time to time. Changes will
                            be posted on this page with an updated revision date. We encourage
                            you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold text-ivory-100 mb-4">
                            11. Contact Us
                        </h2>
                        <p className="font-body text-ivory-300 leading-relaxed">
                            If you have questions about this Privacy Policy or our data
                            practices, please contact us at:{" "}
                            {/* PLACEHOLDER: Replace with real email */}
                            <a
                                href="mailto:info@torvani.com"
                                className="text-gold-400 hover:text-gold-300 transition-colors"
                            >
                                info@torvani.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
