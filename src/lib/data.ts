// ============================================
// Torvani — Site-wide Data & Content
// ============================================

export interface Service {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    icon: string;
    href: string;
}

export interface Testimonial {
    id: string;
    name: string;
    vehicle: string;
    rating: number;
    quote: string;
    service: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    category: "exterior" | "interior" | "paint-correction" | "ceramic-coating";
    title: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface PackageTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
}

// ── Navigation ──
export const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Booking", href: "/booking" },
];

// ── Services ──
export const services: Service[] = [
    {
        id: "auto-detailing",
        title: "Auto Detailing",
        slug: "auto-detailing",
        shortDescription:
            "Meticulous interior and exterior detailing that restores your vehicle to showroom perfection. Every surface, every crevice — elevated.",
        icon: "sparkles",
        href: "/services/auto-detailing",
    },
    {
        id: "ceramic-coating",
        title: "Ceramic Coating",
        slug: "ceramic-coating",
        shortDescription:
            "Laboratory-grade ceramic protection that delivers unmatched gloss, hydrophobic performance, and long-term paint preservation.",
        icon: "shield",
        href: "/services/ceramic-coating",
    },
];

// ── Testimonials ──
export const testimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Marcus R.",
        vehicle: "2024 Porsche 911 GT3",
        rating: 5,
        quote:
            "Torvani transformed my GT3 into something beyond showroom condition. The attention to detail is obsessive — in the best possible way. I wouldn't trust anyone else with my vehicle.",
        service: "Auto Detailing",
    },
    {
        id: "t2",
        name: "Victoria L.",
        vehicle: "2025 Mercedes-AMG GT",
        rating: 5,
        quote:
            "The ceramic coating Torvani applied has been flawless for over a year. Water literally dances off the paint. My AMG looks better now than the day I bought it.",
        service: "Ceramic Coating",
    },
    {
        id: "t3",
        name: "James D.",
        vehicle: "2024 BMW M4 Competition",
        rating: 5,
        quote:
            "I've used premium detailing services across the country. Torvani is in a different league entirely. The craftsmanship, the communication, the result — all world-class.",
        service: "Auto Detailing",
    },
    {
        id: "t4",
        name: "Sophia K.",
        vehicle: "2025 Audi RS e-tron GT",
        rating: 5,
        quote:
            "From the moment I booked to the final reveal, every touchpoint felt premium. The ceramic coating gives my RS an incredible depth that catches light beautifully.",
        service: "Ceramic Coating",
    },
    {
        id: "t5",
        name: "Alexander M.",
        vehicle: "2024 Lamborghini Huracán",
        rating: 5,
        quote:
            "My Huracán deserves nothing less than perfection, and Torvani delivered exactly that. The paint correction work alone was worth every penny. Flawless execution.",
        service: "Auto Detailing",
    },
    {
        id: "t6",
        name: "Elena V.",
        vehicle: "2025 Range Rover Sport",
        rating: 5,
        quote:
            "Torvani's full detail and ceramic coating package is the best investment I've made for my Range Rover. Six months later, it still looks freshly detailed after every wash.",
        service: "Ceramic Coating",
    },
    {
        id: "t7",
        name: "David Chen",
        vehicle: "2024 Tesla Model S Plaid",
        rating: 5,
        quote:
            "The interior detail was extraordinary. Every surface was restored to perfection — leather, alcantara, trim, glass. It's like stepping into a brand new car.",
        service: "Auto Detailing",
    },
    {
        id: "t8",
        name: "Natasha P.",
        vehicle: "2025 Ferrari Roma",
        rating: 5,
        quote:
            "I flew Torvani out specifically for my Roma. The multi-stage paint correction followed by their flagship ceramic coating created a mirror finish that stops people in their tracks.",
        service: "Ceramic Coating",
    },
    {
        id: "t9",
        name: "Robert W.",
        vehicle: "2024 McLaren 750S",
        rating: 5,
        quote:
            "Torvani understands exotic cars. Their process is methodical, their products are the finest available, and their results speak for themselves. Absolutely elite service.",
        service: "Auto Detailing",
    },
];

