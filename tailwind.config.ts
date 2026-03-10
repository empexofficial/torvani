import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: "#c78918",
                    50: "#fdf8e8",
                    100: "#fcf0c8",
                    200: "#fcdc68",
                    300: "#f0c840",
                    400: "#daa520",
                    500: "#c78918",
                    600: "#a06c10",
                    700: "#7a5010",
                    800: "#5a3a10",
                    900: "#3a2508",
                },
                obsidian: {
                    DEFAULT: "#0a0a0a",
                    50: "#1a1a1a",
                    100: "#151515",
                    200: "#121212",
                    300: "#0f0f0f",
                    400: "#0c0c0c",
                    500: "#0a0a0a",
                    600: "#080808",
                    700: "#060606",
                    800: "#040404",
                    900: "#020202",
                },
                ivory: {
                    DEFAULT: "#f5f5f0",
                    50: "#ffffff",
                    100: "#fafaf7",
                    200: "#f5f5f0",
                    300: "#e8e8e0",
                    400: "#d4d4c8",
                },
            },
            fontFamily: {
                display: ['"area-normal"', "serif"],
                body: ["Inter", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "gold-gradient": "linear-gradient(135deg, #c78918, #fcdc68)",
                "gold-gradient-hover": "linear-gradient(135deg, #daa520, #fcdc68)",
                "dark-gradient": "linear-gradient(180deg, #0a0a0a 0%, #151515 100%)",
                "dark-gradient-r": "linear-gradient(180deg, #151515 0%, #0a0a0a 100%)",
                "glass-gradient":
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            },
            boxShadow: {
                gold: "0 0 20px rgba(199, 137, 24, 0.15)",
                "gold-lg": "0 0 40px rgba(199, 137, 24, 0.2)",
                glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
                "premium-card":
                    "0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out",
                "slide-up": "slideUp 0.6s ease-out",
                shimmer: "shimmer 2s infinite linear",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
