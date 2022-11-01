---
title: Github-Actions持续集成部署VuePress到COS
icon: page
isOriginal: true
article: true
headerDepth: 2
author: Jiu Yang
category:
  - 建站指南
tag:
  - vuepress
  - Github-Actions
  - 持续集成
  - 自动部署
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
<!-- more -->
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

接下来顺着刚刚的思路，开始想象一个干净的的 `linux docker` 容器中, 需要哪些前置条件来支撑部署这个行为呢？

显然，`nodejs` 环境是必须安装的，`serverless framework` 也是需要的，而 `yarn` 就看个人喜好了

笔者个人比较喜欢使用 `yarn.lock` 的文件 hash 值作为 cache key 的一部分，于是 `yarn` 在此处我也安装了

于是就很容易写出以下的流程：

```
setup-node
// 限定一下 yarn 的版本
npm install -g yarn@^1.x
// 安装依赖包 npm ci 同理
yarn --prod
yarn add -D @serverless/components
// 生成与部署 npx 同理
yarn generate
yarn components deploy 
```

> 这里为什么安装了 `@serverless/components` 可以见 [@serverless/components 代码简析](https://zhuanlan.zhihu.com/p/371259078) 这篇文章

然而 , 按照这个流程写 Github Actions 的 Yaml 还是行不通的

因为容器内的 `serverless framework` ，缺少云厂商的授权

此时呢，就可以把我们的 `TENCENT_SECRET_ID` 和 `TENCENT_SECRET_KEY` 写入项目仓库中的 `Actions secrets` 中

具体操作可以使用，仓库的 `Settings` > `Secrets` > `New repository secret` 菜单

> 这种方式可以保护我们的秘钥, 见 [详细文档](https://docs.github.com/en/actions/reference/encrypted-secrets)\
> 重要：一定要保护好我们的秘钥!!! 不要显示在 action 的输出里 !!!

因为从本质上来说使用 Serverless Framework `.env` 的部署方式，其实就是环境变量的部署方式

所以我们给 `action` 中的 `env` 直接赋值也是可以的，即

```
 - name: Serverless deploy
        shell: bash
        env:
          TENCENT_SECRET_ID: ${{ secrets.TENCENT_SECRET_ID }}
          TENCENT_SECRET_KEY: ${{ secrets.TENCENT_SECRET_KEY }}
        run: yarn components deploy 
```

### [](#%E9%83%A8%E7%BD%B2%E5%A4%B1%E8%B4%A5)部署失败?

然而此时，会发现去执行 `yarn components deploy` 部署，还是会部署失败，还提醒我们，需要 `serverless login` , 难道我们授权的腾讯云凭证不起作用？

其实并非如此，因为之前做 [源码简析](( <https://zhuanlan.zhihu.com/p/371259078> )) 的时候，也说过，国内国外跑的是不同的命令，且请求的也是不同的域名，判断的方式，在部署的时候，主要依靠 `isChinaUser` 这个方法来区分

我们来看看这个方法都做了什么？

```
const isChinaUser = () => {
  let result;
  if (
    process.env.SERVERLESS_PLATFORM_VENDOR === 'tencent' ||
    process.env.SLS_GEO_LOCATION === 'cn'
  ) {
    result = true;
  } else if (process.env.SERVERLESS_PLATFORM_VENDOR === 'aws') {
    result = false;
  } else {
    result = new Intl.DateTimeFormat('en', { timeZoneName: 'long' })
      .format()
      .includes('China Standard Time');
  }
  return result;
}; 
```

从代码可知，我们可以注入环境变量的方式 , 来改变 `isChinaUser` 的判断逻辑结果，而且因为 Github 的容器啊，默认时区其实都是 UTC，所以会导致 `Intl.DateTimeFormat` 这种判断失败。

那么就简单了，我们只需要部署时，在 `env` 中加一行 `SERVERLESS_PLATFORM_VENDOR: tencent`

```
 env:
          TENCENT_SECRET_ID: ${{ secrets.TENCENT_SECRET_ID }}
          TENCENT_SECRET_KEY: ${{ secrets.TENCENT_SECRET_KEY }}
          SERVERLESS_PLATFORM_VENDOR: tencent 
```

就可以顺利的部署了成功了

[demo在此](https://github.com/sonofmagic/Jamstack-with-serverless-framework/blob/main/.github/workflows/main.yml)

## [](#%E8%BF%9B%E9%98%B6)进阶

### [](#%E7%BC%93%E5%AD%98)缓存

我们可以利用 `actions/cache@v2` 把 `yarn cache dir` 中的包给缓存起来

这样能够大大加速 yarn 安装包的一个时间

缓存的 `key`，可以利用提交的 `yarn. lock` 文件的 `hash` 值组合而成的一个键, `package-lock. json` 同理

具体配置项见 [actions/cache](https://github.com/actions/cache)

### [](#%E6%97%B6%E5%8C%BA)时区

由于容器默认时区是 UTC, 而中国属于东八区 `UTC+8`, 也就是 `Asia/Shanghai` , 假如我们不预先设置为这个时区，就会导致在构建打包时，nodejs 的时间产生问题, 进而影响到我们打包工具。

这里就可以使用 `szenius/set-timezone@v1.0` 这个 `Action` 了

只需要把 `runner os` 的时区设置为 `Asia/Shanghai`, 打包时时区问题就解决了

### [](#%E6%A0%B7%E4%BE%8B)样例

[样例在此](https://github.com/sonofmagic/Jamstack-with-serverless-framework/blob/main/.github/workflows/main-cache.yml)

## [](#%E6%80%BB%E7%BB%93)总结

其实所有的 `Serverless Framework` 的组件，都可以通过这种方式，进行持续化集成。

这块我这篇文章，写的还是比较入门的，项目场景也很简单。

如果有其他更好的解决方案，也欢迎一起进行探讨交流。
