import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Workspace Surfaces
        canvas: "#F8FAFC", // Warm Alabaster main workspace background
        surface: "#FFFFFF", // Pure White elevated card & header surface
        "border-subtle": "#E2E8F0", // 1px solid structural hairline divider

        // Fixed Navigation Sidebar Chrome (Deep Obsidian Slate)
        obsidian: {
          900: "#0F172A", // Primary sidebar background & primary heading ink
          800: "#1E293B", // Sidebar item hover state & dark code blocks
          700: "#334155", // Primary body text slate
          500: "#64748B", // Micro uppercase metadata labels
          400: "#94A3B8", // Muted sidebar navigation text
        },

        // Primary Brand Accent (EU Regulatory Cobalt)
        cobalt: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#2563EB", // Active navigation pill inside obsidian sidebar
          700: "#1D4ED8", // Primary CTA button & focus ring token
          800: "#1E40AF", // Primary CTA button hover state
          900: "#1E3A8A",
        },

        // Semantic EU AI Act Compliance Status Tokens
        status: {
          verified: {
            text: "#10B981", // Emerald Green
            bg: "#ECFDF5",   // Soft Mint pill surface
            border: "#A7F3D0", // 1px Mint border
          },
          drift: {
            text: "#D97706", // Amber Gold
            bg: "#FFFBEB",   // Warm Cream pill surface
            border: "#FDE68A", // 1px Amber border
          },
          blocker: {
            text: "#E11D48", // Crimson Red (Article 99 penalty risk)
            bg: "#FFF1F2",   // Pale Rose pill surface
            border: "#FECDD3", // 1px Rose border
          },
        },
      },

      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-geist-sans)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
      },

      fontSize: {
        // 32px SemiBold KPI Metric Readout
        kpi: [
          "2rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        // 24px SemiBold H1 Page Header
        h1: [
          "1.5rem",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        // 18px SemiBold H2 Section / Card Title
        h2: [
          "1.125rem",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        // 14px Regular UI Body Copy
        body: [
          "0.875rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        // 13px Regular JetBrains Mono Code & SHA Hash Copy
        mono: [
          "0.8125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        // 11px Uppercase SemiBold Micro Label
        micro: [
          "0.6875rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
      },

      borderRadius: {
        card: "8px", // Outer workspace cards
        btn: "6px",  // Buttons, inputs, and alert banners
        tag: "4px",  // Semantic compliance status pills & AST badges
      },

      boxShadow: {
        "card-hover": "0 1px 3px 0 rgba(15, 23, 42, 0.04)",
        drawer: "-8px 0 24px -4px rgba(15, 23, 42, 0.08)",
      },

      spacing: {
        sidebar: "240px", // Fixed left navigation width
        header: "64px",   // Sticky top header height
        drawer: "420px",  // Slide-over JSON inspector drawer width
      },
    },
  },
  plugins: [],
};

export default config;
