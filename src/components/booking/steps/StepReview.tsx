"use client";

import { useState } from "react";
import { BookingFormState } from "@/lib/types";
import { addOns } from "@/lib/data";
import Button from "@/components/ui/Button";

interface StepReviewProps {
    formState: BookingFormState;
    onPrev: () => void;
    onSubmit: () => Promise<boolean>;
}

export default function StepReview({
    formState,
    onPrev,
    onSubmit,
}: StepReviewProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const selectedAddOnNames = (formState.selectedAddOns || []).map((id) => {
        const addOn = addOns.find((a) => a.id === id);
        return addOn ? `${addOn.name} (${addOn.price})` : id;
    });

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError("");

        const success = await onSubmit();

        if (!success) {
            setError(
                "There was an issue submitting your booking. Please try again or contact us directly."
            );
            setIsSubmitting(false);
        }
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "Not selected";
        const date = new Date(dateStr + "T12:00:00");
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-3">
                    Review Your Booking
                </h2>
                <p className="font-body text-ivory-400">
                    Please confirm all details before finalizing your appointment.
                </p>
            </div>

            <div className="space-y-6">
                {/* Service */}
                <div className="glass-card p-6">
                    <h3 className="font-display text-sm font-bold tracking-wider uppercase text-gold-400 mb-4">
                        Service
                    </h3>
                    <div className="space-y-2 font-body text-sm">
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Category</span>
                            <span className="text-ivory-100">{formState.serviceCategory}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Package</span>
                            <span className="text-ivory-100">{formState.packageName}</span>
                        </div>
                        {selectedAddOnNames.length > 0 && (
                            <div className="flex justify-between">
                                <span className="text-ivory-400">Add-Ons</span>
                                <span className="text-ivory-100 text-right max-w-[60%]">
                                    {selectedAddOnNames.join(", ")}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Vehicle */}
                <div className="glass-card p-6">
                    <h3 className="font-display text-sm font-bold tracking-wider uppercase text-gold-400 mb-4">
                        Vehicle
                    </h3>
                    <div className="space-y-2 font-body text-sm">
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Vehicle</span>
                            <span className="text-ivory-100">
                                {formState.vehicleYear} {formState.vehicleMake}{" "}
                                {formState.vehicleModel}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Color</span>
                            <span className="text-ivory-100">{formState.vehicleColor}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Size / Type</span>
                            <span className="text-ivory-100">{formState.vehicleSize}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Condition</span>
                            <span className="text-ivory-100">{formState.vehicleCondition}</span>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="glass-card p-6">
                    <h3 className="font-display text-sm font-bold tracking-wider uppercase text-gold-400 mb-4">
                        Contact
                    </h3>
                    <div className="space-y-2 font-body text-sm">
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Name</span>
                            <span className="text-ivory-100">{formState.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Phone</span>
                            <span className="text-ivory-100">{formState.phone}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Email</span>
                            <span className="text-ivory-100">{formState.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">ZIP Code</span>
                            <span className="text-ivory-100">{formState.zipCode}</span>
                        </div>
                    </div>
                </div>

                {/* Appointment */}
                <div className="glass-card p-6">
                    <h3 className="font-display text-sm font-bold tracking-wider uppercase text-gold-400 mb-4">
                        Appointment
                    </h3>
                    <div className="space-y-2 font-body text-sm">
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Date</span>
                            <span className="text-ivory-100">
                                {formatDate(formState.appointmentDate)}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-ivory-400">Time</span>
                            <span className="text-ivory-100">{formState.appointmentTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {error && (
                <div className="mt-6 p-4 border border-red-500/30 bg-red-500/5 text-red-400 font-body text-sm">
                    {error}
                </div>
            )}

            <div className="flex justify-between pt-8">
                <Button variant="ghost" onClick={onPrev}>
                    Back
                </Button>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Finalizing..." : "Confirm Booking"}
                </Button>
            </div>

            <p className="text-center font-body text-xs text-ivory-400/40 mt-6">
                By confirming, you agree to our{" "}
                <a
                    href="/terms-of-service"
                    className="text-gold-400/60 hover:text-gold-400 transition-colors"
                >
                    Terms of Service
                </a>{" "}
                and{" "}
                <a
                    href="/privacy-policy"
                    className="text-gold-400/60 hover:text-gold-400 transition-colors"
                >
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}
