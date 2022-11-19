import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "home",
      text: "学习路线",
      link: "home",
      prefix: "roadmap/",
      children: "structure"
    },
  ],
  "/python/": [
    {
      icon: "python",
      text: "Python 入门教程",
      link: "/python/",
      prefix: "python/",
      children: "structure"
    },
  ],
  "/this-website/": [{        // 必要的，分组的标题文字
    text: "关于我这个站",
    // 可选的, 分组标题对应的图标
    icon: "guanyuzhan",
    // 可选的, 分组标题对应的链接
    link: "/this-website/",
    // 可选的，会添加到每个 item 链接地址之前
    prefix: "/this-website/",
    // 可选的, 设置分组是否可以折叠，默认值是 false,
    collapsible: false,
    // 必要的，分组的子项目
    children: [
      {
        text: "1. VuePress安装与配置",
        link: "vuepress.md",
        icon: "peizhi",
        // 仅在 `/zh/guide/` 激活
        // activeMatch: "^/zh/guide/$",
      },
      {
        text: "2. Github Actions 持续集成",
        link: "github-actions.md",
        icon: "github",
      },
      {
        text: "3. 写作工具 Obsidian",
        link: "obsidian.md",
        icon: "page",
      },
    ]
  },
    // {
    //   text: "关于我这个站",
    //   link: "/this-website/index.html",
    //   prefix: "/this-website/",
    //   icon: "guanyuzhan",
    // },
    // {
    //   text: "用到的工具",
    //   prefix: "/this-website/",
    //   icon: "gongju",
    //   children: "structure"
    // },
    // {
    //   text: "搭建过程",
    //   link: "",
    //   prefix: "/this-website/",
    //   icon: "dajian",
    //   collapsable: true,
    //   // 仅在 `/zh/guide/` 激活
    //   // activeMatch: "^/zh/guide/$",
    //   children: [
    //     {
    //       text: "1. VuePress安装与配置",
    //       link: "vuepress.md",
    //       icon: "peizhi",
    //       // 仅在 `/zh/guide/` 激活
    //       // activeMatch: "^/zh/guide/$",
    //     },
    //     {
    //       text: "2. Github Actions 持续集成部署",
    //       link: "github-actions.md",
    //       icon: "github",
    //     },
    //   ]
    // },
  ]
},
);
