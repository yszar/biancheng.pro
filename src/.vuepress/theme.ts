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
  iconAssets: "//at.alicdn.com/t/c/font_3743716_a36r8ysdygg.css",

  iconPrefix: "iconfont icon-",

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
        // shortcuts: [
        //   {
        //     name: "Demo",
        //     short_name: "Demo",
        //     url: "/demo/",
        //     icons: [
        //       {
        //         src: "/assets/icon/guide-maskable.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/guide-monochrome.png",
        //         sizes: "192x192",
        //         purpose: "monochrome",
        //         type: "image/png",
        //       },
        //     ],
        //   },
        // ],
      },
    },
  },
});
