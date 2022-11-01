import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
  "/this-website/": [
    {
      text: "搭建过程",
      link: "",
      prefix: "/this-website/",
      icon: "creative",
      collapsable: true,
      // 仅在 `/zh/guide/` 激活
      // activeMatch: "^/zh/guide/$",
      children: [
        {
          text: "1. VuePress安装与配置",
          link: "vuepress.md",
          icon: "creative",
          // 仅在 `/zh/guide/` 激活
          // activeMatch: "^/zh/guide/$",
        },
        {
          text: "2. Github Actions 持续集成部署",
          link: "github-actions.md",
          icon: "creative",
        },
      ]
    },

  ]
});
