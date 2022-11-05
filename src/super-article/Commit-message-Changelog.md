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

## 规范化提交

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

- 安装 Husky 用来校验我们的提交

```shell
# Install Husky v6
npm install husky --save-dev
# or
yarn add husky --dev

# Activate hooks
npx husky install
# or
yarn husky install
```

- 添加 hook

```shell
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

### 效果

运行 `git cz` 看效果

![](https://static.iamjy.com/blog-images/20221104031645.png-webp)

## 自动生成 changelog 

> [!warning] 注意
> 目前放弃这种方式，改用  [release-it](#Release-it)


### standard -version

用到的工具 [standard-version](https://github.com/conventional-changelog/standard-version)

#### 这个东西可以做什么 ?

- 自动升级版本
- 自动打 `tag`
- 自动生成 `changelog`

-  版本构成
版本号 `major. minor. patch`

- 默认的版本更新规则
`feature` 会更新 `minor`
`bug fix` 会更新 `patch`
`BREAKING CHANGES` 会更新 `major`

#### 手动控制版本更新

-  直接升级 `major`

`package.json`

```json
"scripts": {
"release-major": "standard-version --release-as major",
}
```

-  直接升级 `minor`

`package.json`

```json
"scripts": {
"release-minor": "standard-version --release-as minor",
}
```

-  直接升级 `patch`

`package. json`

```json
"scripts": {
"release-patch": "standard-version --release-as patch",
}
```

#### 按默认规则升级版本号

`package. json`

```json
"scripts": {
"release": "standard-version",
}
```

#### 强制打一个静态版本号

`package. json`

```json
"scripts": {
"release-static": "standard-version --release-as 3.3.3",
}
```

#### 第一个版本 (该方式不会升级版本号)


```shell
# npm run script
npm run release -- --first-release
# global bin
standard-version --first-release
# npx
npx standard-version --first-release
```

#### 配置哪些 commit 消息写入 changelog

`hidden` 属性值控制是否将该类型的 commit 消息写入 `changlog`, 不填的情况下默认是:`false`

#### 配置文件

> 命名为 `.versionrc.js` 放在项目根目录，美化你的 changelog

```js
module.exports = {
    "types": [
      { "type": "feat", "section": "✨ Features | 新功能" },
      { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
      { "type": "init", "section": "🎉 Init | 初始化" },
      { "type": "docs", "section": "✏️ Documentation | 文档" },
      { "type": "style", "section": "💄 Styles | 风格" },
      { "type": "refactor", "section": "♻️ Code Refactoring | 代码重构" },
      { "type": "perf", "section": "⚡ Performance Improvements | 性能优化" },
      { "type": "test", "section": "✅ Tests | 测试" },
      { "type": "revert", "section": "⏪ Revert | 回退" },
      { "type": "build", "section": "📦‍ Build System | 打包构建" },
      { "type": "chore", "section": "🚀 Chore | 构建/工程依赖/工具" },
      { "type": "ci", "section": "👷 Continuous Integration | CI 配置" }
    ]
  }
```

贴上我最终的 `package.json` 的 `scripts` 部分

```json
  "scripts": {
    "commit": "git cz",
    "release": "standard-version",
    "release-beta": "standard-version -p release --skip.changelog false --skip.tag false",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md",
    "release:major": "standard-version -r major -n",
    "release:minor": "standard-version -r minor -n",
    "release:patch": "standard-version -r patch -n"
  },
```

### Release-it 

先简单记录一下过程

### 安装

- 本体
```shell
npm i -D release-it
```

- 插件
```
npm i -D @release-it/conventional-changelog
```

