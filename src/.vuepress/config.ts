import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",

  title: "编程学习网",
  
  description: "快来！一起来学编程！",

  theme,

  shouldPrefetch: false,
});
