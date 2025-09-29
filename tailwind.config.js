/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
      './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "var(--color-border)", /* black-10 */
          input: "var(--color-input)", /* slate-100 */
          ring: "var(--color-ring)", /* blue-900 */
          background: "var(--color-background)", /* gray-50 */
          foreground: "var(--color-foreground)", /* gray-900 */
          primary: {
            DEFAULT: "var(--color-primary)", /* blue-900 */
            foreground: "var(--color-primary-foreground)", /* white */
          },
          secondary: {
            DEFAULT: "var(--color-secondary)", /* blue-700 */
            foreground: "var(--color-secondary-foreground)", /* white */
          },
          destructive: {
            DEFAULT: "var(--color-destructive)", /* red-600 */
            foreground: "var(--color-destructive-foreground)", /* white */
          },
          muted: {
            DEFAULT: "var(--color-muted)", /* slate-100 */
            foreground: "var(--color-muted-foreground)", /* gray-600 */
          },
          accent: {
            DEFAULT: "var(--color-accent)", /* orange-600 */
            foreground: "var(--color-accent-foreground)", /* white */
          },
          popover: {
            DEFAULT: "var(--color-popover)", /* white */
            foreground: "var(--color-popover-foreground)", /* gray-900 */
          },
          card: {
            DEFAULT: "var(--color-card)", /* white */
            foreground: "var(--color-card-foreground)", /* gray-900 */
          },
          success: {
            DEFAULT: "var(--color-success)", /* green-600 */
            foreground: "var(--color-success-foreground)", /* white */
          },
          warning: {
            DEFAULT: "var(--color-warning)", /* yellow-600 */
            foreground: "var(--color-warning-foreground)", /* gray-900 */
          },
          error: {
            DEFAULT: "var(--color-error)", /* red-600 */
            foreground: "var(--color-error-foreground)", /* white */
          },
          surface: "var(--color-surface)", /* slate-100 */
          'text-primary': "var(--color-text-primary)", /* gray-900 */
          'text-secondary': "var(--color-text-secondary)", /* gray-600 */
          'mission-active': "var(--color-mission-active)", /* green-400 */
          'mission-standby': "var(--color-mission-standby)", /* amber-400 */
          'mission-critical': "var(--color-mission-critical)", /* red-500 */
          'grid-line': "var(--color-grid-line)", /* white-10 */
          'grid-line-dark': "var(--color-grid-line-dark)", /* black-10 */
        },
        borderRadius: {
          lg: "var(--radius-lg)",
          md: "var(--radius-md)",
          sm: "var(--radius-sm)",
          xl: "var(--radius-xl)",
          full: "var(--radius-full)",
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          inter: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
          'jetbrains': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
          'grid': 'var(--spacing-grid)',
          'unit': 'var(--spacing-unit)',
        },
        boxShadow: {
          'card': 'var(--shadow-card)',
          'modal': 'var(--shadow-modal)',
          'elevation': 'var(--shadow-elevation)',
          'mission': '0 0 20px rgba(26, 54, 93, 0.3)',
          'glow': '0 0 10px currentColor, 0 0 20px currentColor',
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'countdown': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'launch-sequence': 'launchSequence 3s ease-out forwards',
          'draw-line': 'drawLine 3s ease-out forwards',
          'mission-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        transitionTimingFunction: {
          'aerospace': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          'mission': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        transitionDuration: {
          'fast': 'var(--timing-fast)',
          'normal': 'var(--timing-normal)',
          'slow': 'var(--timing-slow)',
          'mission': 'var(--timing-mission)',
        },
        backdropBlur: {
          'mission': '10px',
        },
        gridTemplateColumns: {
          '24': 'repeat(24, minmax(0, 1fr))',
          'aerospace': 'repeat(24, minmax(0, 1fr))',
        },
        maxWidth: {
          'mission': '1440px',
          '8xl': '88rem',
          '9xl': '96rem',
        },
        letterSpacing: {
          'technical': '0.05em',
          'mission': '0.025em',
        },
        lineHeight: {
          'technical': '1.6',
          'mission': '1.4',
        },
        zIndex: {
          'header': '50',
          'sidebar': '40',
          'modal': '100',
          'tooltip': '110',
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
    ],
  }