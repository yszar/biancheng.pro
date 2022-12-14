---
# 这是文章的标题
title: Windows 安装 Python
# 这是页面的图标
icon: yemian
# 是否原创
isOriginal: true
# 是否加入文章列表
article: false
# 展开深度
headerDepth: 2
# 这是侧边栏的顺序
order: 4
# 设置作者
author: Jiu Yang
# 设置写作时间
date: 2022-11-19 17:35:26
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

## 下载

首先前往 [Python 官网](https://www.python.org/) 下载官方的 python 安装包，可选择目前最新的 3.10 版本。

![]( https://static.iamjy.com/blog-images/202211211222078.png "官网下载 3.10 版本")

## 安装

下载之后直接打开运行就可以，记住将下面的==环境变量==配置勾上  `Add Python 3.10 to PATH`，不然后面需要在我的电脑-属性-高级系统设置-高级-环境变量-系统变量中新建添加安装的 python 路径来设置环境变量。

![]( https://static.iamjy.com/blog-images/202211211224176.png "一定要勾选加入环境变量")

之后基本就是一直 next，很快便能安装完毕。但需要记住安装的路径，后面在进行与编辑器的环境配置中会用到。安装好之后可以在系统命令行（快捷键 win+r）中输入 `python` 回车，便可以看到相关安装信息，能显示则表明安装成功了。
