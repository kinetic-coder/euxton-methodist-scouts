import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Official Scouts UK Brand Colors
        'scouts-purple': '#7413dc',      // Core color - Scouts Purple
        'scouts-teal': '#088486',        // Scouts Teal
        'scouts-red': '#ed3f23',         // Scouts Red
        'scouts-pink': '#ffb4e5',        // Scouts Pink
        'scouts-green': '#25b755',       // Scouts Green
        'scouts-navy': '#003982',        // Scouts Navy
        'scouts-blue': '#006ddf',        // Scouts Blue
        'scouts-forest-green': '#205b41', // Scouts Forest Green
        'scouts-orange': '#ff912a',      // Scouts Orange
        'scouts-yellow': '#ffe627',      // Scouts Yellow
      },
    },
    plugins: [daisyui],
    daisyui: {
      themes: ["dark"], // Specify the theme you want to use
      darkTheme: "dark", // Name of the theme for dark mode
    },
  }
} satisfies Config;
