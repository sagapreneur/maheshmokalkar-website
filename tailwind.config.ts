import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        ink: "var(--color-ink)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        bronze: {
          50: '#FAF6F0',
          100: '#E7CFAE', // Soft Sand Cream (#e7cfae)
          200: '#DDB892',
          300: '#D4A96B', // Warm Metallic Bronze Gold (#d4a96b)
          400: '#A8573D',
          500: '#924931', // Deep Warm Sienna Rust Bronze (#924931)
          600: '#743521',
          700: '#582616',
          800: '#3D180C',
          900: '#1F0B05',
        },
        gold: {
          100: '#FAF6F0',
          200: '#E7CFAE', // Soft Sand Cream (#e7cfae)
          300: '#D4A96B', // Warm Metallic Gold (#d4a96b)
          400: '#B88E52',
          500: '#924931',
        }
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "6px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(15, 23, 42, 0.05)",
        "card-hover": "0 12px 30px rgba(146, 73, 49, 0.12)",
        glow: "0 0 25px rgba(212, 169, 107, 0.25)",
        "glow-bronze": "0 0 25px rgba(146, 73, 49, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
