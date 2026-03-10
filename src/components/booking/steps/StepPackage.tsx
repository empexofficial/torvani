"use client";

import { BookingFormState } from "@/lib/types";
import {
    detailingPackages,
    ceramicPackages,
    addOns,
} from "@/lib/data";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

interface StepPackageProps {
    formState: BookingFormState;
    updateForm: (updates: Partial<BookingFormState>) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function StepPackage({
    formState,
    updateForm,
    onNext,
    onPrev,
}: StepPackageProps) {
    const packages =
        formState.serviceCategory === "Ceramic Coating"
            ? ceramicPackages
            : detailingPackages;

    const handleSelectPackage = (packageName: string) => {
        updateForm({ packageName });
    };

    const handleToggleAddOn = (addOnId: string) => {
        const current = formState.selectedAddOns || [];
        const updated = current.includes(addOnId)
            ? current.filter((id) => id !== addOnId)
            : [...current, addOnId];
        updateForm({ selectedAddOns: updated });
    };

    const handleContinue = () => {
        if (formState.packageName) {
            onNext();
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-3">
                    Choose Your Package
                </h2>
                <p className="font-body text-ivory-400">
                    Select the level of care that&apos;s right for your vehicle.
                </p>
            </div>

            {/* Package Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {packages.map((pkg) => (
                    <button
                        key={pkg.name}
                        onClick={() => handleSelectPackage(pkg.name)}
                        className={`text-left p-6 transition-all duration-300 cursor-pointer relative ${formState.packageName === pkg.name
                                ? "glass-card border-gold-500/40 shadow-gold"
                                : "glass-card glass-card-hover"
                            }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-px left-1/2 -translate-x-1/2">
                                <div className="gold-gradient-bg px-4 py-1 text-obsidian text-xs font-body font-bold tracking-wider uppercase">
                                    Popular
                                </div>
                            </div>
                        )}

                        <h3 className="font-display text-xl font-bold text-ivory-50 mb-1 mt-2">
                            {pkg.name}
                        </h3>
                        <p className="gold-gradient-text font-display text-2xl font-bold mb-3">
                            {pkg.price}
                        </p>
                        <p className="font-body text-xs text-ivory-400 leading-relaxed mb-4">
                            {pkg.description}
                        </p>

                        <ul className="space-y-2">
                            {pkg.features.slice(0, 5).map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                                    <span className="font-body text-xs text-ivory-300">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                            {pkg.features.length > 5 && (
                                <li className="font-body text-xs text-gold-400/60">
                                    + {pkg.features.length - 5} more
                                </li>
                            )}
                        </ul>

                        {formState.packageName === pkg.name && (
                            <div className="absolute top-4 right-4 w-6 h-6 rounded-full gold-gradient-bg flex items-center justify-center">
                                <Check className="w-4 h-4 text-obsidian" />
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Add-Ons */}
            <div className="mb-10">
                <h3 className="font-display text-xl font-bold text-ivory-100 mb-4">
                    Optional Add-Ons
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {addOns.map((addOn) => {
                        const isSelected = (formState.selectedAddOns || []).includes(addOn.id);
                        return (
                            <button
                                key={addOn.id}
                                onClick={() => handleToggleAddOn(addOn.id)}
                                className={`flex items-center justify-between p-4 transition-all duration-300 cursor-pointer ${isSelected
                                        ? "glass-card border-gold-500/30"
                                        : "glass-card glass-card-hover"
                                    }`}
                            >
                                <span className="font-body text-sm text-ivory-200">
                                    {addOn.name}
                                </span>
                                <div className="flex items-center gap-3">
                                    <span className="font-body text-sm text-gold-400 font-semibold">
                                        {addOn.price}
                                    </span>
                                    <div
                                        className={`w-5 h-5 rounded-sm flex items-center justify-center transition-all ${isSelected
                                                ? "gold-gradient-bg"
                                                : "border border-white/20"
                                            }`}
                                    >
                                        {isSelected && (
                                            <Check className="w-3.5 h-3.5 text-obsidian" />
                                        )}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={onPrev}>
                    Back
                </Button>
                <Button
                    onClick={handleContinue}
                    disabled={!formState.packageName}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
