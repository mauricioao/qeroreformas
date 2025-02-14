import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://qeroreformas.com",
  // image: {
  //   domains: ["images.unsplash.com"],
  // },
  // i18n: {
  //   defaultLocale: "es",
  //   locales: ["es", "en"],
  //   fallback: {
  //     en: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        es: "es", // The `defaultLocale` value must present in `locales` keys
        en: "en", 
      },
    },
  }), starlight({
    title: "Qero Reformas",
    defaultLocale: "root",
    // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
    // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
    // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
    // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
    // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
    locales: {
      root: {
        label: "Español",
        lang: "es",
      },
      en: { label: "English", lang: "en" },
    },
    // https://starlight.astro.build/guides/sidebar/
    sidebar: [
      {
        label: "Guías de Inicio Rápido",
        translations: {
          en: "Quick Start Guides",
        },
        autogenerate: { directory: "guides" },
      },
      {
        label: "Tools & Equipment",
        items: [
          { label: "Tool Guides", link: "tools/tool-guides/" },
          { label: "Equipment Care", link: "tools/equipment-care/" },
        ],
      },
      {
        label: "Construction Services",
        autogenerate: { directory: "construction" },
      },
      {
        label: "Advanced Topics",
        autogenerate: { directory: "advanced" },
      },
    ],
    social: {
      github: "https://github.com/mearashadowfax/ScrewFast",
    },
    disable404Route: true,
    customCss: ["./src/assets/styles/starlight.css"],
    favicon: "/favicon.ico",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      Head: "./src/components/ui/starlight/Head.astro",
      MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
      ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
    },
    head: [
      {
        tag: "meta",
        attrs: {
          property: "og:image",
          content: "https://qeroreformas.com" + "/social.webp",
        },
      },
      {
        tag: "meta",
        attrs: {
          property: "twitter:image",
          content: "https://qeroreformas.com" + "/social.webp",
        },
      },
    ],
  }), compressor({
    gzip: false,
    brotli: true,
  }), mdx()],
  experimental: {
    clientPrerender: true,
  },
});