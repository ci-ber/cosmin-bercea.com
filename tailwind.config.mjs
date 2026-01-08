// /** @type {import('tailwindcss').Config} */
// export default {
//     content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
//     theme: {
//         extend: {},
//     },
//     plugins: [require("@tailwindcss/typography"), require("daisyui")],
//     daisyui: {
//         themes: [
//             "light",
//             "dark",
//             "cupcake",
//             "bumblebee",
//             "emerald",
//             "corporate",
//             "synthwave",
//             "retro",
//             "cyberpunk",
//             "valentine",
//             "halloween",
//             "garden",
//             "forest",
//             "aqua",
//             "lofi",
//             "pastel",
//             "fantasy",
//             "wireframe",
//             "black",
//             "luxury",
//             "dracula",
//             "cmyk",
//             "autumn",
//             "business",
//             "acid",
//             "lemonade",
//             "night",
//             "coffee",
//             "winter",
//             "dim",
//             "nord",
//             "sunset",
//         ],
//     },
//     // darkMode: ['selector', '[data-theme="synthwave"]']
// };

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
      themes: [
        {
          cosmin: {
            /* Base */
            "base-100": "#FFFFFF",
            "base-200": "#F7F9FC",
            "base-300": "#E6EAF2",
  
            /* Content */
            "base-content": "#0B1220",
  
            /* Primary: authoritative blue */
            "primary": "#1E4ED8",
            "primary-content": "#FFFFFF",
  
            /* Secondary: restrained teal */
            "secondary": "#0EA5A4",
            "secondary-content": "#FFFFFF",
  
            /* Accent (sparingly) */
            "accent": "#10B981",
            "accent-content": "#FFFFFF",
  
            /* Neutrals */
            "neutral": "#111827",
            "neutral-content": "#FFFFFF",
  
            /* Status */
            "info": "#3B82F6",
            "info-content": "#FFFFFF",
            "success": "#10B981",
            "success-content": "#FFFFFF",
            "warning": "#F59E0B",
            "warning-content": "#111827",
            "error": "#EF4444",
            "error-content": "#FFFFFF",
  
            /* Rounding / sizes (optional, but helps “premium” feel) */
            "--rounded-box": "1.25rem",
            "--rounded-btn": "9999px",
            "--rounded-badge": "9999px",
            "--animation-btn": "0.2s",
            "--animation-input": "0.2s",
            "--btn-text-case": "none",
            "--navbar-padding": "0.75rem",
            "--border-btn": "1px",
          },
        },
        {
          "cosmin-dark": {
            /* Base */
            "base-100": "#0B1220",
            "base-200": "#0F1A2B",
            "base-300": "#1B2A44",
  
            /* Content */
            "base-content": "#EAF0FF",
  
            /* Primary */
            "primary": "#4F7DFF",
            "primary-content": "#0B1220",
  
            /* Secondary */
            "secondary": "#2DD4BF",
            "secondary-content": "#041414",
  
            /* Accent */
            "accent": "#34D399",
            "accent-content": "#022C22",
  
            /* Neutrals */
            "neutral": "#0A1020",
            "neutral-content": "#EAF0FF",
  
            /* Status */
            "info": "#60A5FA",
            "info-content": "#06101F",
            "success": "#34D399",
            "success-content": "#022C22",
            "warning": "#FBBF24",
            "warning-content": "#1A1200",
            "error": "#F87171",
            "error-content": "#1A0B0B",
  
            /* Same shape system */
            "--rounded-box": "1.25rem",
            "--rounded-btn": "9999px",
            "--rounded-badge": "9999px",
            "--animation-btn": "0.2s",
            "--animation-input": "0.2s",
            "--btn-text-case": "none",
            "--navbar-padding": "0.75rem",
            "--border-btn": "1px",
          },
        },
      ],
      darkTheme: "cosmin-dark",
    },
  };
  