---
# 这是文章的标题
title: WSL2 通过宿主机 Windows 使用代理
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
date: 2022-11-02 15:18:35
# 页面内容描述
description: 
# 一个页面可以有多个分类
category: [工具软件]
# 一个页面可以有多个标签
tag: [WSL2, 代理]
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在文章收藏中
# star: true
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

## WSL 中获取宿主机 IP

WSL 每次启动的时候都会有不同的 IP 地址，所以并不能直接用静态的方式来设置代理。WSL2 会把 IP 写在 `/etc/resolv.conf` 中，因此可以用 `cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }'` 这条指令获得宿主机 IP 。

![](https://static.iamjy.com/blog-images/20221102152541.png-webp)

WSL2 自己的 IP 可以用 `hostname -I | awk '{print $1}'` 得到。

![](https://static.iamjy.com/blog-images/20221102152636.png-webp)

## 设置代理

### 终端代理

通过脚本的方式，每次重启终端代理不需要重新设置

::: warning
💡注意: 第四行改成自己的端口
:::
```bash
#!/bin/sh
hostip=$(cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }')
wslip=$(hostname -I | awk '{print $1}')
port=7890 # 这里一定要改成你的

PROXY_HTTP="http://${hostip}:${port}"

set_proxy(){
    export http_proxy="${PROXY_HTTP}"
    export HTTP_PROXY="${PROXY_HTTP}"

    export https_proxy="${PROXY_HTTP}"
    export HTTPS_proxy="${PROXY_HTTP}"
}

unset_proxy(){
    unset http_proxy
    unset HTTP_PROXY
    unset https_proxy
    unset HTTPS_PROXY
}

test_setting(){
    echo "Host ip:" ${hostip}
    echo "WSL ip:" ${wslip}
    echo "Current proxy:" $https_proxy
}

if [ "$1" = "set" ]
then
    set_proxy

elif [ "$1" = "unset" ]
then
    unset_proxy

elif [ "$1" = "test" ]
then
    test_setting
else
    echo "Unsupported arguments."
fi
```

### Git 设置代理

```bash
// 添加代理
git config --global http.proxy "${PROXY_HTTP}"
git config --global https.proxy "${PROXY_HTTP}"

// 移除代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### 代理软件设置

代理软件中要打开允许局域网访问，我用的 Clash


之后运行 `. ./proxy.sh set` 就可以自动设置代理了。`unset` 可以取消代理，`test` 可以查看代理状态，能够用来检查环境变量是否被正确修改。


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
