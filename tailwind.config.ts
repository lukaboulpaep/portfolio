import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        hostGrotesk: ["Host Grotesk", "sans-serif"]
      }
    }
  },

  plugins: []
} satisfies Config;
