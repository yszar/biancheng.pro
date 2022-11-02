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

![](https://static.iamjy.com/blog-images/20221102154017.png-webp)

## 启用

之后运行 `. ./proxy.sh set` 就可以自动设置代理了。`unset` 可以取消代理，`test` 可以查看代理状态，能够用来检查环境变量是否被正确修改。

::: info
运行的时候不要忘记之前的 `.`，或者使用 `source ./proxy.sh set`，只有这样才能够修改环境变量

直接运行例如 `./proxy.sh set` 或者 `sh proxy.sh set`，这样会是运行在一个子 shell 中，对当前 shell 没有效果
:::

可以在 `~/.bashrc` 中选择性的加上下面两句话，记得**将里面的路径修改成你放这个脚本的路径**。

```bash
alias proxy="source /path/to/proxy.sh"
. /path/to/proxy.sh set
```

第一句话可以为这个脚本设置别名 `proxy`，这样在任何路径下都可以通过 `proxy` 命令使用这个脚本了，之后在任何路径下，都可以随时都可以通过输入 `proxy unset` 来暂时取消代理。

第二句话就是在每次 shell 启动的时候运行该脚本实现自动设置代理，这样以后不用额外操作就默认设置好代理