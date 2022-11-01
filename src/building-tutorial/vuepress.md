---
title: VuePress安装与配置
icon: page
isOriginal: true
article: true
headerDepth: 2
author: Jiu Yang
category:
  - 建站指南
tag:
  - VuePress
  - 建站
  - 教程
  - Github
# head:
#   - - meta
#     - name: keywords
#       content: null
#     - name: description
#       content: null
date updated: 2022-11-01 14:34
---

![](https://static.iamjy.com/blog-images/9dd35cdb14e8479faef5dcdab3a2e99f~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp-webp)

你是否一直想着拥有一个属于自己的「知识体系文档」手册，却迟迟不知如何下手？

今天，保姆级教学来了！跟着我，手把手，一步一步让你拥有自己的知识文档网站！

## 🚄前言

最近整理自己技术文档，心血来潮搞了这个文档站，把自己的文档、资料、电子书分享出来。
此文就当做个记录了，跟我一样想做文档网站的小伙伴往下看，保姆级教学奉上。

对比了网上几种不错的**静态网站生成器**后，发现 `VuePress` 最适合搭建知识体系框架。

![](https://static.iamjy.com/blog-images/ce354e7aefcc4392a9a9c0426dd798e3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

## 🎯VuePress 简介

VuePress 由两部分组成：第一部分是一个[极简静态网站生成器 (opens new window)](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件 API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

> 不知道什么是服务端渲染的，请看Vue官网：[服务端渲染 (SSR) | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/scaling-up/ssr.html)

一个 VuePress 站点本质上是一个由 [Vue](https://vuejs.org/) 和 [Vue Router](https://router.vuejs.org/) 驱动的单页面应用 (SPA)。

路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。

总结下 VuePress 的几个优点：

-   **简洁**：以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

-   **Vue 驱动**：享受 Vue + WebPack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 自定义主题。

-   **高性能**：VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

-   内置 Markdown 拓展语法（下文详谈）

-   多语言支持 ( `locales` )

-   响应式布局

-   支持 [PWA]([Progressive web app - Wikipedia](https://en.wikipedia.org/wiki/Progressive_web_app)) 模式

-   强大的 Plugin API

-   基于 Git 的最后更新时间 ( `lastUpdated` )

### vuepress-theme-hope 主题

制作本主题的初衷是发现 VuePress 只是一个单纯的静态文档生成器。举个例子，它并不会注入 meta 标签做 SEO 优化，也不会生成 Sitemap 帮助搜索引擎索引文档内容。

虽然 VuePress 在一定程度上扩展了 Markdown 语法，它仍然缺失一些常用的功能，比如文本对齐、标记、流程图、公式、演示等。同时默认主题提供的一些功能，也比较弱或者缺失，如图片预览，深色模式等。

在这种情况下，`vuepress-theme-hope` 和一些系列插件就应运诞生。

主题不仅在默认主题的基础上**大幅提高美观性**，同时搭配各种插件，**在各种细节与功能上为 VuePress 提供全方位的增强**。

### 优点特性总结

- 更丰富的内容——提供大量 MarkDown 扩展语法支持
- 页面 UI 进行优化，全新主页外观，提供路径导航和页脚支持，及代码自定义主题
- 引入完整的博客支持，有单独的博客主页
- 提供 SEO 增强
- 提供 Sitemap 生成
- 提供 PWA 支持

具体请看 [主题介绍 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/guide/get-started/intro.html)

## 👑VuePress 配置流程

### 安装

> 以下是 Windows 的

> VuePress 需要  [Node.js v14.18.0+](https://nodejs.org/) 和 npm / yarn 包管理工具
>官网下载比较慢，国内用户可以到[镜像站](https://registry.npmmirror.com/binary.html?path=node)下载

1. 先检查一下 node 版本

```bash
node -v
# v18.11.0
```

2. 确认版本没问题后，创建并进入新目录

```bash
mkdir mydocs && cd mydocs
```

运行以下命令， `[dir]` 可以是 `.` 或 `doc` 或 `src` ，或任意你喜欢的名字，使用 `.` 就表示将项目初始化在当前目录:

::: code-tabs#shell

@tab pnpm

```bash
pnpm create vuepress-theme-hope@next [dir]
```

@tab npm

```bash
npm init vuepress-theme-hope@next [dir]
```

:::

经过一番设置，最后一步会提示你是否启动 Demo，选择是，然后访问  `http://localhost:8080/`  你就能看见一个示例了。

以上流程就完成了 VuePress 和主题 的简单安装，但这远远不够，接下来我们来完成一些基本配置。

### 基本配置（默认主题配置）

> 提示：**这些基本配置仅对默认主题生效**，如果使用自定义主题，选项可能会不同。

> 直接贴出我的config.ts，仅供参考

```ts
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "编程学习网",
  description: "快来！一起来学编程！",
  theme,
  shouldPrefetch: false,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css",
      },
    ],
  ],
});
```

> 我的配置有变动我会及时更新在这里
> 更多配置请参考 [配置 | VuePress (vuejs.org)](https://v2.vuepress.vuejs.org/zh/reference/config.html)

### 自定义主题配置

> 照旧，我现用的配置贴到下边，每条都有注释，比较长，请各位看官耐心食用
> 更多配置请参考官网 [配置 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/config/)

```ts
import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  /* ======================== 主题基本选项 ======================== */
  // 当前网站部署到的域名
  // 类型: string
  // 必填: 是
  hostname: "https://iamjy.com",

  // 文章显示的默认作者
  // 类型: Author
  // `type AuthorInfo = { name: string; url?: string };`
  // `type Author = string | string[] | AuthorInfo | AuthorInfo[];`
  // 必填: 否
  author: {
    name: "Jiu Yang",
    url: "https://iamjy.com",
  },
  /* ======================== 主题功能选项 ======================== */

  /* ---------- 博客配置 ---------- */
  blog: {
    // 设置自己的一句话介绍、座右铭或口号
    // 类型: string
    // 必填: 否
    description: "全干工程师 / 游戏爱好者 / C罗脑残粉",

    // 指定一个个人介绍页地址，点击头像与姓名时会自动进行跳转
    // 类型: string
    // 必填: 否
    intro: "/about.html",

    // 这个对象配置你的社交媒体链接
    // 所有内置的社交媒体请参考下面链接
    // https://vuepress-theme-hope.github.io/v2/zh/config/theme/feature.html#blog-medias
    medias: {
      GitHub: "https://github.com/yszar",
      Gmail: "mailto:yszaryszar@gmail.com",
      Gitee: "https://gitee.com/yszaryszar",
      Zhihu: "https://www.zhihu.com/people/iamjy.com"
    },

    // 头像剪裁成圆形
    // 类型: boolean
    // 默认值: false
    roundAvatar: true,

    // 文章列表中展示的文章信息
    // 类型: ArticleInfo[]
    // 默认: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"]
    articleInfo: [
      "Author",
      "Original",
      "Date",
      "PageView",
      "Category",
      "Tag",
      "Word",
      "ReadingTime"
    ]
  },

  /* ---------- 加密配置 ---------- */
  // encrypt: {
  //   // 是否全局（整站）加密
  //   // 类型: boolean
  //   // 默认值: false
  //   global: false,

  //   // 最高权限密码，可以以数组的形式设置多个
  //   // 类型: string | string[]
  //   // 必填: 否
  //   admin: [],

  //   // 加密配置，为一个对象，键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。
  //   // 类型: Record<string, string | string[]>
  //   // 必填: 否
  //   config: {
  //     // 这会加密整个 i-am-test 目录，并且两个密码都是可用的
  //     "/i-am-test/": ["1234", "5678"],
  //     // 这只会加密 i-am-test/test.html
  //     "/i-am-test/test.html": "1234"
  //   }
  // },

  /* ======================== 主题布局选项 ======================== */

  /* ---------- 导航栏配置 ---------- */
  // 导航栏配置，在 src/.vuepress/navbar 目录下单独设置，具体配置方式见下面
  // https://vuepress-theme-hope.github.io/v2/zh/guide/layout/navbar.html 
  // 类型: HopeThemeNavbarConfig | false
  // 默认值: false
  navbar: zhNavbar,

  // 导航栏图标，应位于 .vuepress/public 文件夹，使用绝对路径。也可以使用网络图片
  // 类型: string
  // 必填: 否
  logo: "https://static.iamjy.com/logo.png",

  // 夜间模式导航栏图标，应位于 .vuepress/public 文件夹，使用绝对路径。也可以使用网络图片
  // 类型: string
  // 必填: 否
  logoDark: "https://static.iamjy.com/logo.png",

  // 仓库配置，用于在导航栏中显示仓库链接
  // 类型: string
  // 必填: 否
  repo: "yszar/biancheng.pro",

  /* ---------- 侧边栏配置 ---------- */
  // 侧边栏配置， 在 src/.vuepress/sidebar 目录下单独设置, 详见
  // https://vuepress-theme-hope.github.io/v2/zh/guide/layout/sidebar.html
  sidebar: zhSidebar,

  // 结构化侧边栏排序器, 详见
  // https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html#sidebarsorter
  // 默认值: ["readme", "order", "title"]
  sidebarSorter: [],

  // 侧边栏和页面目录的标题深度, 设置 0 可禁用所有级别的标题
  // 类型: number
  // 默认值: 2
  headerDepth: 2,

  /* ---------- 标题配置 ---------- */

  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序。填入 false 使其被禁用。
  // 类型: ArticleInfo[] | false
  // 默认值: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"]
  pageInfo: [
    "Author",
    "Original",
    "Date",
    "Category",
    "Tag",
    "Word",
    "ReadingTime",
    "PageView"
  ],

  /* ---------- Meta配置 ---------- */

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 文档所在分支
  // 类型: string
  // 默认值: "main"
  docsBranch: "master",

  // 文档在仓库中的目录
  // 类型: string
  // 默认值: ""
  docsDir: "src",

  /* ---------- 页脚配置 ---------- */

  // 页脚的默认内容，可输入 HTMLString。
  // 类型: string
  // 必填: 否
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">陇ICP备15003024号</a>',

  // 默认的版权信息，设置为 false 可禁用它
  // 类型: string | boolean
  // 默认值: "Copyright © <作者>"
  // copyright: "",

  // 是否默认显示页脚
  // 类型: boolean
  // 默认值: false
  displayFooter: true,

  /* ======================== 主题外观选项 ======================== */

  // 字体图标资源链接，支持 'iconfont' 和 'fontawesome' 关键字。
  // 类型: "iconfont" | "fontawesome" | `//${string}` | `http://${string}` | `https://${string}` 
  // 必填: 否
  // 详情: https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html
  iconAssets: "iconfont",

  // 主题色选项配置
  // 类型: Record<string, string> | false
  // 默认值: false
  // 详情: https://vuepress-theme-hope.github.io/v2/zh/guide/interface/theme-color.html
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  // 是否显示全屏按钮
  // 类型: boolean
  // 默认值: false
  fullscreen: true,

  /* ======================== 主题多语言选项 ======================== */
  // 目前不打算配置多语言，有需要可以去官网好看
  // https://vuepress-theme-hope.github.io/v2/zh/config/theme/i18n.html

  /* ======================== 插件配置 ======================== */
  plugins: {
    /* ---------- 博客插件 ---------- */
    blog: {
      // 类型: boolean
      // 默认值: false
      // 是否为每个页面生成摘录
      autoExcerpt: true,

    },

    /* ---------- 评论插件 ---------- */
    // 如果您不需要评论功能，您可以删除以下选项
    // 以下配置仅供演示，如果您需要评论功能，请生成并使用您自己的配置，详见评论插件文档。
    // 为避免打扰主题开发者并消耗他的资源，请不要在您的生产环境中直接使用以下配置！！！！！！！
    comment: {
      /**
       * Using Giscus
       */
      // 配置方法：https://vuepress-theme-hope.github.io/v2/comment/zh/guide/giscus.html
      provider: "Giscus",
      repo: "yszar/biancheng.pro",
      repoId: "R_kgDOIVrevg",
      category: "Announcements",
      categoryId: "DIC_kwDOIVrevs4CSSpE",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    /* ---------- 版权信息插件 ---------- */
    copyright:{
      // 部署的域名
      // 类型: string
      // 必填: 否
      hostname: "https://biancheng.pro",

      // 作者信息
      // 类型: string | ((page: Page) => string)
      // 必填: 否
      author:"Jiu Yang",

      // 协议信息
      // 类型: string | ((page: Page) => string)
      // 必填: 否
      license: "「署名 4.0 国际（CC BY 4.0）」",

      // 是否全局启用
      // 类型: boolean
      // 默认值: false
      global: true,
    },

    /* ---------- Feed 插件 ---------- */
    // 放弃使用 Feed ，有需要可以去官网查看
    // https://vuepress-theme-hope.github.io/v2/zh/config/plugins/feed.html

    /* ---------- MdEnhance 插件配置 ---------- */
    // Disable features you don't want here
    mdEnhance: {
      // 是否启用自定义对齐格式支持
      // 类型: boolean
      // 默认值: false
      align: true,
      attrs: true,
      chart: true,

      // 是否启用代码组
      // 类型: boolean
      // 默认值: false
      codetabs: true,

      // 是否启用自定义容器支持:
      // info | note | tip | warning | danger | details
      // 类型: boolean
      // 默认值: true
      container: true,

      // 是否启用代码案例支持。
      // 类型: CodeDemoGlobalOptions | boolean
      // 默认值: false
      demo: true,

      echarts: true,

      // 是否启用流程图支持
      // 类型: boolean
      // 默认值: false
      flowchart: true,

      // 是否启用脚注格式支持
      // 类型: boolean
      // 默认值: false
      footnote: false,

      // 是否支持完整的 GFM 语法
      // 类型: boolean
      // 默认值: false
      gfm: true,

      // 是否使用原生方式懒加载页面图片
      // 类型: boolean
      // 默认值: false
      imageLazyload: true,

      // 是否启用图片标注支持
      // 类型: ImageMarkOptions | boolean
      // 默认值: false
      imageMark:false,

      // 是否启用图片标题支持
      // 类型: boolean
      // 默认值: false
      imageTitle: true,

      // 是否启用图片尺寸支持
      // 类型: boolean
      // 默认值: false
      imageSize: true,
      include: true,

      // 类型: KatexOptions | boolean
      // 默认值: false
      // 是否通过 KaTeX\KaTeXKATE​X 启用 TeX\TeXTE​X 语法支持。你可以传入一个对象作为 KaTeX\KaTeXKATE​X 的配置选项
      katex: true,

      // 是否启用标记格式支持
      // 类型: boolean
      // 默认值: false
      mark: true,

      // 是否通过 Math Jax 启用 TeX\TeXTE​X 语法支持。你可以传递一个对象来配置 Math Jax
      // 类型: MathJaxOptions | boolean
      // 默认值: false
      mathjax: false,

      // 是否启用 Mermaid 支持
      // 类型: boolean
      // 默认值: false
      mermaid: true,

      // 交互演示选项
      // 类型: PlaygroundGlobalOptions
      // 必填: 否
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // 对行内语法进行样式化以创建代码片段
      // 类型: StylizeOptions | false
      // 默认值: false
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],

      // 是否启用下角标格式支持
      // 类型: boolean
      // 默认值: false
      sub: true,

      // 是否启用上角标格式支持
      // 类型: boolean
      // 默认值: false
      sup: true,

      // 是否启用选项卡
      // 类型: boolean
      // 默认值: false
      tabs: true,

      // 是否启用任务列表格式支持。你可以传入一个对象作为任务列表的配置选项
      // 类型: TaskListOptions | boolean
      // 默认值: false
      tasklist: false,

      // 是否启用 v-pre 容器
      // 类型: boolean
      // 默认值: false
      vpre: true,

      // 是否启用 Vue 交互演示支持
      // 类型: VuePlaygroundOptions | boolean
      // 默认值: false
      vuePlayground: true,
    },

    copyCode: {showInMobile: true},

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});

```

## 🧩主题内置的插件

- [vuepress-plugin-blog2][blog2]: VuePress2 的博客插件

- [vuepress-plugin-comment2][comment2]: 提供评论与浏览量功能

- [vuepress-plugin-components][components]: 提供一些开箱即用的插件

- [vuepress-plugin-copy-code2][copy-code2]: 提供一键复制代码块功能。

- [vuepress-plugin-copyright2][copyright2]: 在用户复制时追加版权信息，或禁用站点的复制与选择。

- [vuepress-plugin-feed2][feed2]: Feed 支持

- [vuepress-plugin-md-enhance][md-enhance]: 提供更多 Markdown 语法

- [vuepress-plugin-photo-swipe][photo-swipe]: 基于 Photo Swipe 的图片浏览插件

- [vuepress-plugin-pwa2][pwa2]: 增强的 PWA 支持

- [vuepress-plugin-reading-time2][reading-time2]: 阅读时间与字数统计

- [vuepress-plugin-redirect][redirect]: 重定向插件

- [vuepress-plugin-sass-palette][sass-palette]: 面向全部插件和主题的 Sass 配置插件

- [vuepress-plugin-seo2][seo2]: SEO 增强插件

- [vuepress-plugin-sitemap2][sitemap2]: Sitemap 插件

🚀VuePress V2 插件库：[awesome-vuepress (github.com)](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md)

## 🌅Markdown 拓展

因为 Vue 就是以 Markdown 为中心的项目结构，所以支持 Markdown 的所有语法。

此外，VuePress 还额外拓展了一些 Markdown 的用法，类似 GitHub 对 Markdown 的拓展 [GFM](https://link.juejin.cn?target=https%3A%2F%2Fgfm.docschina.org%2Fzh-hans%2F "https://gfm.docschina.org/zh-hans/") 一样。

> 🙄常用的就不提了，我们来说说拓展的语法。

### 目录

```markdown
[[toc]]
```

![](https://static.iamjy.com/blog-images/d3aa716350a74bf38787e9415c91c313~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

### 链接

网站内部的链接，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。

#### 内部链接

以如下的文件结构为例：

```erlang
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 `foo/one.md` 中：

```markdown
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html#标题) <!-- 也可以用 .html -->
```

### 自定义容器

```markdown
::: tip
这是一个提示
:::
 
::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

![](https://static.iamjy.com/blog-images/d6a6e13afe1a44bbbfd29961d74ac528~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

⭐你也可以自定义块中的标题

```markdown
::: danger STOP
禁止通行
:::
```

![](https://static.iamjy.com/blog-images/dd02b62b47724d8289ee70a78372eb89~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

### 代码块中的行高亮

````markdown
```java {3}
class Solution {
  public void hello() {
    System.out.println("Hello World!");
  }
}
````

![](https://static.iamjy.com/blog-images/2d32606b0def4775b581e39474805ac3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

### 配置行号

你可以通过配置来为每个代码块**显示行号**：

```js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
````

![](https://static.iamjy.com/blog-images/d1bcc2df249e499cb1968b02ac09abc0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

### Yaml Front Matter

VuePress 提供了对 [YAML front matter](https://link.juejin.cn?target=https%3A%2F%2Fjekyllrb.com%2Fdocs%2Ffront-matter%2F "https://jekyllrb.com/docs/front-matter/") 开箱即用的支持

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。

🚎了解更多，请移步：
[信息 Frontmatter 配置 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/info.html)

### Emoji

输入

```markdown
:tada: :100:
```

输出：🎉 💯

你可以在 [Emoji 库](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmarkdown-it%2Fmarkdown-it-emoji%2Fblob%2Fmaster%2Flib%2Fdata%2Ffull.json "https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json")中找到所有的 emoji，其实个人建议使用 `Window + .` 呼出 emoji 库比较方便。

### 更多 Markdown 配置

> 请参考 [MdEnhance 插件配置 | vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/config/plugins/md-enhance.html)

## 🚀未完待续

✨ VuePress 的安装和配置相对还是比较简单的，尤大大的初衷就是要让用户把重点放在文档内容上，而且官方文档已经非常非常详细明白了，所以这一部分没有太多内容，重点在下一部分，教大家全自动部署博客，持续集成。敬请期待把。

😉如果你觉得本文有哪些错误或者需要补充的地方，欢迎随时在评论区指正。
