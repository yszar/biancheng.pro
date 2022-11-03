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

## 准备工作

- 先来创建一个演示项目

![](https://static.iamjy.com/blog-images/20221104025342.png-webp)

### commitizen

- 然后全局安装 `commitizen`

```bash
npm install -g commitizen
```

### cz-git

- 安装 [cz-git](https://cz-git.qbb.sh/zh/)

> 引用官网
> 工程性更强，轻量级，高度自定义，输出标准格式的 commitizen 适配器和 CLI

- 全局使用

1. 下载全局依赖

```shell
npm install -g cz-git
```

2. 全局配置适配器类型

```shell
echo '{ "path": "cz-git" }' > ~/.czrc
```

- 项目中使用

1. 下载依赖

```shell
npm install -D cz-git
```

### commitlint

- 安装 `commitlint`

```shell
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

- 配置

直接贴配置，照抄就行，命名为 `.commitlintrc.js`，放在项目根目录

想了解配置的去 [cz-git](https://cz-git.qbb.sh/zh/config/)  看

```js
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  extends: ['@commitlint/config-conventional'],
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: '选择关联issue前缀（可选）:',
      customFooterPrefixs: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  新增功能 | A new feature' },
      { value: 'fix', name: 'fix:      🐛  修复缺陷 | A bug fix' },
      { value: 'docs', name: 'docs:     📝  文档更新 | Documentation only changes' },
      { value: 'style', name: 'style:    💄  代码格式 | Changes that do not affect the meaning of the code' },
      { value: 'refactor', name: 'refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature' },
      { value: 'perf', name: 'perf:     ⚡️  性能提升 | A code change that improves performance' },
      { value: 'test', name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests' },
      { value: 'build', name: 'build:    📦️   构建相关 | Changes that affect the build system or external dependencies' },
      { value: 'ci', name: 'ci:       🎡  持续集成 | Changes to our CI configuration files and scripts' },
      { value: 'revert', name: 'revert:   ⏪️  回退代码 | Revert to a commit' },
      { value: 'chore', name: 'chore:    🔨  其他修改 | Other changes that do not modify src or test files' },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixs: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' }
    ],
    customIssuePrefixsAlign: 'top',
    emptyIssuePrefixsAlias: 'skip',
    customIssuePrefixsAlias: 'custom',
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
```

### Husky

```
```

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
