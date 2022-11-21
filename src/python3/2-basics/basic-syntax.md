---
# 这是文章的标题
title: 基础语法
# 这是页面的图标
icon: yemian
# 是否原创
isOriginal: true
# 是否加入文章列表
article: false
# 展开深度
headerDepth: 2
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Jiu Yang
# 设置写作时间
date: 2022-11-19 18:43:43
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

## 编码

默认情况下，Python 3 源码文件以 **UTF-8**[^first] 编码，所有字符串都是 **unicode**[^first] 字符串。当然你也可以为源码文件指定不同的编码：

```python
# -*- coding: cp-1252 -*-
```

> [!note]
> 上述定义允许在源文件中使用 Windows-1252 字符集中的字符编码，对应适合语言为保加利亚语、白罗斯语、马其顿语、俄语、塞尔维亚语。

## 标识符

- 第一个字符==必须==是字母表中字母或下划线 _ 。
- 标识符的其他的部分由字母、数字和下划线组成。
- 标识符对==大小写敏感==。
- 在 Python 3 中，可以用中文作为变量名<Badge text="不建议使用中文" type="warning" />，非 `ASCII` [^first] 标识符也是允许的了。

## python 保留字

保留字即关键字，我们不能把它们用作任何标识符名称。Python 的标准库提供了一个 `keyword` 模块，可以输出当前版本的所有关键字：

```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

::: tip
上面 `>>>` 开头的代码是在解释器执行的结果，写成 python 脚本代码应该写成如下样式（后续代码可能会有两种版本的代码块，但并不会多做解释，望读者周知！）：

```python
import keyword
print(keyword.kwlist)
```
:::

## 注释

Python 中单行注释以 `#` 开头，多行注释采用三对单引号 `'''` 或者三对双引号 `"""` 将注释括起来。

```python
#这是单行注释

"""
这是多行注释
这是多行注释
"""

'''
也可以用三个单引号来进行多行注释
'''
```

::: tip
 实际上 python 注释只有一种，就是单行注释，多行注释的这种使用方法类似于 java 的 javadoc，三引号的这种使用方法实际上是用来声明多行长字符串的。
:::

## 缩进

Python 最具特色的就是使用缩进来表示代码块。缩进的空格数是可变的，但是**同一个代码块的语句必须包含相同的缩进空格数**。一般都是 4 个空格。

[^first]:  UTF-8 和  unicode 的解释请看阮一峰老师的文章 [字符编码笔记：ASCII，Unicode 和 UTF-8 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)