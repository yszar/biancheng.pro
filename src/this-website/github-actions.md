---
title: Github-Actions持续集成部署VuePress到COS
icon: page
isOriginal: true
article: true
headerDepth: 2
author: Jiu Yang
description: 上一部分讲了如何安装配置 VuePress，这部分重点开始讲如何持续集成。
category:
  - 建站指南
tag:
  - vuepress
  - Github-Actions
  - 持续集成
head:
  - - meta
    - name: keywords
      content: github, github-actions, 建站, 教程, 指南, VuePress, COS, 持续集成, 自动部署
    - name: description
      content: 利用Github-Actions部署VuePress到COS
date updated: 2022-11-01 14:34
---

## 前言

上一部分讲了如何安装配置 VuePress，这部分重点开始讲如何持续集成。

本篇的技术栈：

> `COS` + `CDN` + `Serverless Framework` + `GitHub Actions`

## 技术栈介绍

- [COS](https://console.cloud.tencent.com/cos) : 静态网站的源站，腾讯云对象存储
- [CDN](https://console.cloud.tencent.com/cdn) : 腾讯云的内容分发网络
- [Serverless Framework](https://cn.serverless.com/) : 在国内可以直接使用 [`tencent-website`](https://github.com/serverless-components/tencent-website) 组件，去快速部署和管理我们的 `spa/ssg` 网站，它也能够对我们的 `COS` 和 `CDN` 进行管理。后台服务也可以使用其他的组件进行部署和管理。
- [GitHub Actions](https://docs.github.com/cn/actions) : 功能强大，在这里它负责 `CI/CD` 的工作

## 思路步骤

1. 首先先去 **生成静态网站**
2. 上传我们的 **静态网站** 代码到 `COS` 并设置为静态网站，同时指定它的 `history fallback`
3. 设置 `CDN` 加速域名，假如已经设置完成，则再次部署时需要去刷新节点，让变更的资源强制过期

## 实战

### 配置 COS

1. 登录[控制台](https://console.cloud.tencent.com/cos)，创建存储桶

![创建存储桶](https://static.iamjy.com/blog-images/20221101201636.png-webp)

2. 根据自身情况选择地域、给存储桶起名，访问权限建议最好是 `私有读写`

![权限设置](https://static.iamjy.com/blog-images/20221101202051.png-webp)

3. 这里的选项开不开看个人需求，版本控制可以恢复静态文件之前的版本，日志存储需要存在其他存储桶里，这两项都会增加存储数据，进而增加存储桶的费用，请自行斟酌。

![高级选项](https://static.iamjy.com/blog-images/20221101202253.png-webp)

4. 在基础配置 --> 静态网站中开启存储桶的静态网站功能

![静态网站](https://static.iamjy.com/blog-images/20221101202942.png-webp)

### 配置 CDN

1. 我们直接在 `COS` 控制台-->域名与传输管理-->自定义 CDN 加速域名中添加域名

![添加域名](https://static.iamjy.com/blog-images/20221101203454.png-webp)

2. 填入你自己的域名，源站类型选 `静态网站源站`，打开回源鉴权，设置完之后保存。

![](https://static.iamjy.com/blog-images/20221101204152.png-webp)

3. 点击 `去COS函数计算配置`，来配置 CDN 缓存自动刷新。配置如下，域名那里选择你刚才配置好的域名。

![](https://static.iamjy.com/blog-images/20221101205550.png-webp)

4. 点击  HTTPS 证书那里的 `去 CDN 控制台配置`，来配置 HTTPS 证书。
>没有证书的去[这里申请](https://freessl.cn/)

把自己的证书[托管](https://console.cloud.tencent.com/ssl)到腾讯云，可以在控制台直接选择证书，也可以把证书内容直接粘贴到控制台

![](https://static.iamjy.com/blog-images/20221101210229.png-webp)

### Serverless Framework

在项目根目录下新建 `serverless.yml`, 内容如下

```yml
component: website
name: biancheng # 自己修改
stage: dev
inputs:
  src:
    src: src/.vuepress/dist
    index: index.html
    error: index.html
  region: ap-shanghai # 改成你自己的
  bucket: biancheng-123456789 # 改成你自己的
  protocol: https
```

### Github Acitons

打开腾讯云 API 秘钥管理[控制台](https://console.cloud.tencent.com/cam/capi)
记录下你的 `SecretId` 和 `SecretKey`

![](https://static.iamjy.com/blog-images/20221101223656.png-webp)

现在将你的项目部署到 Github，部署好之后进入 Settings-->Secrets-->Actions

点右上角新建两个 `secret`

`Name` 分别为 
- `TENCENT_SECRET_ID`
- `TENCENT_SECRET_KEY`

`Secret` 分别对应刚才的
- `SecretId`
- `SecretKey`

![](https://static.iamjy.com/blog-images/20221101224233.png-webp)



![](https://static.iamjy.com/blog-images/20221101223313.png-webp)

在项目中新建 `.github/workflows/deploy-docs.yml` 新建文件，如果按照我们[之前的步骤](http://localhost:8080/this-website/vuepress.html#%E5%AE%89%E8%A3%85)安装了主题的话，应该已经有这个文件了，将下面代码粘贴进去

```yml

name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - master
  pull_request:
    branches:
      # 确保这是你正在使用的分支名称
      - master

env: # 设置环境变量
  TZ: Asia/Shanghai

jobs:
  build:
    runs-on: ubuntu-latest
    steps:

      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true

      - name: 安装 pnpm
        uses: pnpm/action-setup@v2.2.4
        with:
          version: 7

      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm

      - name: 安装依赖
        run: pnpm install --frozen-lockfile

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          pnpm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        env:
          TENCENT_SECRET_ID: ${{ secrets.TENCENT_SECRET_ID }}
          TENCENT_SECRET_KEY: ${{ secrets.TENCENT_SECRET_KEY }}
          SERVERLESS_PLATFORM_VENDOR: tencent
        run: |
          pnpm add -D @serverless/components
          pnpm components deploy
```

至此，配置基本就完成了，现在每次写完文章提交至 github 时，都会自动构建并部署到我们的 COS 中。