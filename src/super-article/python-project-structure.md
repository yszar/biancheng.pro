---
# 这是文章的标题
title:Python 项目结构推荐
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
date: 2022-11-05 15:57:52
# 页面内容描述
description: 小伙伴做 Python 项目的时候推荐下面这种项目结构
# 一个页面可以有多个分类
category: [Python]
# 一个页面可以有多个标签
tag: [Python, 项目结构]
# 此页面会在文章列表置顶
# sticky: true
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

## 前言

小伙伴做 Python 项目的时候推荐下面这种项目结构


```tree
sampleproject
├── data
│   └── user.json
├── docs
│   └── history.md
├── setup.cfg
├── setup.py
├── src
│   ├── requests
│   │   └── __init__.py
│   └── sample
│       ├── __init__.py
│       ├── user
│       │   └── __init__.py
│       └── views
│           └── __init__.py
├── tests
│   ├── __init__.py
│   ├── user
│   │   └── __init__.py
│   └── views
│       └── __init__.py
└── tox.ini
```

