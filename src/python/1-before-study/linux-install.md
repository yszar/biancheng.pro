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

