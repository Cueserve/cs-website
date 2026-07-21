// Single Source of Truth (SSOT) Design Tokens
// Derived directly from `desing structure/tokens.json` & `desing structure/DESIGN.md`

export const tokens = {
  primitives: {
    color: {
      blue: {
        900: "#00359e",
        800: "#0040c1",
        700: "#0042c5",
        500: "#2970ff",
        400: "#256dff",
        200: "#c2e0ff",
        150: "#d1e0ff",
        100: "#eff4ff",
        50: "#f5faff",
      },
      neutral: {
        1000: "#000000",
        950: "#090909",
        900: "#111827",
        800: "#212121",
        600: "#4b5563",
        500: "#6b7280",
        100: "#f9f9f9",
        0: "#ffffff",
      },
      alpha: {
        "black-70": "rgba(33, 33, 33, 0.7)",
        "white-80": "rgba(255, 255, 255, 0.8)",
        transparent: "rgba(0, 0, 0, 0)",
      },
    },
    fontFamily: {
      title: '"Instrument Sans", sans-serif',
      paragraph: "Poppins, sans-serif",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    radius: {
      none: "0px",
      xs: "12px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
      "3xl": "60px",
      button: "100px",
      circle: "200px",
    },
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      8: "32px",
      10: "40px",
      12: "48px",
      16: "64px",
      20: "80px",
      24: "96px",
      section: "120px",
    },
  },

  semantic: {
    color: {
      brand: {
        default: "#0040c1", // primitives.color.blue.800
        hover: "#00359e",   // primitives.color.blue.900
        subtle: "#eff4ff",  // primitives.color.blue.100
        muted: "#d1e0ff",   // primitives.color.blue.150
      },
      text: {
        primary: "#090909",        // primitives.color.neutral.950
        secondary: "#4b5563",      // primitives.color.neutral.600
        tertiary: "#6b7280",       // primitives.color.neutral.500
        muted: "rgba(33, 33, 33, 0.7)", // primitives.color.alpha.black-70
        inverse: "#ffffff",        // primitives.color.neutral.0
        "inverse-muted": "rgba(255, 255, 255, 0.8)", // primitives.color.alpha.white-80
        brand: "#0040c1",          // primitives.color.blue.800
      },
      bg: {
        page: "#ffffff",           // primitives.color.neutral.0
        subtle: "#f9f9f9",         // primitives.color.neutral.100
        tinted: "#f5faff",         // primitives.color.blue.50
        brand: "#0040c1",          // primitives.color.blue.800
        inverse: "#111827",        // primitives.color.neutral.900
        overlay: "rgba(33, 33, 33, 0.7)", // primitives.color.alpha.black-70
      },
      border: {
        subtle: "#eff4ff",         // primitives.color.blue.100
        default: "#d1e0ff",        // primitives.color.blue.150
        strong: "#c2e0ff",         // primitives.color.blue.200
        brand: "#0040c1",          // primitives.color.blue.800
      },
    },
    gradient: {
      brand: "linear-gradient(135deg, #00359e 0%, #0042c5 50%, #2970ff 100%)",
    },
  },

  typography: {
    "title-display": {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "clamp(4rem, 15vw, 13.5rem)", // 216px
      lineHeight: "100%",
      letterSpacing: "-0.04em", // -4%
    },
    "title-xl": {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 500,
      fontSize: "clamp(3rem, 10vw, 8.875rem)", // 142px
      lineHeight: "100%",
      letterSpacing: "-0.02em", // -2%
    },
    "title-lg": {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "clamp(2.5rem, 7vw, 6.25rem)", // 100px
      lineHeight: "100%",
      letterSpacing: "-0.02em",
    },
    h1: {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "clamp(2.25rem, 5vw, 4rem)", // 64px
      lineHeight: "110%",
      letterSpacing: "-0.03em", // tighter (-3%) per DESIGN.md note
    },
    h2: {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "clamp(2rem, 4vw, 3.25rem)", // 52px
      lineHeight: "120%",
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "clamp(1.75rem, 3vw, 2.5rem)", // 40px
      lineHeight: "120%",
      letterSpacing: "-0.03em",
    },
    h4: {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "clamp(1.5rem, 2.5vw, 2rem)", // 32px
      lineHeight: "120%",
      letterSpacing: "-0.03em",
    },
    h5: {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "1.75rem", // 28px
      lineHeight: "130%",
      letterSpacing: "-0.03em",
    },
    h6: {
      fontFamily: '"Instrument Sans", sans-serif',
      fontWeight: 400,
      fontSize: "1.375rem", // 22px
      lineHeight: "130%",
      letterSpacing: "-0.03em",
    },
    "body-lg": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem", // 20px
      lineHeight: "150%",
      letterSpacing: "-0.02em",
    },
    "body-md": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "1.125rem", // 18px
      lineHeight: "150%",
      letterSpacing: "-0.02em",
    },
    "body-base": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "1rem", // 16px
      lineHeight: "150%",
      letterSpacing: "-0.02em",
    },
    "body-sm": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem", // 14px
      lineHeight: "150%",
      letterSpacing: "-0.02em",
    },
    label: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem", // 14px
      lineHeight: "100%",
      letterSpacing: "-0.02em",
    },
    caption: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
      lineHeight: "120%",
      letterSpacing: "0",
    },
  },

  shadow: {
    card: "0 2px 8px rgba(17, 24, 39, 0.12)",
    control: "0 0 0 1px rgba(0, 0, 0, 0.10), 0 1px 3px rgba(0, 0, 0, 0.10)",
    focus: "0 0 0 3px rgba(41, 112, 255, 0.40)",
  },
} as const;

export type DesignTokens = typeof tokens;
