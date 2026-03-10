"use client";

import { BookingFormState } from "@/lib/types";
import { services } from "@/lib/data";
import Button from "@/components/ui/Button";
import { Sparkles, Shield } from "lucide-react";

interface StepServiceProps {
    formState: BookingFormState;
    updateForm: (updates: Partial<BookingFormState>) => void;
    onNext: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
    sparkles: <Sparkles className="w-8 h-8" />,
    shield: <Shield className="w-8 h-8" />,
};

export default function StepService({
    formState,
    updateForm,
    onNext,
}: StepServiceProps) {
    const handleSelect = (serviceTitle: string) => {
        updateForm({ serviceCategory: serviceTitle });
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-3">
                    Choose Your Service
                </h2>
                <p className="font-body text-ivory-400">
                    Select the type of service you&apos;re interested in.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => handleSelect(service.title)}
                        className={`text-left p-8 transition-all duration-300 cursor-pointer ${formState.serviceCategory === service.title
                                ? "glass-card border-gold-500/40 shadow-gold"
                                : "glass-card glass-card-hover"
                            }`}
                    >
                        <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300 ${formState.serviceCategory === service.title
                                    ? "gold-gradient-bg text-obsidian"
                                    : "bg-white/5 text-gold-400"
                                }`}
                        >
                            {iconMap[service.icon] || <Sparkles className="w-8 h-8" />}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-ivory-50 mb-3">
                            {service.title}
                        </h3>
                        <p className="font-body text-sm text-ivory-400 leading-relaxed">
                            {service.shortDescription}
                        </p>
                    </button>
                ))}
            </div>

            <div className="flex justify-end">
                <Button
                    onClick={onNext}
                    disabled={!formState.serviceCategory}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
