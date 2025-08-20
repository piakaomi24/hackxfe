import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
    },
  },
  darkMode: "false",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: '#f2f8fd',
            100: '#e4effa',
            200: '#c3dff4',
            300: '#8ec4eb',
            400: '#52a6de',
            500: '#2b8bcc',
            600: '#18588c',
            700: '#184c74',
            800: '#194061',
            900: '#112940',
            DEFAULT: "#1a659e",
            foreground: "#ffffff",
          },
        },
      },
    },
  })],
}

module.exports = config;