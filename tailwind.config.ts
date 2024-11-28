import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen: {
        'sm': '640px',

        'md': '770px',


        'lg': '1024px',


        'xl': '1280px',

        '2xl': '1536px',

      },
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
  },
},
  },
plugins: [],
};
export default config;
