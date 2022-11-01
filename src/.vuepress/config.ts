import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",

  title: "编程学习网",
  
  description: "快来！一起来学编程！",

  head: [
    // [
    //   "script",{},
    //   `
    //     var _hmt = _hmt || [];
    //     (function() {
    //       var hm = document.createElement("script");
    //       hm.src = "https://hm.baidu.com/hm.js?5230ac143650bf5eb3c14f3fb9b1d3ec";
    //       var s = document.getElementsByTagName("script")[0]; 
    //       s.parentNode.insertBefore(hm, s);
    //     })();
    //   `
    // ],
    // [
    //   "link",
    //   {
    //     rel: "stylesheet",
    //     href: "//at.alicdn.com/t/c/font_3743716_60ojqf10j4u.css",
    //   },
    // ],
  ],

  theme,

  shouldPrefetch: false,


});
