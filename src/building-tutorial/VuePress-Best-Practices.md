---
# 这是文章的标题
title: 手把手教你用 VuePress
#  这是页面的图标
icon: page
# 是否原创
isOriginal: true
# 是否加入文章列表
article: true
# 展开深度
headerDepth: 2
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: Jiu Yang
# 设置写作时间
# date: {{date}} {{time}}
# 一个页面可以有多个分类
category:
  - 
# 一个页面可以有多个标签
tag:
  - 
  - 
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在文章收藏中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
head:
  - - meta
    - name: keywords
      content: 
    - name: description
      content: 
---

# 2022 年，教你用 VuePress 创造属于自己的「面试八股文」手册

  

[![](https://static.iamjy.com/blog-images/707c668631e2f4f432612552d945ce36~100x100.awebp-webp)

](/user/1654082381026734)

  

\[掘了 ![](https://static.iamjy.com/blog-images/lv-5.d08789d.png-webp)

  

VIP.4 融会贯通

  

![](https://static.iamjy.com/blog-images/07302452a7ad81cb43a173b5cd580237.svg-webp)

  

](/user/1654082381026734)

  

2022 年 02 月 27 日 21:09 ·  阅读 1398

  

关注

  

![](https://static.iamjy.com/blog-images/9dd35cdb14e8479faef5dcdab3a2e99f~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp-webp)

  

.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:16px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:24px;margin-bottom:5px}.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-size:20px}.markdown-body h2{padding-bottom:12px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}

  

> 我正在参与[掘金创作者训练营第 4 期](https://juejin.cn/post/7064192649523101726 "https&#x3A;//juejin.cn/post/7064192649523101726")，点击了解活动详情，一起学习吧！

  

👈2021 年，你是否曾经幻想着拥有一个属于自己的「知识体系文档」或「面试八股文」手册，却迟迟不知如何下手？

  

👉2022 年，是该结束这一切臆想了，本文将介绍如何用 VuePress 搭建一个知识文档，跟着我一起实践起来吧！

  

## 🚄前言

  

近几日想将自己的知识体系【技术栈】梳理成文档（**文档在手，Offer 我有**），方便日后复习所积攒的知识。

  

但我又不想使用 `Halo` 再搭建一个同样的博客，那样太乏味了。

  

> 🪂如果你还不会用服务器搭建一个网站，不妨看看这篇文章：[「最佳实践」如何用服务器优雅地搭建个人博客网站](https://juejin.cn/post/7040081192535719949 "https&#x3A;//juejin.cn/post/7040081192535719949")

  

我对比了网上几种不错的**静态网站生成器**后，发现使用 `VuePress` 搭建知识体系框架很合我的胃口！

  

![](https://static.iamjy.com/blog-images/ce354e7aefcc4392a9a9c0426dd798e3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

👑想想有朝一日要面试的时候，与其从网上拉取各类「面经手册」，还不如就从现在起，搭建一个属于自己的「面试八股文」知识体系框架。

  

## 🎯VuePress 简介

  

VuePress 的诞生初衷是尤大大为了支持 Vue 及其子项目的文档需求。难道不觉得 Vue.js 官网和 VuePress 官网出奇地相似吗？

  

🚀VuePress 生成的页面都是**服务端渲染**而来的，也因此具有非常好的**加载性能**和**搜索引擎优化**（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换为一个完整的单页应用（SPA），其他页面只会在用户浏览时按需加载。

  

> 🥰如果不清楚什么是服务端渲染，可以看这篇文章：[彻底理解服务端渲染（SSR）](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fyacan8%2Fblog%2Fissues%2F30 "https&#x3A;//github.com/yacan8/blog/issues/30")

  

而且，VuePress 网站是由 `Vue`、`Vue Router` 和 `Webpack` 驱动的 SPA，如果你熟悉 Vue 知识，甚至可以开发一个自定义主题。

  

总结下 VuePress 的几个优点：

  

-   **简洁**：以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

-   **Vue 驱动**：享受 Vue + WebPack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 自定义主题。

-   **高性能**：VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

-   内置 Markdown 拓展语法（下文详谈）

-   多语言支持 ( `locales` )

-   响应式布局

-   支持 [PWA](https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FProgressive_web_application "https&#x3A;//en.wikipedia.org/wiki/Progressive_web_application") 模式

-   强大的 Plugin API

-   基于 Git 的最后更新时间 ( `lastUpdated` )

  

## 👑VuePress 配置流程

  

### 安装

  

> VuePress 需要 Node.js >= 8.6 和 npm / yarn 包管理工具

  

（1）先检查一下 node 版本

  

```bash

node -v

  

```

  

（2）确认版本没问题后，创建并进入新目录

  

```bash

mkdir interview && cd interview

  

```

  

（3）使用自己习惯的包管理工具进行初始化

  

```bash

npm init # yarn init

  

```

  

（4）将 VuePress 安装为本地依赖

  

> 官网建议：不使用全局安装 VuePress

  

```bash

npm install -D vuepress # yarn add -D vuepress

  

```

  

> 注意：如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn (opens new window)](https://link.juejin.cn?target=https%3A%2F%2Fclassic.yarnpkg.com%2Fzh-Hans%2F "https&#x3A;//classic.yarnpkg.com/zh-Hans/")而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。

  

（5）创建第一篇文档

  

```bash

mkdir docs && echo '# Hello VuePress' > docs/README.md

  

```

  

（6）在 `package.json` 中添加如下脚本配置

  

```json

"scripts": {

  "docs:dev": "vuepress dev docs",

  "docs:build": "vuepress build docs"

}

  

```

  

（7）本地启动服务器

  

```bash

npm run docs:dev # yarn docs:dev

  

```

  

接下来就可以在 `http://localhost:8080/` 中查看文档效果了。

  

![](https://static.iamjy.com/blog-images/70c669c3e40340acb98fbba832689e4c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

如果有遇到乱码也不用紧张，删除 README.md，重新新建一个然后手动输入 `# Hello VuePress` 即可。

  

![](https://static.iamjy.com/blog-images/f9e667a8e98f4d44a54d8f11da001fae~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

以上流程就完成了 VuePress 的简单安装，但这远远不够，接下来我们来完成一些基本配置。

  

### 基本配置（默认主题配置）

  

> 提示：**这些基本配置仅对默认主题生效**，如果使用自定义主题，选项可能会不同。

  

#### 目录结构

  

VuePress 遵循 "**约定优于配置**" 的理念，推荐以下目录结构：

  

```scss

.

├── docs

│   ├── .vuepress (用于存放全局的配置、组件、静态资源等)

│   │   ├── components (该目录中的 Vue 组件将会被自动注册为全局组件)

│   │   ├── theme (用于存放本地主题)

│   │   │   └── Layout.vue

│   │   ├── public (静态资源目录)

│   │   ├── styles (用于存放样式相关的文件)

│   │   │   ├── index.styl

│   │   │   └── palette.styl

│   │   ├── templates (存储 HTML 模板文件)

│   │   │   ├── dev.html

│   │   │   └── ssr.html

│   │   ├── config.js (配置文件的入口文件)

│   │   └── enhanceApp.js (可选的)

│   │

│   ├── README.md (文档首页)

│   ├── guide (存放文章的目录)

│   │   └── README.md

│   └── config.md

│

└── package.json

  

```

  

对于上述的目录结构，默认页面路由地址如下：

  

| 文件的相对路径            | 页面路由地址         |

| ------------------ | -------------- |

| `/README.md`       | `/`            |

| `/guide/README.md` | `/guide/`      |

| `/config.md`       | `/config.html` |

  

#### 配置站点信息

  

在 `docs` 下创建 `.vuepress/` 文件夹，并在该文件夹下创建 `config.js` 文件作为配置文件的入口文件

  

```bash

mkdir .vuepress && cd .vuepress && touch config.js

  

```

  

在 `docs/.vuepress/config.js` 中配置站点信息

  

```js

module.exports = {

  title: 'Interview',

  description: "专注于分享后端「面试八股文」, 同时收录算法题的题解分析: 包括但不限于 LeetCode、剑指Offer、PTA...",

}

  

```

  

此时网站出现了标题和搜索栏：

  

> 内置搜索栏只会为页面的 `h1`、`h2` 、`h3` 以及 `tags` 构建搜索索引。

>

> 如果你需要全文搜索，需要配置添加额外的插件。

  

![](https://static.iamjy.com/blog-images/4a4a8f24c67b4819a3a68136ae16b131~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

#### 首页

  

在 `docs/README.md` 下添加首页信息

  

```yaml

---

home: true

heroImage: /images/bk.png

heroText: Interview

tagline: put your bio here

actionText: 快速上手 →

actionLink: /zh/guide/

features:

- title: 简洁至上

  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

- title: Vue驱动

  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。

- title: 高性能

  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。

footer: MIT Licensed | Copyright © 2018-present Evan You

---

  
  

```

  

注：要将 **bk.png** 图片放到 `docs/.vuepress/public/images/` **静态资源目录**下，才能使图片生效，其他静态资源也是如此。

  

![](https://static.iamjy.com/blog-images/b65fccf4c2914be4be129c7906dc8621~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

添加首页后的效果：

  

![](https://static.iamjy.com/blog-images/4a8dcbf9d43741469cda8937f1d37595~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

#### 导航栏

  

在 `docs/.vuepress/config.js` 下添加导航栏

  

```js

// docs/.vuepress.config.js

module.exports = {

  themeConfig: {

    // 是否启用导航栏

    // navbar: false,

    nav: [

      // 跳转站内页面

      { text: '导读', link: '/guide/foreword/' },

      // 嵌套导航

      {

        text: 'Java',

        items: [

          {

            text: 'JavaSE',

            items: [

              { text: '111', link: '/guide/javase/1/' },

              { text: '222', link: '/guide/javase/2/' }

            ]

          },

          {

            text: 'JavaEE',

            items: [

              { text: '111', link: '/guide/javaee/1/' },

              { text: '222', link: '/guide/javaee/2/' }

            ]

          }

        ]

      },

      {

        text: 'Spring',

        items: [

          { text: 'SpringMVC', link: '/guide/springmvc/' },

          { text: 'SpringBoot', link: '/guide/springboot/' },

          { text: 'SpringCloud', link: '/guide/springcloud/' },

        ]

      },

      // 跳转站外地址

      { text: '数据结构与算法', link: 'https://leetcode-cn.com/' },

    ],

  }

}

  

```

  

> 展示下几种导航栏的效果

  

![](https://static.iamjy.com/blog-images/10255726f2fb4ca2bec5a35cd1a34bb1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

#### 侧边栏

  

在 `docs/.vuepress/config.js` 中添加侧边栏

  

```js

// docs/.vuepress/config.js

module.exports = {

  themeConfig: {

    nav: [ xxx ],

    sidebar: 'auto'

  }

}

  

```

  

⭐ `sidebar: 'auto'` 会根据文章标题自动生成对应的侧边栏，如下图

  

![](https://static.iamjy.com/blog-images/e532b018034744088d23bb8cc33d1585~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

🚫但是如果这样设置，文章的数量就被导航栏链接个数限制了（也就是说导航栏的每一个链接仅仅对应一篇文章），这显然不是我们想要的结果。

  

🤩我们想要的应该是如下这种侧边栏：**一个导航栏对应一个系列的文章群**，然后每一个侧边栏标题对应一篇文章，这样网站的文章可随时添加，又不会显得导航栏很杂乱！

  

> 图片截自[卡哥网站](https://link.juejin.cn?target=https%3A%2F%2Fprogrammercarl.com%2F "https&#x3A;//programmercarl.com/")

  

![](https://static.iamjy.com/blog-images/fbc82692b29648a1a2e99f11ae321d24~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

🌈不仅要为不同的**页面组**显示不同的侧边栏，还想**将侧边栏划分为多个组**。如何实现？[官网](https://link.juejin.cn?target=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Ftheme%2Fdefault-theme-config.html%23%25E4%25BE%25A7%25E8%25BE%25B9%25E6%25A0%258F%25E5%2588%2586%25E7%25BB%2584 "https&#x3A;//vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84")给出了答案。

  

下面我们依葫芦画瓢给出一个可践行的解决方案：

  

```js

module.exports = {

  themeConfig: {

    nav: [

      { text: '前言', link: '/guide/foreword/' },

      {

        text: '数据结构与算法',

        items: [

          { text: 'LeetCode', link: '/guide/leetcode/read.md' },

          { text: '剑指Offer', link: '/guide/剑指offer/' },

          { text: 'PTA', link: '/guide/pta/' }

        ]

      },

      { text: 'GitHub', link: 'https://github.com/Wu-yikun' },

    ],

    // sidebar: 'auto', // 不使用默认侧边栏

    // 使用自定义侧边栏

    sidebar: {

      "/guide/leetcode/": getBarLeetCode()

    },

  },

}

  

// /guide/leetcode/ 页面组的侧边栏

function getBarLeetCode() {

  return [

    {

      title: 'LeetCode专栏',

      collapsable: false,

      sidebarDepth: 0,

      children: [

        "read.md"

      ]

    },

    {

      title: '数组',

      collapsable: false,

      sidebarDepth: 0,

      children: [

        "array/14.最长公共前缀.md",

        "array/26.删除有序数组中的重复项.md",

        "array/27.移除元素.md",

        "array/35.搜索插入位置.md",

        "array/66.加一.md",

        "array/88.合并两个有序数组.md"

      ]

    },

    {

      title: '动态规划',

      collapsable: false,

      sidebarDepth: 0,

      children: [

        "dp/118.杨辉三角.md",

        "dp/119.杨辉三角 II.md",

        "dp/121.买股票的最佳时机.md"

      ]

    }

  ]

}

  

```

  

🔎内部文件目录结构一览：

  

![](https://static.iamjy.com/blog-images/4e7524f8b06e4f29aba22c865a7b7a3d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

🥴注意：侧边栏的标题不是根据文件名生成的，而是根据文件中的 `h1` 标题自动生成的！

  

![](https://static.iamjy.com/blog-images/2339e80eadb346cfa5d5d76a05a383e3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image-webp)

  

#### 更多配置

  

> VuePress 的基本配置还有很多，这里就不逐一例举了。

  

👨‍💻VuePress 其他配置参考：[vuepress.vuejs.org/zh/theme/de…](https://link.juejin.cn?target=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Ftheme%2Fdefault-theme-config.html "https&#x3A;//vuepress.vuejs.org/zh/theme/default-theme-config.html")

  

### 多语言支持

  

VuePress 还可以配置支持多语言：[传送门](https://link.juejin.cn?target=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fguide%2Fi18n.html%23%25E7%25AB%2599%25E7%2582%25B9%25E5%25A4%259A%25E8%25AF%25AD%25E8%25A8%2580%25E9%2585%258D%25E7%25BD%25AE "https&#x3A;//vuepress.vuejs.org/zh/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE")

  

## 🧩插件

  

安装 `katex` 插件**添加公式支持**

  

```bash

npm install markdown-it-katex -D

  

```

  

在 `docs/.vuepress/config.js` 中添加插件配置

  

```js

module.exports = {

  themeConfig: {

    nav: [],

    sidebar: {},

  },

  markdown: {

    lineNumbers: true,

    externalLinks: {

      target: '_blank'

    },

    extendMarkdown: md => {

      md.set({

        html: true

      })

      md.use(require('markdown-it-katex'))

    }

  },

  head: [

    ['link', {

      rel: 'stylesheet',

      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'

    }],

    ['link', {

      rel: "stylesheet",

      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"

    }]

  ]

}

  

```

  

🚀VuePress 插件库：[vuepress.vuejs.org/zh/plugin/](https://link.juejin.cn?target=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fplugin%2F "https&#x3A;//vuepress.vuejs.org/zh/plugin/")

  

## 🌅Markdown 拓展

  

因为 Vue 就是以 Markdown 为中心的项目结构，所以支持 Markdown 的所有语法。

  

此外，VuePress 还额外拓展了一些 Markdown 的用法，类似 GitHub 对 Markdown 的拓展 [GFM](https://link.juejin.cn?target=https%3A%2F%2Fgfm.docschina.org%2Fzh-hans%2F "https&#x3A;//gfm.docschina.org/zh-hans/") 一样。

  

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

  

😓该容器效果默认**只对默认主题生效**，若要在自定义主题中使用，需要配置插件：[vuepress-plugin-container](https://link.juejin.cn?target=https%3A%2F%2Fvuepress-community.netlify.app%2Fen%2Fplugins%2Fcontainer%2F%23vuepress-plugin-container "https&#x3A;//vuepress-community.netlify.app/en/plugins/container/#vuepress-plugin-container")

  

### 代码块中的行高亮

  

````markdown

```java {3}

class Solution {

  public void hello() {

    System.out.println("Hello World!");

  }

}

````

  

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

  

VuePress 提供了对 [YAML front matter](https://link.juejin.cn?target=https%3A%2F%2Fjekyllrb.com%2Fdocs%2Ffront-matter%2F "https&#x3A;//jekyllrb.com/docs/front-matter/") 开箱即用的支持

  

```yaml

---

title: Blogging Like a Hacker

lang: en-US

---

  

```

  

这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。

  

🚎了解更多，请移步：[vuepress.vuejs.org/zh/guide/fr…](https://link.juejin.cn?target=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fguide%2Ffrontmatter.html "https&#x3A;//vuepress.vuejs.org/zh/guide/frontmatter.html")

  

### Emoji

  

输入

  

```markdown

:tada: :100:

  

```

  

输出：🎉 💯

  

你可以在 [Emoji 库](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmarkdown-it%2Fmarkdown-it-emoji%2Fblob%2Fmaster%2Flib%2Fdata%2Ffull.json "https&#x3A;//github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json")中找到所有的 emoji，其实个人建议使用 `Window + .` 呼出 emoji 库比较方便。

  

### 进阶配置 Markdown

  

VuePress 使用 [markdown-it](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmarkdown-it%2Fmarkdown-it "https&#x3A;//github.com/markdown-it/markdown-it") 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。

  

若想要进一步引入其他配置，则可以在 `.vuepress/config.js` 中修改 `markdown` 选项：

  

> 上文中支持公式的 **markdown-it-katex** 插件就是按照该方法修改配置的。

  

```js

module.exports = {

  markdown: {

    // markdown-it-anchor 的选项

    anchor: { permalink: false },

    // markdown-it-toc 的选项

    toc: { includeLevel: [1, 2] },

    extendMarkdown: md => {

      // 使用更多的 markdown-it 插件!

      md.use(require('markdown-it-xxx'))

    }

  }

}

  

```

  

## 🌍部署 GitHub Pages

  

① 在 `docs/.vuepress/config.js` 中设置正确的 `base`.

  

-   如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 `base` 默认是 `/`。

-   👑如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），那么将 `base` 设置为 `"/<REPO>/"`。

  

② 在项目目录下新建 `deploy.sh`

  

```shell

#!/usr/bin/env sh

  

# 确保脚本抛出遇到的错误

set -e

  

# 生成静态文件

npm run docs:build

  

# 进入生成的文件夹

cd docs/.vuepress/dist

  

# 如果是发布到自定义域名

# echo 'www.example.com' > CNAME

  

git init

git add -A

git commit -m 'deploy'

  

# 注意 📢 修改仓库地址 (下列二选一)

# 如果发布到 https://<USERNAME>.github.io

# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

  

# 如果发布到 https://<USERNAME>.github.io/<REPO>

# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

  

cd -

  

```

  

执行脚本即可部署到对应仓库 **github pages**.

  

## 🚀未完待续

  

😥碎碎念：**昨天**刚用 VuePress 搭建起一个简易的文档架构，**今天**肝了一整天的文章对昨天一些具体细节进行复盘，这两天的精力都被榨干了。虽然以上的内容不能全面覆盖 VuePress，但也讲得八九不离十，对付对付还是可以的！

  

😄相信屏幕前的你也跃跃欲试了，那就赶紧实践起来叭！但要记住一点：**网站只是载体，文章才是本体**；没有优质的文章，再华丽的 UI 界面设计也只是空壳！

  

😝由于目前「技术栈」仍然有限，「面试八股文」内容仍未接触，所以我的站点可能还需要 1 年左右才能正式上线，计划开设两个站点：「**面试八股文**」与「**算法小册**」。

  

😉如果你觉得本文有哪些错误或者需要补充的地方，欢迎随时在评论区指正。

  

.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}