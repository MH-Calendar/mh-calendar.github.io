import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MH-Calendar",
  base: "/mh-calendar-docs/",
  description: "Docs for mh-calendar",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Introduction", link: "/introduction" }],
      },
      {
        text: "Getting Started",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
