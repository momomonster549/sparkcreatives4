/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB',
        'brand-teal': '#06B6D4',
        'brand-orange': '#F97316',
        'brand-purple': '#8B5CF6',
        'brand-green': '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': "url('/src/assets/patterns/dot-pattern.svg')",
        'wave-pattern': "url('/src/assets/patterns/wave-pattern.svg')",
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'pulse-soft': 'pulse-soft 2s infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
