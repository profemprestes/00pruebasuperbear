import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Custom Breakpoints ──
      screens: {
        'xs': '480px',  // Extra small devices
      },
      fontFamily: {
        // SBA-authentic fonts
        body:     ['Amble', 'Quicksand', 'sans-serif'],              // UI body (SBA pre-2021)
        headline: ['"Fredoka One"', 'sans-serif'],                   // legacy support
        milky:    ['"Milky Nice"', 'sans-serif'],                    // Main SBA font (titles, CTA buttons)
        amble:    ['Amble', 'sans-serif'],                           // HUD labels, subtitles
        arcade:   ['"Gill Sans MT"', '"Gill Sans"', 'sans-serif'],  // ARCADE labels (like in-game)
        impact:   ['Impact', '"Arial Narrow Bold"', 'sans-serif'],   // VIP badges, counters
        calibri:  ['Calibri', 'Carlito', 'sans-serif'],             // Event info cards (book-like)
        code:     ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        // ── SBA Brand Colors ──
        'sky-blue':      'var(--sky-blue)',
        'grass-green':   'var(--grass-green)',
        'teddy-brown':   'var(--teddy-brown)',
        'golden-coin':   'var(--golden-coin)',
        'cloud-white':   'var(--cloud-white)',
        // ── Honey-Box Arcade Tokens ──
        'sky-light':      'var(--honey-box-sky)',
        'sky-variant':    'var(--honey-box-sky-variant)',
        'brown-shadow':   'var(--honey-box-brown-shadow)',
        'voxel-text':     'var(--honey-box-text)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        // Legacy
        '3d':           '4px 4px 0px 0px hsl(var(--foreground))',
        'inner-strong': 'inset 0 4px 6px rgba(0,0,0,0.1)',
        // ── Honey-Box Voxel Shadows ──
        '3d-gold':         '0 6px 0 #63340b',
        '3d-gold-pressed': '0 3px 0 #63340b',
        'glow-gold':       '0 10px 30px rgba(255,215,0,0.5), 8px 8px 0 #b8860b',
        '3d-blue':         '0 6px 0 #00008B',
        '3d-blue-pressed': '0 3px 0 #00008B',
        '3d-green':        '0 6px 0 #2E8B57',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-15px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-3deg) translateX(-5px)' },
          '50%':       { transform: 'rotate(3deg) translateX(5px)' },
        },
        'roulette': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1080deg)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-4px)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.2' },
        },
        'pulse-badge': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255,215,0,0.7)' },
          '50%':       { transform: 'scale(1.05)', boxShadow: '0 0 0 8px rgba(255,215,0,0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'bounce-light': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'accordion-down':  'accordion-down 0.2s ease-out',
        'accordion-up':    'accordion-up 0.2s ease-out',
        'float':           'float 3s ease-in-out infinite',
        'sway':            'sway 4s ease-in-out infinite',
        'roulette':        'roulette 2s ease-out forwards',
        'subtle-float':    'subtle-float 2s ease-in-out infinite',
        'blink':           'blink 1.5s ease-in-out infinite',
        'pulse-badge':     'pulse-badge 2s ease-in-out infinite',
        'shimmer':         'shimmer 3s linear infinite',
        'bounce-light':    'bounce-light 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
