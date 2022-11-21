---
# 这是文章的标题
title: 页面配置
# 这是页面的图标
icon: yemian
# 是否原创
isOriginal: true
# 是否加入文章列表
article: false
# 展开深度
headerDepth: 2
# 这是侧边栏的顺序
order: 5
# 设置作者
author: Jiu Yang
# 设置写作时间
date: 2022-11-21 12:29:34
# 页面内容描述
# description: 
# 一个页面可以有多个分类
# category: []
# 一个页面可以有多个标签
# tag: []
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

大多数的 Linux 系统都默认自带了 Python。有的甚至同时自带 Python2. x 和 Python3.x。

打开 Linux 的终端，输入 `python -V` 命令就可以检测当前系统安装了什么版本的 Python

```bash
❯ python -V
Python 3.10.7
```

我们以 Ubuntu  来演示安装过程

## 安装

### apt

```bash
sudo apt-get update
sudo apt-get install python3
```

等待以上两条命令执行完成，在终端输入 `python3 -V` 命令，就可以看到 Python3 的最新版本了。

### 编译安装

在 Ubuntu 构建 Python 3.10 源码是一个相对简单的过程，只需几分钟。在开始下载 python 源码之前请先检查是否存在新的 python 版本。

你可以点击此处查看可下载的python源码版本，如果有，理论上可以使用较新版本的python源码URL替换curl命令的URL。

首先运行apt命令更新软件源并安装构建Python源码所需的依赖软件，例如build-essential，curl，c/c++开发工具等。

然后运行curl命令下载Python源码Python源码存档文件。在撰写本文时，最新版本是3.10.8。

```shell
sudo apt update
# 下面这条命令是安装编译所需的依赖
sudo apt install build-essential zlib1g-dev libncurses5-dev \
libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev \
libreadline-dev libffi-dev curl libbz2-dev curl -y
# 这条命令是把 Python 源码下载到本机
curl -O https://www.python.org/ftp/python/3.10.8/Python-3.10.8.tar.xz
```

