/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondory: "var(--secondory)",
        white: "var(--white)",
        sideIconBar: "var(--side-icon-bar)",
        btnSecondary: "var(--btn-secondory)",
        label: "var(--label)",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
