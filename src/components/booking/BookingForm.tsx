"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingFormState, initialBookingState } from "@/lib/types";
import StepService from "./steps/StepService";
import StepVehicle from "./steps/StepVehicle";
import StepContact from "./steps/StepContact";
import StepPackage from "./steps/StepPackage";
import StepAppointment from "./steps/StepAppointment";
import StepReview from "./steps/StepReview";

const STORAGE_KEY = "torvani-booking";

const steps = [
    { number: 1, label: "Service" },
    { number: 2, label: "Vehicle" },
    { number: 3, label: "Contact" },
    { number: 4, label: "Package" },
    { number: 5, label: "Schedule" },
    { number: 6, label: "Review" },
];

export default function BookingForm() {
    const [formState, setFormState] = useState<BookingFormState>(initialBookingState);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                setFormState({ ...initialBookingState, ...parsed });
            }
        } catch {
            // If localStorage parse fails, use defaults
        }
        setIsLoaded(true);
    }, []);

    // Save to localStorage on state change
    useEffect(() => {
        if (isLoaded) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
            } catch {
                // localStorage may be full or unavailable
            }
        }
    }, [formState, isLoaded]);

    const updateForm = useCallback((updates: Partial<BookingFormState>) => {
        setFormState((prev) => ({ ...prev, ...updates }));
    }, []);

    const goToStep = useCallback((step: number) => {
        setFormState((prev) => ({ ...prev, currentStep: step }));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const nextStep = useCallback(() => {
        goToStep(formState.currentStep + 1);
    }, [formState.currentStep, goToStep]);

    const prevStep = useCallback(() => {
        goToStep(formState.currentStep - 1);
    }, [formState.currentStep, goToStep]);

    // Analytics event placeholders
    const trackEvent = useCallback((eventName: string, data?: Record<string, unknown>) => {
        // TODO: Integrate with your analytics platform (e.g., Google Analytics, Mixpanel)
        console.log(`[Analytics] ${eventName}`, data);
    }, []);

    // Lead submission
    const submitLead = useCallback(async () => {
        trackEvent("lead_captured", {
            service: formState.serviceCategory,
            vehicle: `${formState.vehicleYear} ${formState.vehicleMake} ${formState.vehicleModel}`,
        });

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formState.name,
                    phone: formState.phone,
                    email: formState.email,
                    preferredContact: formState.preferredContact,
                    zipCode: formState.zipCode,
                    preferredDate: formState.preferredDate,
                    preferredTime: formState.preferredTime,
                    serviceCategory: formState.serviceCategory,
                    vehicleYear: formState.vehicleYear,
                    vehicleMake: formState.vehicleMake,
                    vehicleModel: formState.vehicleModel,
                    vehicleColor: formState.vehicleColor,
                    vehicleSize: formState.vehicleSize,
                    vehicleCondition: formState.vehicleCondition,
                    vehicleNotes: formState.vehicleNotes,
                }),
            });

            if (response.ok) {
                updateForm({ leadCaptured: true });
                return true;
            }
            return false;
        } catch {
            return false;
        }
    }, [formState, trackEvent, updateForm]);

    // Booking submission
    const submitBooking = useCallback(async () => {
        trackEvent("booking_completed", {
            service: formState.serviceCategory,
            package: formState.packageName,
            vehicle: `${formState.vehicleYear} ${formState.vehicleMake} ${formState.vehicleModel}`,
        });

        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                updateForm({ bookingCompleted: true });
                localStorage.removeItem(STORAGE_KEY);
                return true;
            }
            return false;
        } catch {
            return false;
        }
    }, [formState, trackEvent, updateForm]);

    // Track booking started — must be before any conditional returns (Rules of Hooks)
    useEffect(() => {
        if (isLoaded && formState.currentStep === 1) {
            trackEvent("booking_started");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">
            {/* Step Indicator */}
            {!formState.bookingCompleted && (
                <div className="mb-12">
                    <div className="flex items-center justify-between max-w-3xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center flex-1 last:flex-0">
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-display font-bold transition-all duration-300 ${formState.currentStep > step.number
                                            ? "gold-gradient-bg text-obsidian"
                                            : formState.currentStep === step.number
                                                ? "border-2 border-gold-400 text-gold-400"
                                                : "border border-white/20 text-ivory-400/40"
                                            }`}
                                    >
                                        {formState.currentStep > step.number ? "✓" : step.number}
                                    </div>
                                    <span
                                        className={`mt-2 text-xs font-body tracking-wider uppercase hidden sm:block ${formState.currentStep >= step.number
                                            ? "text-gold-400"
                                            : "text-ivory-400/40"
                                            }`}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex-1 mx-2 mt-[-1.25rem] sm:mt-[-0.5rem]">
                                        <div
                                            className={`h-px transition-all duration-500 ${formState.currentStep > step.number
                                                ? "gold-gradient-bg"
                                                : "bg-white/10"
                                                }`}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Step Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={formState.bookingCompleted ? "complete" : formState.currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {formState.currentStep === 1 && (
                        <StepService
                            formState={formState}
                            updateForm={updateForm}
                            onNext={nextStep}
                        />
                    )}
                    {formState.currentStep === 2 && (
                        <StepVehicle
                            formState={formState}
                            updateForm={updateForm}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    )}
                    {formState.currentStep === 3 && (
                        <StepContact
                            formState={formState}
                            updateForm={updateForm}
                            onNext={nextStep}
                            onPrev={prevStep}
                            onSubmitLead={submitLead}
                        />
                    )}
                    {formState.currentStep === 4 && (
                        <StepPackage
                            formState={formState}
                            updateForm={updateForm}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    )}
                    {formState.currentStep === 5 && (
                        <StepAppointment
                            formState={formState}
                            updateForm={updateForm}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    )}
                    {formState.currentStep === 6 && !formState.bookingCompleted && (
                        <StepReview
                            formState={formState}
                            onPrev={prevStep}
                            onSubmit={submitBooking}
                        />
                    )}
                    {formState.bookingCompleted && (
                        <BookingConfirmation formState={formState} />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function BookingConfirmation({ formState }: { formState: BookingFormState }) {
    return (
        <div className="text-center py-16 max-w-2xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full gold-gradient-bg flex items-center justify-center">
                <svg
                    className="w-10 h-10 text-obsidian"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-4">
                Booking Confirmed
            </h2>
            <p className="font-body text-ivory-300 text-lg mb-8 leading-relaxed">
                Thank you, {formState.name}. Your {formState.packageName} appointment
                has been confirmed for {formState.appointmentDate} at{" "}
                {formState.appointmentTime}. We&apos;ll be in touch shortly with
                additional details.
            </p>
            <div className="glass-card p-8 text-left mb-8">
                <h3 className="font-display text-lg font-bold text-ivory-100 mb-4">
                    Booking Summary
                </h3>
                <div className="space-y-3 font-body text-sm">
                    <div className="flex justify-between">
                        <span className="text-ivory-400">Service</span>
                        <span className="text-ivory-200">{formState.serviceCategory}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-ivory-400">Package</span>
                        <span className="text-ivory-200">{formState.packageName}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-ivory-400">Vehicle</span>
                        <span className="text-ivory-200">
                            {formState.vehicleYear} {formState.vehicleMake}{" "}
                            {formState.vehicleModel}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-ivory-400">Date & Time</span>
                        <span className="text-ivory-200">
                            {formState.appointmentDate} at {formState.appointmentTime}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-ivory-400">Contact</span>
                        <span className="text-ivory-200">{formState.email}</span>
                    </div>
                </div>
            </div>
            <p className="font-body text-xs text-ivory-400/60">
                A confirmation will be sent to {formState.email}. If you need to make
                changes, please contact us directly.
            </p>
        </div>
    );
}
