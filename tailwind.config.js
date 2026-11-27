/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#398C27',
            50: '#F0F7EC',
            100: '#DFEED6',
            600: '#398C27',
            700: '#2F7420',
            800: '#265D1B',
          },
          teal: {
            DEFAULT: '#306F5C',
            50: '#EEF5F2',
            100: '#DCEAE4',
            600: '#306F5C',
            700: '#275A4B',
            800: '#1E4639',
            900: '#16332A',
          },
          yellow: {
            DEFAULT: '#F9C744',
            100: '#FDF3D7',
            400: '#F9C744',
            500: '#F0B82E',
          },
          offwhite: '#F7F8F5',
          charcoal: '#202820',
          lightgray: '#E8EDE7',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
