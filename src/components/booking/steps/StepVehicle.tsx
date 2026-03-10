"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingFormState } from "@/lib/types";
import { vehicleInfoSchema, VehicleInfoData } from "@/lib/schemas";
import { vehicleSizes, vehicleConditions } from "@/lib/data";
import Button from "@/components/ui/Button";

interface StepVehicleProps {
    formState: BookingFormState;
    updateForm: (updates: Partial<BookingFormState>) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function StepVehicle({
    formState,
    updateForm,
    onNext,
    onPrev,
}: StepVehicleProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VehicleInfoData>({
        resolver: zodResolver(vehicleInfoSchema),
        defaultValues: {
            vehicleYear: formState.vehicleYear,
            vehicleMake: formState.vehicleMake,
            vehicleModel: formState.vehicleModel,
            vehicleColor: formState.vehicleColor,
            vehicleSize: formState.vehicleSize,
            vehicleCondition: formState.vehicleCondition,
            vehicleNotes: formState.vehicleNotes,
        },
    });

    const onSubmit = (data: VehicleInfoData) => {
        updateForm(data);
        onNext();
    };

    const inputClasses =
        "w-full bg-white/5 border border-white/10 px-4 py-3.5 font-body text-ivory-100 placeholder-ivory-400/40 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all duration-300";

    const labelClasses = "block font-body text-sm text-ivory-300 mb-2";

    const errorClasses = "text-red-400 text-xs font-body mt-1";

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-3">
                    Vehicle Information
                </h2>
                <p className="font-body text-ivory-400">
                    Tell us about your vehicle so we can prepare the best service.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Year *</label>
                        <input
                            {...register("vehicleYear")}
                            placeholder="2024"
                            maxLength={4}
                            className={inputClasses}
                        />
                        {errors.vehicleYear && (
                            <p className={errorClasses}>{errors.vehicleYear.message}</p>
                        )}
                    </div>
                    <div>
                        <label className={labelClasses}>Make *</label>
                        <input
                            {...register("vehicleMake")}
                            placeholder="Porsche"
                            className={inputClasses}
                        />
                        {errors.vehicleMake && (
                            <p className={errorClasses}>{errors.vehicleMake.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Model *</label>
                        <input
                            {...register("vehicleModel")}
                            placeholder="911 GT3"
                            className={inputClasses}
                        />
                        {errors.vehicleModel && (
                            <p className={errorClasses}>{errors.vehicleModel.message}</p>
                        )}
                    </div>
                    <div>
                        <label className={labelClasses}>Color *</label>
                        <input
                            {...register("vehicleColor")}
                            placeholder="Guards Red"
                            className={inputClasses}
                        />
                        {errors.vehicleColor && (
                            <p className={errorClasses}>{errors.vehicleColor.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Vehicle Size / Type *</label>
                    <select {...register("vehicleSize")} className={inputClasses}>
                        <option value="">Select size / type</option>
                        {vehicleSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    {errors.vehicleSize && (
                        <p className={errorClasses}>{errors.vehicleSize.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClasses}>Current Condition *</label>
                    <select {...register("vehicleCondition")} className={inputClasses}>
                        <option value="">Select condition</option>
                        {vehicleConditions.map((condition) => (
                            <option key={condition} value={condition}>
                                {condition}
                            </option>
                        ))}
                    </select>
                    {errors.vehicleCondition && (
                        <p className={errorClasses}>{errors.vehicleCondition.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClasses}>
                        Additional Notes{" "}
                        <span className="text-ivory-400/40">(Optional)</span>
                    </label>
                    <textarea
                        {...register("vehicleNotes")}
                        placeholder="Any specific concerns, areas of focus, or details we should know about..."
                        rows={3}
                        className={`${inputClasses} resize-none`}
                    />
                </div>

                {/* Photo upload placeholder */}
                <div>
                    <label className={labelClasses}>
                        Vehicle Photos{" "}
                        <span className="text-ivory-400/40">(Optional)</span>
                    </label>
                    <div className="border border-dashed border-white/10 p-8 text-center hover:border-gold-500/30 transition-colors duration-300">
                        <p className="font-body text-sm text-ivory-400/60 mb-2">
                            Drag & drop photos here, or click to upload
                        </p>
                        <p className="font-body text-xs text-ivory-400/30">
                            {/* TODO: Implement actual file upload functionality */}
                            Photo upload will be available in a future update
                        </p>
                    </div>
                </div>

                <div className="flex justify-between pt-4">
                    <Button variant="ghost" onClick={onPrev}>
                        Back
                    </Button>
                    <Button type="submit">
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
}
