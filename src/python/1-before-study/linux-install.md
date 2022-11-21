---
# 这是文章的标题
title: Linux 安装 Python
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

#### 下载源码

在 Ubuntu 构建 Python 3.10 源码是一个相对简单的过程，只需几分钟。在开始下载 python 源码之前请先检查是否存在新的 python 版本。

你可以[点击这里](https://www.python.org/downloads/source/) 查看可下载的 python 源码版本，如果有，理论上可以使用较新版本的 python 源码 URL 替换 `curl` 命令的 URL。

首先运行 `apt`  命令更新软件源并安装构建 Python 源码所需的依赖软件，例如 `build-essential`，`curl`，`c/c++`开发工具等。

然后运行 `curl` 命令下载 Python 源码 Python 源码存档文件。在撰写本文时，最新版本是 3.10.8

```shell
sudo apt update
# 下面这条命令是安装编译所需的依赖
sudo apt install build-essential zlib1g-dev libncurses5-dev \
libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev \
libreadline-dev libffi-dev curl libbz2-dev curl -y
# 这条命令是把 Python 源码下载到本机
curl -O https://www.python.org/ftp/python/3.10.8/Python-3.10.8.tar.xz
```

#### 配置 Python 构建

下载完成后，解压缩存档文件Python-3.10.8.tar.xz。运行cd命令切换到Python源码目录并运行configure脚本。

脚本将会执行大量检查，以确保系统上的所有依赖项都存在。--enable-optimizations 选项将通过运行多个测试来优化 Python 二进制文件。>配置 Python 构建
下载完成后，解压缩存档文件Python-3.10.8.tar.xz。运行cd命令切换到Python源码目录并运行configure脚本。

脚本将会执行大量检查，以确保系统上的所有依赖项都存在。--enable-optimizations 选项将通过运行多个测试来优化 Python 二进制文件。)

`--enable-optimizations` 选项将会使的 python 源码构建过程变慢。如果你需要添加更多选项，可以运行 `./configure --help` 命令查看可以配置的选项。

```shell
tar -xf Python-3.10.8.tar.xz
cd Python-3.10.8/
./configure --enable-optimizations
```

#### 编译 Python

运行 `make -j4` 开始启动构建 Python 源码。你可以修改 `-j` 后面的数字，该数值与你的计算机处理器核数一致。

您可以在终端运行 `nproc` 命令来找到 CPU 核心数。构建完成后，请以具有 [sudo权限](https://www.myfreax.com/how-to-create-a-sudo-user-on-debian/)的用户运行 `make altinstall` 命令，安装 Python 二进制文件。

这里不使用标准 `make install` ，是因为它将覆盖系统默认 `python3` 二进制文件。至此，你已在 Ubuntu 20.04 安装 Python 3.10。

您可以运行 `python3.10 --version` 命令确定是否安装成功，该命令将会打印 python 的版本号。

```bash
make -j 4
sudo make altinstall
python3.10 --version
```