import { z } from "zod";

// Step 1: Service Selection
export const serviceSelectionSchema = z.object({
    serviceCategory: z.string().min(1, "Please select a service"),
});

// Step 2: Vehicle Information
export const vehicleInfoSchema = z.object({
    vehicleYear: z
        .string()
        .min(4, "Enter a valid year")
        .max(4, "Enter a valid year")
        .regex(/^\d{4}$/, "Enter a valid 4-digit year"),
    vehicleMake: z.string().min(1, "Vehicle make is required"),
    vehicleModel: z.string().min(1, "Vehicle model is required"),
    vehicleColor: z.string().min(1, "Vehicle color is required"),
    vehicleSize: z.string().min(1, "Please select a vehicle size"),
    vehicleCondition: z.string().min(1, "Please select vehicle condition"),
    vehicleNotes: z.string().optional(),
});

// Step 3: Contact / Lead Capture
export const contactInfoSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z
        .string()
        .min(10, "Enter a valid phone number")
        .regex(/^[\d\s\-\(\)\+]+$/, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
    preferredContact: z.string().min(1, "Select a preferred contact method"),
    zipCode: z
        .string()
        .min(5, "Enter a valid ZIP code")
        .regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"),
    preferredDate: z.string().min(1, "Select a preferred date"),
    preferredTime: z.string().min(1, "Select a preferred time"),
});

// Step 4: Package Selection
export const packageSelectionSchema = z.object({
    packageName: z.string().min(1, "Please select a package"),
    selectedAddOns: z.array(z.string()).optional(),
});

// Step 5: Appointment
export const appointmentSchema = z.object({
    appointmentDate: z.string().min(1, "Please select an appointment date"),
    appointmentTime: z.string().min(1, "Please select an appointment time"),
});

export type ServiceSelectionData = z.infer<typeof serviceSelectionSchema>;
export type VehicleInfoData = z.infer<typeof vehicleInfoSchema>;
export type ContactInfoData = z.infer<typeof contactInfoSchema>;
export type PackageSelectionData = z.infer<typeof packageSelectionSchema>;
export type AppointmentData = z.infer<typeof appointmentSchema>;
