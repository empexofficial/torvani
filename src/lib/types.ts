// ============================================
// Torvani — Type Definitions
// ============================================

export interface LeadData {
    name: string;
    phone: string;
    email: string;
    preferredContact: string;
    zipCode: string;
    preferredDate: string;
    preferredTime: string;
    // Context from earlier steps
    serviceCategory: string;
    vehicleYear: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleColor: string;
    vehicleSize: string;
    vehicleCondition: string;
    vehicleNotes?: string;
}

export interface BookingData extends LeadData {
    packageName: string;
    addOns: string[];
    estimatedDuration: string;
    estimatedPrice: string;
    appointmentDate: string;
    appointmentTime: string;
}

export interface VehicleInfo {
    year: string;
    make: string;
    model: string;
    color: string;
    size: string;
    condition: string;
    notes?: string;
}

// Booking form state
export interface BookingFormState {
    // Step 1
    serviceCategory: string;
    // Step 2
    vehicleYear: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleColor: string;
    vehicleSize: string;
    vehicleCondition: string;
    vehicleNotes: string;
    // Step 3
    name: string;
    phone: string;
    email: string;
    preferredContact: string;
    zipCode: string;
    preferredDate: string;
    preferredTime: string;
    // Step 4
    packageName: string;
    selectedAddOns: string[];
    // Step 5
    appointmentDate: string;
    appointmentTime: string;
    // Meta
    currentStep: number;
    leadCaptured: boolean;
    bookingCompleted: boolean;
}

export const initialBookingState: BookingFormState = {
    serviceCategory: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleColor: "",
    vehicleSize: "",
    vehicleCondition: "",
    vehicleNotes: "",
    name: "",
    phone: "",
    email: "",
    preferredContact: "",
    zipCode: "",
    preferredDate: "",
    preferredTime: "",
    packageName: "",
    selectedAddOns: [],
    appointmentDate: "",
    appointmentTime: "",
    currentStep: 1,
    leadCaptured: false,
    bookingCompleted: false,
};
