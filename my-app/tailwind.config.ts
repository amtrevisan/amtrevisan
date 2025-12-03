import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        black: {
          50: "#eae8fd",
          100: "#d5d1fa",
          200: "#aca2f6",
          300: "#8274f1",
          400: "#5945ed",
          500: "#2f17e8",
          600: "#2612ba",
          700: "#1c0e8b",
          800: "#13095d",
          900: "#09052e",
          950: "#070320",
        },
        goldenOrange: {
          50: "#fff6e5",
          100: "#ffedcc",
          200: "#ffdb99",
          300: "#ffc966",
          400: "#ffb833",
          500: "#ffa600",
          600: "#cc8500",
          700: "#996300",
          800: "#664200",
          900: "#332100",
          950: "#241700",
        },
        dustGrey: {
          50: "#f4f0f0",
          100: "#eae1e1",
          200: "#d5c3c3",
          300: "#c0a5a5",
          400: "#aa8888",
          500: "#956a6a",
          600: "#775555",
          700: "#5a3f3f",
          800: "#3c2a2a",
          900: "#1e1515",
          950: "#150f0f",
        },
        sageGreen: {
          50: "#f0f4f0",
          100: "#e1eae1",
          200: "#c3d5c4",
          300: "#a5c0a6",
          400: "#88aa88",
          500: "#6a956b",
          600: "#557755",
          700: "#3f5a40",
          800: "#2a3c2b",
          900: "#151e15",
          950: "#0f150f",
        },
        claySoil: {
          50: "#f7f0ed",
          100: "#efe2dc",
          200: "#dfc4b9",
          300: "#d0a795",
          400: "#c08972",
          500: "#b06c4f",
          600: "#8d563f",
          700: "#6a412f",
          800: "#462b20",
          900: "#231610",
          950: "#190f0b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
