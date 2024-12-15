import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./elements/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    variants: {
      extend: {
        transform: ['group-hover'],
        scale: ['group-hover'],
      }
    },
    
    extend: {
      animation: {
        'blob-bounce': 'blob-bounce 5s infinite ease'
      },
      keyframes: {
        'blob-bounce': {
          '0%': { 
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)' 
          },
          '25%': { 
            transform: 'translate(-100%, -100%) translate3d(100%, 0, 0)' 
          },
          '50%': { 
            transform: 'translate(-100%, -100%) translate3d(100%, 100%, 0)' 
          },
          '75%': { 
            transform: 'translate(-100%, -100%) translate3d(0, 100%, 0)' 
          },
          '100%': { 
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)' 
          }
        }
      },
      backdropBlur: {
        'lg': '10px',
      },
      perspective: {
        '500': '500px',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      colors: {
        "primary": "#9648ff",
        "bg": "#f7f7f7",
        "text":"#71717A"
      },
    },
  },
  plugins: [],
} satisfies Config;
