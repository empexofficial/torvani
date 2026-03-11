import { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
    title: "Book Your Detail",
    description:
        "Book your premium automotive detailing or ceramic coating appointment with Torvani. Simple, fast, and elegant booking experience.",
};

export default function BookingPage() {
    return (
        <div className="page-transition pt-28 pb-24 md:pt-36 md:pb-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-3xl font-colbiac text-gold-400 mb-4 lowercase first-letter:uppercase">
                        Reserve Your Appointment
                    </span>
                    <div className="gold-line mx-auto mb-6" />
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-50 mb-4">
                        Book Your Detail
                    </h1>
                    <p className="font-body text-ivory-400 text-lg max-w-xl mx-auto">
                        Complete the steps below to schedule your premium detailing
                        experience. Your information is secure and will only be used by
                        Torvani.
                    </p>
                </div>

                {/* Booking Form */}
                <BookingForm />
            </div>
        </div>
    );
}