// ── FAQ ──
export const homeFAQ: FAQItem[] = [
    {
        question: "What sets Torvani apart from other detailing services?",
        answer:
            "Torvani delivers an elevated detailing experience built on obsessive craftsmanship, premium-grade products, and a refined process designed for luxury and exotic vehicles. We treat every car as a masterpiece — because that's exactly what it is.",
    },
    {
        question: "How long does a typical detailing session take?",
        answer:
            "Our Essential Detail takes 4–6 hours, Signature Detail is a full-day service (8–10 hours), and our Grand Detail spans 2–3 days depending on the vehicle's condition and the level of correction required. We never rush perfection.",
    },
    {
        question: "Do you offer mobile or on-location detailing?",
        answer:
            "Yes. We offer premium mobile detailing for clients who prefer the convenience of on-location service. Our mobile unit is fully equipped with the same professional-grade tools and products used in our studio.",
    },
    {
        question: "What products do you use?",
        answer:
            "We exclusively use professional-grade products from leading manufacturers including Gtechniq, Gyeon, CarPro, and Rupes. Every product is selected for its performance, safety, and finish quality.",
    },
    {
        question: "Is ceramic coating worth the investment?",
        answer:
            "Absolutely. Ceramic coating provides years of protection against UV damage, chemical etching, bird droppings, and environmental contaminants while delivering a permanent hydrophobic finish and extraordinary gloss depth. It's the smartest long-term investment for your vehicle's appearance.",
    },
    {
        question: "How do I book an appointment?",
        answer:
            "You can book directly through our website using our premium booking system, or contact us by phone or email. We'll guide you through selecting the right service for your vehicle and schedule a time that works for you.",
    },
];

export const autoDetailingFAQ: FAQItem[] = [
    {
        question: "What's included in a full auto detail?",
        answer:
            "Our full detail includes thorough exterior wash and decontamination, clay bar treatment, paint correction (level varies by package), exterior sealant or wax, complete interior cleaning, leather conditioning, glass treatment, and engine bay cleaning on select packages.",
    },
    {
        question: "How often should I detail my car?",
        answer:
            "For optimal results, we recommend a maintenance detail every 4–6 weeks and a comprehensive detail every 3–6 months. Vehicles with ceramic coating protection can extend these intervals.",
    },
    {
        question: "Do you work on all vehicle types?",
        answer:
            "Yes. We service sedans, SUVs, trucks, coupes, convertibles, and exotics. Our team has extensive experience with all makes and models, from daily drivers to million-dollar supercars.",
    },
    {
        question: "Can you remove scratches and swirl marks?",
        answer:
            "Yes. Our paint correction process removes the majority of swirl marks, light scratches, and surface imperfections using multi-stage polishing techniques. Deep scratches that have penetrated the clear coat may require additional paintwork.",
    },
];

export const ceramicCoatingFAQ: FAQItem[] = [
    {
        question: "How long does ceramic coating last?",
        answer:
            "Our ceramic coating packages provide protection ranging from 2 years (Essentials) to lifetime (Grand Ceramic) depending on the package selected, proper maintenance, and environmental conditions.",
    },
    {
        question: "Does ceramic coating prevent all scratches?",
        answer:
            "Ceramic coating provides a sacrificial layer of protection that significantly reduces the risk of light scratches, swirl marks, and chemical etching. However, it is not a substitute for clear bra (PPF) protection against rock chips and deep scratches.",
    },
    {
        question: "How should I maintain my ceramic-coated vehicle?",
        answer:
            "We recommend hand washing or touchless washing only, using pH-neutral car shampoo, avoiding automatic car washes, and applying a ceramic coating maintenance spray every 2–3 months. We provide a complete aftercare guide with every coating application.",
    },
    {
        question: "Can ceramic coating be applied over PPF?",
        answer:
            "Yes, and we highly recommend it. Applying ceramic coating over paint protection film combines the best of both worlds — physical impact protection from the film and the hydrophobic, self-cleaning properties of the ceramic coating.",
    },
];

