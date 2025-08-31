import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MH-Calendar",
  base: "/mh-calendar-docs/",
  description: "Docs for mh-calendar",
  themeConfig: {
    outline: "deep",
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Introduction", link: "/introduction" }],
      },
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Usage", link: "/usage" },
          { text: "Events", link: "/events" },
          { text: "Calendar API", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/MH-Calendar" }],
  },
});
