---
# 这是文章的标题
title: 页面配置
# 这是页面的图标
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
date: 2022-11-02 03:26:33
# 页面内容描述
description
# 一个页面可以有多个分类
category: [工具软件]
# 一个页面可以有多个标签
tag: [工具软件, obsidian]
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在文章收藏中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## 库的目的

这个库是用来写技术笔记打造个人知识库的，为避免忘记以及其他人下载之后能够看懂，特此记录 

库用的 blog 会被 vuepress 渲染，所以在满足需求的情况下尽量使用兼容的 Markdown+插件的语法

## 库所使用的插件

### 插件

* [点我安装](obsidian://show-plugin?id=obsidian-git)  | [**Obsidian git**](https://github.com/denolehov/obsidian-git) 用来同步 github 和多平台
>注意不要同步. obsidian 文件夹，在 gitignore 里面配置一下就可了，有很多文件实时变更每次都冲突
* [点我安装](obsidian://show-plugin?id=obsidian-show-file-path)  | [**show current file path**](https://github.com/ravimashru/obsidian-show-file-path) 右下角显示文件路径点击可复制
* [点我安装](obsidian://show-plugin?id=obsidian-auto-pair-chinese-symbol)  | [**Auto pair chinese symbol**](https://github.com/renmu123/obsidian-auto-pair-chinese-symbol) 中文符号自动成对
* [点我安装](obsidian://show-plugin?id=remember-cursor-position)  | [**Remember cursor position**](https://github.com/dy-sh/obsidian-remember-cursor-position) 切换文件时记住鼠标位置
* [点我安装](obsidian://show-plugin?id=search-on-internet)  | [**Search on Internet**](https://github.com/HEmile/obsidian-search-on-internet) 搜索
*   **Mind Map** 思维导图
    *  [点我安装](obsidian://show-plugin?id=obsidian-enhancing-mindmap)  | [**enhancing mindmap**](https://github.com/MarkMindCkm/obsidian-enhancing-mindmap) 可以编辑的思维导图，兼容 md 语法
    >mindmap-plugin: basic 在 formatter 里面加入这一个启用
* [点我安装](obsidian://show-plugin?id=cm-editor-syntax-highlight-obsidian)  [**Editor Syntax Highlight**](https://github.com/deathau/cm-editor-syntax-highlight-obsidian) 代码高亮
* [点我安装](obsidian://show-plugin?id=nldates-obsidian)  [**Natural Language Dates**](https://github.com/argenos/nldates-obsidian) 按@输出日期
    *   `YYYY-MM-DD dddd` 表示年-月-日星期
* [点我安装](obsidian://show-plugin?id=calendar)  [**calendar**](https://github.com/liamcain/obsidian-calendar-plugin) 日历
    *   配合日记
    * [点我安装](obsidian://show-plugin?id=periodic-notes)  [obsidian-periodic-notes](https://github.com/liamcain/obsidian-periodic-notes) 自动日报周报分类，看插件 github 官网怎么配置的路径
    *   `MM[月]/[第]WW[周]/YY-MM-DD[日报]`,`MM[月]/[第]WW[周]/[周报]YYYY-WW`
* [点我安装](obsidian://show-plugin?id=obsidian-admonition)  [**Admonition**](https://github.com/valentine195/obsidian-admonition) 功能提示块
    *   语法在vuepress上可能会渲染为白色代码块可以接受
    *   类型有ad-(type)
        *   `note`,`abstract`,`info`,`tip`,`success`,`question`,`warning`,`failure`,`danger`,`bug`,`example`,`quote`
        *   [样式参考 (opens new window)](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#inline-blocks)
    *   主要用的参数写在内容第一行,`collapse:open/none`,`title:xxx`，一般只用这俩就行
* [点我安装](obsidian://show-plugin?id=note-refactor-obsidian)  [**Note Refactor**](https://github.com/lynchjames/note-refactor-obsidian) 大文档拆分 wiki 链接 
* [点我安装](obsidian://show-plugin?id=obsidian-auto-link-title)  [**Auto Link Title**](https://github.com/zolrath/obsidian-auto-link-title) 粘贴链接的时候自动抓取网页的标题，填充为文字
    *   关闭自动替换链接
* [点我安装](obsidian://show-plugin?id=url-into-selection)  [**Paste URL into Selection**](https://github.com/denolehov/obsidian-url-into-selection) 链接粘贴自动标题
    *   剪贴板链接「[https://example.com (opens new window)](https://example.com/)」选中一段文字「TEXT」粘贴，这个链接就会和文字结合在一起成为  
        `[TEXT](https://example.com)`
*   **Consistent attachments and links** 转换插件
*   使用双链接时需要回来重新嵌入一下为文件格式以便兼容
*   设置快捷键为`ctrl+l` 把双链全转为标准md，双链都转换,但是只会在本目录下配合下面使用
*   设置快捷键为`ctrl+p` 把文件链接都转换为相对链接，双链转换完后用这个重新确定路径，多个重名时会是遍历目录的第一个
*   直接使用转换插件把所有选项全关了，留下move attachments with note和update links
*   **Attachment Name Formatting** 自动重命名附件
    *   移动文档的时候提前关掉
    *   默认粘贴附件和图片空格会被替换成%，vuepress无法渲染
    *   进入JS`main.js` 把`join(" ")`替换为`join("_")` 这样就可以随便渲染了
    *   ~还是没解决图片路径前面加一个`./` 的问题~ 脚本解决了
*   **dataview** 最核心的插件之一，但我不会//TODO
* [点我安装](obsidian://show-plugin?id=tag-wrangler)  [**Tag Wrangler**](https://github.com/pjeby/tag-wrangler) 标签管理，tag 可以批量重命名，但是 tag 必须**不能含有符号**，可以有 emoji
* [点我安装](obsidian://show-plugin?id=various-complements)  [**Various Complements**](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin) 一些自动补全打开当前文件夹和 dict，IME 选项，关掉 space after
*   **Media Extended** 多媒体嵌入插件
    * [点我安装](obsidian://show-plugin?id=mx-bili-plugin)  [**Media Extended BiliBili Plugin**](https://github.com/aidenlx/mx-bili-plugin) 支持 bilibili
    *   插入链接即可，在预览模式中点击链接就会有一个单独的播放器播放，再切回编辑模式就可以一边看一边写
    *   设置快捷键`command+t`通过播放器获得时间戳，可以生成一个带时间戳的链接，点击就可以跳转，渲染之后也可以点开。

### [#](#css) CSS

下面有附代码，建立一个css文件他自己会读取

1.  主题使用的是Obsidian Nord
2.  圆点调整，不同层级用不同的样式没有实现，但是修改之后可接受
3.  添加链接的小文件图标
4.  大纲连接线和文件层级连接线
5.  背景图片太复杂而且还要多一个文件直接放弃，可自定义透明度
6.  所使用的自定义[CSS (opens new window)](https://1drv.ms/u/s!Ave4mfYaItDJhMdWWLsPoUdrShE2lw?e=H3snSQ)

[#](#库的部署与同步) 库的部署与同步
---------------------

![](https://www.ooowl.fun/assets/img/Obsidian_images_1.67500be0.png)

[#](#库写作时的注意事项) 库写作时的注意事项
-------------------------

[博客写作的注意事项](/docs/README/blogReadme.html#^255951)^5c3a93

*   写作时双链就只是好看，直接用Markdown标准文件链接渲染的时候还不会出错
*   使用 [功能提示块](#%5E5925eb)的时候如果要包含代码，外面用四层\`里面用三层点,不要用拓展语法`!!!`和`???` vuepress中不渲染，但是嵌套代码块会渲染，就用这仨功能就行了
*   ~OneNote链接复制出来之后粘贴到md里，使用时直接复制链接在OneNote里面粘贴点击就跳到了~ OneNote准备弃用了，goodnotes替代吧
*   插入时间设置 `YYYY-MM-DD HH:mm:ss` @可以直接在vuepress里面渲染生成时间轴
*   标签使用#tag，不要有空格,文章内的标签不要使用符号，vuepress的meta信息里只能有单层标签，所以不要用嵌套标签 ^d604fe
*   嵌入文件的时候，\[|300\]中加入数字调整Obsidian内显示大小是可以兼容的~~(**./** static/example.png)路径前面一定要加 ./vuepress才能渲染,双链的文件也不要忘记~~已经用脚本解决了
*   块引用是`[[^^]]`和`[[#]]`,是兼容的，只是不渲染
*   不要使用Obsidian中的自带注释，直接用html的注释
*   metadata信息看[博客的说明](/docs/README/blogReadme.html#^18f313)， 建立vuepress文章的模板，创建新文章之后直接配置开写
*   大附件建议都扔Onedrive放个链接
*   \==嵌入非图片jpg png svg文件的时候，文件名不要带有英文==
*   高亮前面加一个空格才能被渲染,必须前面有空格后面没有,出问题的时候查找一下是不是 `==` 的问题
*   dataview //TODO
*   生成日报周报

[#](#关于环境备份) 关于环境备份
-------------------

*   将整个valut环境养老备份,就是valut下的Obsidian
*   软件本体 mac windows linux安装包，ios没有，版本为0.13.23
*   插件都在.obsidian中，自己修改的插件Attachment Name Formatting-%3Emain.js,还有custom.css
*   .obsidian备份为obsidian搞新库的时候就替换掉就行
*   博客的备份本地一份，github一份和本能同步，养老库备份一份没有node\_modules的
*   转换脚本养老库备份一份，本地一份放着
*   上传OneDrive

[#](#一些示例) 一些示例
---------------

ad-note collapse: true title: ▪️CSS 我能吞下玻璃而不伤身体  
I can eat glass, it does not hurt me

[dataview的教程 (opens new window)](https://zhuanlan.zhihu.com/p/393550306) [领导年终奖50万，却只分给我100块\_哔哩哔哩\_bilibili (opens new window)](https://www.bilibili.com/video/BV1eS4y1C7wu)

\[^1\]: [Django 文档 | Django 文档 | Django (opens new window)](https://docs.djangoproject.com/zh-hans/2.2/)  
\[^2\]: [目录结构 | VuePress (opens new window)](https://v1.vuepress.vuejs.org/zh/guide/directory-structure.html)>)