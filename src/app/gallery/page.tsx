import { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Explore Torvani's portfolio of premium auto detailing and ceramic coating transformations on luxury and exotic vehicles.",
};

export default function GalleryPage() {
    return <GalleryPageClient />;
}
