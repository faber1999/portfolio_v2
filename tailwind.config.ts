import { setupInspiraUI } from '@inspira-ui/plugins'
import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  safelist: ['dark'],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        cursive: [
          'American Typewriter',
          'serif',
          'Comic Sans MS',
          'Comic Sans',
          'Apple Chancery',
          'cursive',
        ],
      },
      colors: {
        'bg-gradient-start': 'var(--bg-gradient-start)',
        'bg-gradient-end': 'var(--bg-gradient-end)',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundColor: {
        primary: 'var(--primary-bg)',
      },
    },
  },
  plugins: [animate, setupInspiraUI],
} satisfies Config
