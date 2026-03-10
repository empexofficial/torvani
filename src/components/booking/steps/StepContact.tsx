"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingFormState } from "@/lib/types";
import { contactInfoSchema, ContactInfoData } from "@/lib/schemas";
import { contactMethods, mockAvailability } from "@/lib/data";
import Button from "@/components/ui/Button";

interface StepContactProps {
    formState: BookingFormState;
    updateForm: (updates: Partial<BookingFormState>) => void;
    onNext: () => void;
    onPrev: () => void;
    onSubmitLead: () => Promise<boolean>;
}

export default function StepContact({
    formState,
    updateForm,
    onNext,
    onPrev,
    onSubmitLead,
}: StepContactProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [leadSaved, setLeadSaved] = useState(formState.leadCaptured);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactInfoData>({
        resolver: zodResolver(contactInfoSchema),
        defaultValues: {
            name: formState.name,
            phone: formState.phone,
            email: formState.email,
            preferredContact: formState.preferredContact,
            zipCode: formState.zipCode,
            preferredDate: formState.preferredDate,
            preferredTime: formState.preferredTime,
        },
    });

    const onSubmit = async (data: ContactInfoData) => {
        updateForm(data);
        setIsSubmitting(true);

        // Submit lead data
        const success = await onSubmitLead();

        setIsSubmitting(false);

        if (success) {
            setLeadSaved(true);
            // Brief delay to show the success message before moving on
            setTimeout(() => {
                onNext();
            }, 1500);
        } else {
            // Even if the API fails, we can still proceed (data is saved locally)
            onNext();
        }
    };

    const inputClasses =
        "w-full bg-white/5 border border-white/10 px-4 py-3.5 font-body text-ivory-100 placeholder-ivory-400/40 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all duration-300";

    const labelClasses = "block font-body text-sm text-ivory-300 mb-2";

    const errorClasses = "text-red-400 text-xs font-body mt-1";

    if (leadSaved && !formState.leadCaptured) {
        return (
            <div className="max-w-2xl mx-auto text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient-bg flex items-center justify-center">
                    <svg
                        className="w-8 h-8 text-obsidian"
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
                <h3 className="font-display text-2xl font-bold text-ivory-50 mb-3">
                    Your Details Have Been Saved
                </h3>
                <p className="font-body text-ivory-400 mb-2">
                    Continue to finalize your booking and select your preferred package and
                    appointment time.
                </p>
                <div className="w-8 h-8 mx-auto mt-6 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-3">
                    Contact Information
                </h2>
                <p className="font-body text-ivory-400">
                    How can we reach you? Your information is secure and will only be used
                    by Torvani.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className={labelClasses}>Full Name *</label>
                    <input
                        {...register("name")}
                        placeholder="Your full name"
                        className={inputClasses}
                    />
                    {errors.name && (
                        <p className={errorClasses}>{errors.name.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Phone *</label>
                        <input
                            {...register("phone")}
                            placeholder="(555) 123-4567"
                            type="tel"
                            className={inputClasses}
                        />
                        {errors.phone && (
                            <p className={errorClasses}>{errors.phone.message}</p>
                        )}
                    </div>
                    <div>
                        <label className={labelClasses}>Email *</label>
                        <input
                            {...register("email")}
                            placeholder="you@email.com"
                            type="email"
                            className={inputClasses}
                        />
                        {errors.email && (
                            <p className={errorClasses}>{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Preferred Contact Method *</label>
                        <select {...register("preferredContact")} className={inputClasses}>
                            <option value="">Select method</option>
                            {contactMethods.map((method) => (
                                <option key={method} value={method}>
                                    {method}
                                </option>
                            ))}
                        </select>
                        {errors.preferredContact && (
                            <p className={errorClasses}>{errors.preferredContact.message}</p>
                        )}
                    </div>
                    <div>
                        <label className={labelClasses}>ZIP Code *</label>
                        <input
                            {...register("zipCode")}
                            placeholder="12345"
                            maxLength={10}
                            className={inputClasses}
                        />
                        {errors.zipCode && (
                            <p className={errorClasses}>{errors.zipCode.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Preferred Date *</label>
                        <input
                            {...register("preferredDate")}
                            type="date"
                            className={inputClasses}
                        />
                        {errors.preferredDate && (
                            <p className={errorClasses}>{errors.preferredDate.message}</p>
                        )}
                    </div>
                    <div>
                        <label className={labelClasses}>Preferred Time *</label>
                        <select {...register("preferredTime")} className={inputClasses}>
                            <option value="">Select time</option>
                            {mockAvailability.availableSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        {errors.preferredTime && (
                            <p className={errorClasses}>{errors.preferredTime.message}</p>
                        )}
                    </div>
                </div>

                <div className="flex justify-between pt-4">
                    <Button variant="ghost" onClick={onPrev}>
                        Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save & Continue"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
