import { NextResponse } from "next/server";

/**
 * POST /api/leads
 *
 * Handles lead capture from the booking form (Step 3).
 * This is the midpoint conversion event where the visitor becomes a lead.
 *
 * TODO: Integration points for production:
 * - Send data to CRM (e.g., HubSpot, Salesforce, GoHighLevel)
 * - Trigger email notification to business owner
 * - Send confirmation email to the lead
 * - Push to marketing automation (e.g., Mailchimp, ActiveCampaign)
 * - Log to analytics platform
 */
export async function POST(request: Request) {
    try {
        const leadData = await request.json();

        // Validate required fields
        const requiredFields = ["name", "email", "phone", "serviceCategory"];
        for (const field of requiredFields) {
            if (!leadData[field]) {
                return NextResponse.json(
                    { success: false, error: `Missing required field: ${field}` },
                    { status: 400 }
                );
            }
        }

        // TODO: Store lead in database
        // Example: await db.leads.create({ data: leadData });

        // TODO: Send notification email to business
        // Example: await sendEmail({
        //   to: 'leads@torvani.com',
        //   subject: `New Lead: ${leadData.name} - ${leadData.serviceCategory}`,
        //   body: formatLeadEmail(leadData),
        // });

        // TODO: Send confirmation to customer
        // Example: await sendEmail({
        //   to: leadData.email,
        //   subject: 'Thank you for your interest in Torvani',
        //   body: formatConfirmationEmail(leadData),
        // });

        // TODO: Push to CRM
        // Example: await crm.createContact(leadData);

        console.log("[Lead Captured]", {
            name: leadData.name,
            email: leadData.email,
            service: leadData.serviceCategory,
            vehicle: `${leadData.vehicleYear} ${leadData.vehicleMake} ${leadData.vehicleModel}`,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({
            success: true,
            message: "Lead captured successfully",
            leadId: `lead_${Date.now()}`, // Placeholder ID
        });
    } catch (error) {
        console.error("[Lead Error]", error);
        return NextResponse.json(
            { success: false, error: "Failed to process lead" },
            { status: 500 }
        );
    }
}