// ── Gallery ──
export const galleryImages: GalleryImage[] = [
    {
        id: "g1",
        src: "/images/gallery/exterior-1.jpg",
        alt: "Black Porsche 911 with mirror-finish paint correction",
        category: "exterior",
        title: "Mirror Finish",
    },
    {
        id: "g2",
        src: "/images/gallery/interior-1.jpg",
        alt: "Luxury car interior with pristine leather detailing",
        category: "interior",
        title: "Leather Perfection",
    },
    {
        id: "g3",
        src: "/images/gallery/paint-correction-1.jpg",
        alt: "Multi-stage paint correction in progress",
        category: "paint-correction",
        title: "Paint Correction",
    },
    {
        id: "g4",
        src: "/images/gallery/ceramic-coating-1.jpg",
        alt: "Ceramic coating application on luxury vehicle",
        category: "ceramic-coating",
        title: "Ceramic Shield",
    },
    {
        id: "g5",
        src: "/images/gallery/exterior-2.jpg",
        alt: "White Mercedes-AMG with showroom finish",
        category: "exterior",
        title: "Showroom Ready",
    },
    {
        id: "g6",
        src: "/images/gallery/interior-2.jpg",
        alt: "Detailed car interior showing clean dashboard and console",
        category: "interior",
        title: "Interior Excellence",
    },
    {
        id: "g7",
        src: "/images/gallery/paint-correction-2.jpg",
        alt: "Before and after paint correction comparison",
        category: "paint-correction",
        title: "Swirl Removal",
    },
    {
        id: "g8",
        src: "/images/gallery/ceramic-coating-2.jpg",
        alt: "Water beading on ceramic-coated surface",
        category: "ceramic-coating",
        title: "Hydrophobic Finish",
    },
    {
        id: "g9",
        src: "/images/gallery/exterior-3.jpg",
        alt: "Deep gloss finish on dark paint",
        category: "exterior",
        title: "Depth & Clarity",
    },
    {
        id: "g10",
        src: "/images/gallery/interior-3.jpg",
        alt: "Exotic car interior with meticulous detailing",
        category: "interior",
        title: "Exotic Interior",
    },
    {
        id: "g11",
        src: "/images/gallery/paint-correction-3.jpg",
        alt: "Professional polishing on exotic car hood",
        category: "paint-correction",
        title: "Professional Grade",
    },
    {
        id: "g12",
        src: "/images/gallery/ceramic-coating-3.jpg",
        alt: "Multi-layer ceramic coating curing under infrared",
        category: "ceramic-coating",
        title: "Multi-Layer Protection",
    },
];

// ── Process Steps ──
export const processSteps: ProcessStep[] = [
    {
        step: 1,
        title: "Consultation",
        description:
            "We begin with a detailed assessment of your vehicle's condition, discuss your goals, and recommend the ideal service package.",
    },
    {
        step: 2,
        title: "Preparation",
        description:
            "Thorough decontamination wash, iron removal, clay bar treatment, and surface preparation to create the perfect foundation.",
    },
    {
        step: 3,
        title: "Craftsmanship",
        description:
            "Precision paint correction, interior restoration, and meticulous attention to every surface using professional-grade products and techniques.",
    },
    {
        step: 4,
        title: "Protection",
        description:
            "Application of premium sealants, ceramic coatings, or protective treatments to preserve the perfection we've achieved.",
    },
    {
        step: 5,
        title: "Final Reveal",
        description:
            "A comprehensive walkthrough of the completed work, aftercare instructions, and the moment you see your vehicle transformed.",
    },
];

