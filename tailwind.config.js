/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1628',
        'deep-navy': '#112240',
        slate: '#8892B0',
        cyan: '#64FFDA',
        'cyan-glow': 'rgba(100, 255, 218, 0.15)',
        amber: '#FFB800',
        'amber-glow': 'rgba(255, 184, 0, 0.2)',
        mint: '#88D8B0',
        ice: '#E6F1FF',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display': ['60px', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h2': ['36px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['17px', { lineHeight: '1.6' }],
        'body': ['15px', { lineHeight: '1.6' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '500' }],
        'nav': ['13px', { lineHeight: '1', letterSpacing: '0.04em', fontWeight: '500' }],
        'stat': ['48px', { lineHeight: '1.0', letterSpacing: '-0.01em', fontWeight: '500' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(34px)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-down": "scroll-down 2.5s ease-in-out infinite",
        "marquee-left": "marquee-left 25s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
