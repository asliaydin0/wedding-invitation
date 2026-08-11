/**
 * Design token reference for TypeScript / docs.
 * Visual source of truth remains CSS variables in globals.css.
 */
export const tokens = {
  colors: {
    ivory: {
      50: "#faf7f2",
      100: "#f5efe6",
      200: "#ebe2d4",
    },
    beige: {
      200: "#e4d7c4",
      300: "#d4c2a6",
      400: "#c2ab89",
    },
    brown: {
      400: "#8a7a66",
      500: "#6e5f4c",
      600: "#564a3c",
      700: "#433a30",
    },
    burgundy: {
      400: "#9a3348",
      500: "#7a1f33",
      600: "#5e1727",
      700: "#42111c",
    },
    gold: {
      300: "#d4be8e",
      400: "#c4a76a",
      500: "#b08f52",
      600: "#8f7340",
    },
    espresso: {
      800: "#2c241c",
      900: "#1f1914",
      950: "#15110e",
    },
  },
  typography: {
    script: "Great Vibes — names, romantic accents",
    serif: "Cormorant Garamond — headings & body",
    display: "Cinzel — eyebrows, formal caps",
    sans: "Outfit — UI, forms, captions",
  },
  layout: {
    maxInvitation: "28rem",
  },
} as const;
