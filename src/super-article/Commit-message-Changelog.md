---
# 这是文章的标题
title: Git Commit规范化提交+自动验证+自动生成 
 changelog
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
date: 2022-11-04 02:10:02
# 页面内容描述
description: 在日常工作中，大多数小伙伴对于 Commit message 信息都是简单写写，没有很好的重视，这对于项目的管理和维护来说，无疑是不友好的。本篇文章主要是结合我自己的使用经验来和大家分享一下 git commit 的一些规范，让你的 log 不仅“好看”还“实用”。
# 一个页面可以有多个分类
category: [工具软件]
# 一个页面可以有多个标签
tag: [git, 规范化提交]
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
# head:
#   - - meta
#     - name: keywords
#       content: 
#     - name: description
#       content: 
---

## 为什么要规范 commit message

让我们先来看一个不太规范的 commit 记录：

![](https://static.iamjy.com/blog-images/20221104022133.png-webp)

- 修改了哪部分文本？😕
- 解决了哪几个问题？😕
- 修复了哪个 bug？😕
- 创建了哪个文件？😕

这种 commit 信息对于想要从中获取有效信息的人来说无疑是一种致命的打击。

我们再来看一个非常规范的，也是社区里面比较流行的 `Angular规范` commit

其实我就是去 [Angular](https://github.com/angular) 的 github 截的图

![](https://static.iamjy.com/blog-images/20221104022610.png-webp)

是不是一目了然？

上图中这种规范的 commit 信息首先提供了更多的历史信息，方便快速浏览。其次，可以过滤某些 commit（比如文档改动），便于快速查找信息。

## Angular 团队的 commit 规范

对于 `git` 提交规范来说，不同的团队可能会有不同的标准，推荐目前比较流行的 [Angular 团队规范]( https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fangular%2Fangular.js%2Fblob%2Fmaster%2FDEVELOPERS.md%23-git-commit-guidelines " https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines" ) 延伸出的[Conventional Commits specification（约定式提交）]( https://link.juejin.cn/?target=https%3A%2F%2Fwww.conventionalcommits.org%2Fzh-hans%2Fv1.0.0%2F " https://www.conventionalcommits.org/zh-hans/v1.0.0/" ) 。

### 约定式提交规范要求

要求如下

```text
<type> [optional scope]: <description>

[optional body]

[optional footer(s)]
```

翻译过来就是：

```text
<类型> [可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

看个详细的栗子，依旧是在 Angual 团队的地盘截的图

![](https://static.iamjy.com/blog-images/20221104023631.png-webp)
  
Commit message 的三个部分：Header，Body 和 Footer。

### Header
`Header` 部分只有一行，包括三个字段：`type`（必需）、`scope`（可选）和 `subject`（必需）。

#### type

`type` : 用于说明 commit 的类型。一般有以下几种:
- **feat**: 新增 feature
- **fix**: 修复 bug
- **docs**: 仅仅修改了文档，如 readme. md
- **style**: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。
- **refactor**: 代码重构，没有新增功能或修复 bug
- **perf**: 优化相关，如提升性能、用户体验等。
- **test**: 测试用例，包括单元测试、集成测试。
- **chore**: 改变构建流程、或者增加依赖库、工具等。
- **revert**: 版本回滚

#### scope

`scope` : 用于说明 commit 影响的范围，比如: views, component, utils, test...

#### subject

`subject` : commit 目的的简短描述


###  Body

对本次 commit 修改内容的具体描述, 可以分为多行。如下图:

```text
# body: 72-character wrapped. This should answer:
# * Why was this change necessary?
# * How does it address the problem?
# * Are there any side effects?
# initial commit
```

### Footer

一些备注, 通常是 `BREAKING CHANGE`(当前代码与上一个版本不兼容) 或修复的 `bug`(关闭 Issue) 的链接。

所以问题来了，如果每次 commit 都这么写，着实有点痛苦，比较麻烦。所以就诞生了 Commitizen 这样的工具，只需要使用 `git cz` 命令代替 `git commit` 就可以帮我们书写 commit 信息，非常强大！

你可以在 Markdown 的 Frontmatter 中设置页面信息。

- 作者设置为 Ms.Hope。
- 写作日期为 2020 年 1 月 1 日
- 分类为 “使用指南”
- 标签为 “页面配置” 和 “使用指南”

## 页面内容

```ad-info
title: title
Override the color. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. 
```


> [!info]+ test11111 
> 

```ad-success
collapse: closed
1111111
```
```ts
111
```

```


```

> [!success] 222
> None, no title 

> [!success]+
> Open no title

> [!success]- 11
> 11






你可以自由在这里书写你的 Markdown。

::: tip

- 你可以将图片和 Markdown 文件放置在一起，但是你需要使用**相对链接**`./` 进行引用。

- 对于 `.vuepress/public` 文件夹的图片，请使用绝对链接 `/` 进行引用。

:::

主题包含了一个自定义徽章可以使用:

> 文字结尾应该有深蓝色的 徽章文字 徽章。 <Badge text="徽章文字" color="#242378" />

## 页面结构

此页面应当包含:

- [路径导航](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/breadcrumb.html)
- [标题和页面信息](https://vuepress-theme-hope.github.io/v2/zh/guide/feature/page-info.html)
- [TOC (文章标题列表)](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/page.html#标题列表)
- [贡献者、更新时间等页面元信息](https://vuepress-theme-hope.github.io/v2/guide/feature/meta.html)
- [评论](https://vuepress-theme-hope.github.io/v2/zh/guide/feature/comment.html)
- [导航栏](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/navbar.html)
- [侧边栏](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/sidebar.html)
- [页脚](https://vuepress-theme-hope.github.io/v2/zh/guide/layout/footer.html)
- 返回顶部按钮

你可以通过主题选项和页面 Frontmatter 自定义它们。
