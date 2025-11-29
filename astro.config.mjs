// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Daily Prompt 👾",
	  customCss: [ 
        './src/styles/global.css',
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Domenico-Tenace-Open-Labs/daily-prompt",
        },
      ], 
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});