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
      },
    },
    plugins: [daisyui],
    daisyui: {
      themes: ["dark"], // Specify the theme you want to use
      darkTheme: "dark", // Name of the theme for dark mode
    },
  }
} satisfies Config;
