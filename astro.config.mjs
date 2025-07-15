// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Daily Prompt 👾",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/DomeT99/daily-prompt",
        },
      ], 
    }),
  ],
});
