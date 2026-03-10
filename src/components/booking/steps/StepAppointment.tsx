"use client";

import { useState, useMemo } from "react";
import { BookingFormState } from "@/lib/types";
import { mockAvailability } from "@/lib/data";
import Button from "@/components/ui/Button";

interface StepAppointmentProps {
    formState: BookingFormState;
    updateForm: (updates: Partial<BookingFormState>) => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function StepAppointment({
    formState,
    updateForm,
    onNext,
    onPrev,
}: StepAppointmentProps) {
    const [selectedDate, setSelectedDate] = useState(
        formState.appointmentDate || ""
    );
    const [selectedTime, setSelectedTime] = useState(
        formState.appointmentTime || ""
    );

    // Generate next 30 days of available dates
    // TODO: Replace with real availability API integration
    const availableDates = useMemo(() => {
        const dates: string[] = [];
        const today = new Date();
        for (let i = 1; i <= mockAvailability.advanceBookingDays; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            if (!mockAvailability.blockedDays.includes(date.getDay())) {
                dates.push(date.toISOString().split("T")[0]);
            }
        }
        return dates;
    }, []);

    const handleContinue = () => {
        if (selectedDate && selectedTime) {
            updateForm({
                appointmentDate: selectedDate,
                appointmentTime: selectedTime,
            });
            onNext();
        }
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr + "T12:00:00");
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory-50 mb-3">
                    Schedule Your Appointment
                </h2>
                <p className="font-body text-ivory-400">
                    Select your preferred date and time.
                </p>
            </div>

            {/* Date Selection */}
            <div className="mb-10">
                <h3 className="font-display text-lg font-bold text-ivory-100 mb-4">
                    Select Date
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-[300px] overflow-y-auto pr-2">
                    {availableDates.slice(0, 30).map((date) => (
                        <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`p-3 text-center transition-all duration-200 cursor-pointer ${selectedDate === date
                                    ? "gold-gradient-bg text-obsidian font-semibold"
                                    : "glass-card glass-card-hover"
                                }`}
                        >
                            <span className="font-body text-xs block">
                                {formatDate(date)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
                <div className="mb-10">
                    <h3 className="font-display text-lg font-bold text-ivory-100 mb-4">
                        Select Time
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {mockAvailability.availableSlots.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => setSelectedTime(slot)}
                                className={`p-3 text-center transition-all duration-200 cursor-pointer ${selectedTime === slot
                                        ? "gold-gradient-bg text-obsidian font-semibold"
                                        : "glass-card glass-card-hover"
                                    }`}
                            >
                                <span className="font-body text-sm">{slot}</span>
                            </button>
                        ))}
                    </div>
                    <p className="font-body text-xs text-ivory-400/40 mt-3">
                        {/* TODO: Connect to real availability backend for dynamic slot availability */}
                        Times shown are approximate. Exact scheduling will be confirmed.
                    </p>
                </div>
            )}

            <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={onPrev}>
                    Back
                </Button>
                <Button
                    onClick={handleContinue}
                    disabled={!selectedDate || !selectedTime}
                >
                    Continue to Review
                </Button>
            </div>
        </div>
    );
}
