/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1020',
        'card-background': '#151E31',
        'primary-blue': '#3987F5',
        'main-text': '#F1F5FF',
        'secondary-text': '#9AA9C2',
        border: '#29364D',
        warning: '#F5AC32',
        'attention-indicator': '#F45B64',
      },
      spacing: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'xxxl': '64px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        'xxl': '24px',
        'xxxl': '32px',
        'heading': '48px',
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '600',
        'extrabold': '700',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      backdropBlur: {
        sm: '4px',
      },
      keyframes: {
        // Add any custom keyframes if needed
      },
    },
  },
  plugins: [],
}