// ── Auto Detailing Packages ──
export const detailingPackages: PackageTier[] = [
    {
        name: "Essential Detail",
        price: "From $299",
        description:
            "A thorough detail for vehicles that receive regular care. Perfect for maintaining your vehicle's pristine condition.",
        features: [
            "Full exterior hand wash & dry",
            "Paint decontamination & clay bar",
            "Single-stage polish",
            "Premium carnauba wax",
            "Interior vacuum & wipe-down",
            "Leather cleaning & conditioning",
            "Glass cleaning inside & out",
            "Tire & trim dressing",
        ],
    },
    {
        name: "Signature Detail",
        price: "From $599",
        description:
            "Our most popular package. Comprehensive correction and restoration for discerning owners.",
        features: [
            "Everything in Essential",
            "Two-stage paint correction",
            "Ceramic sealant application",
            "Engine bay cleaning",
            "Deep interior extraction cleaning",
            "Leather repair & reconditioning",
            "Headlight restoration",
            "Exhaust tip polishing",
            "Door jamb detailing",
        ],
        popular: true,
    },
    {
        name: "Grand Detail",
        price: "From $1,199",
        description:
            "The pinnacle of automotive care. A multi-day transformation for those who accept nothing less than perfection.",
        features: [
            "Everything in Signature",
            "Multi-stage paint correction",
            "Premium ceramic coating (1-year)",
            "Full interior deep restoration",
            "Convertible top treatment",
            "Wheel-off cleaning & coating",
            "Comprehensive engine detailing",
            "Paint thickness measurement",
            "Before & after documentation",
            "Complimentary maintenance wash",
        ],
    },
];

// ── Ceramic Coating Packages ──
export const ceramicPackages: PackageTier[] = [
    {
        name: "Essentials Ceramic",
        price: "From $799",
        description:
            "Entry-level ceramic protection delivering exceptional gloss and hydrophobic properties for up to 2 years.",
        features: [
            "Single-stage paint correction",
            "Surface decontamination & prep",
            "Single-layer ceramic coating",
            "2-year protection",
            "Hydrophobic finish",
            "UV protection",
            "Aftercare kit included",
        ],
    },
    {
        name: "Signature Ceramic",
        price: "From $1,499",
        description:
            "Our flagship ceramic package. Multi-layer protection with superior depth, gloss, and durability for up to 5 years.",
        features: [
            "Two-stage paint correction",
            "Full decontamination & prep",
            "Multi-layer ceramic coating",
            "5-year protection",
            "Superior hydrophobic finish",
            "Enhanced UV & chemical resistance",
            "Wheel faces coated",
            "Glass coating included",
            "Premium aftercare kit",
            "Annual inspection included",
        ],
        popular: true,
    },
    {
        name: "Grand Ceramic",
        price: "From $2,999",
        description:
            "The ultimate in ceramic protection. Our most advanced coating system delivering unmatched performance and a lifetime of brilliance.",
        features: [
            "Multi-stage paint correction",
            "Complete decontamination & prep",
            "Multi-layer professional ceramic",
            "Lifetime protection warranty",
            "Maximum hydrophobic performance",
            "Full wheel & caliper coating",
            "All glass surfaces coated",
            "Interior surfaces coated",
            "Trim & plastics coated",
            "Premium aftercare kit",
            "Bi-annual inspections",
            "Priority booking for life",
        ],
    },
];

// ── Booking Constants ──
export const vehicleSizes = [
    "Compact / Coupe",
    "Sedan",
    "SUV / Crossover",
    "Truck / Full-Size",
    "Exotic / Supercar",
    "Van / XL",
];

export const vehicleConditions = [
    "Excellent — Regular maintenance",
    "Good — Minor wear",
    "Fair — Moderate wear & imperfections",
    "Needs Attention — Significant correction required",
    "New Vehicle — Pre-delivery prep",
];

export const contactMethods = ["Phone", "Email", "Text Message"];

export const addOns = [
    { id: "headlight-restoration", name: "Headlight Restoration", price: "$99" },
    { id: "engine-bay", name: "Engine Bay Detail", price: "$149" },
    { id: "wheel-coating", name: "Wheel Ceramic Coating", price: "$199" },
    { id: "glass-coating", name: "Glass Ceramic Coating", price: "$149" },
    { id: "leather-coating", name: "Leather Ceramic Coating", price: "$249" },
    { id: "trim-restoration", name: "Trim Restoration", price: "$79" },
    { id: "odor-elimination", name: "Odor Elimination", price: "$99" },
    { id: "pet-hair-removal", name: "Pet Hair Removal", price: "$79" },
];

// ── Mock Availability (placeholder for real calendar integration) ──
export const mockAvailability = {
    // TODO: Replace with real availability API integration
    // This should connect to a calendar/booking backend (e.g., Calendly, Acuity, custom)
    availableSlots: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
    ],
    blockedDays: [0], // Sunday
    advanceBookingDays: 60,
};
