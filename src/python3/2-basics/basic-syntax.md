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

## 标准数据类型

Python 中有六个标准的数据类型：

-   `Number`（数字）
-   `String`（字符串）
-   `List`（列表）
-   `Tuple`（元组）
-   `Set`（集合）
-   `Dictionary`（字典）

Python3 的六个标准数据类型中：

-   不可变对象（3 个）：`Number`（数字）、`String`（字符串）、`Tuple`（元组）；
-   可变对象（3 个）：`List`（列表）、`Dictionary`（字典）、`Set`（集合）。

> [!tip]
> 可变对象与不可变对象的区别在于对象本身是否可变。

```python
>>> foo = [1, 2, 3]
>>> foo[0] = 4
>>> foo
[4, 2, 3]
>>> bar = (3, 2, 1)
>>> bar[0] = 4
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
```

上面例子很直观地展现了，可变对象是可以直接被改变的，而不可变对象则不可以

下面我们来看一下可变对象的内存地址变化

```python
>>> foo = [1, 2, 3]
>>> id(foo)
140672830366144
>>> foo[0] = 4
>>> foo
[4, 2, 3]
>>> id(foo)
140672830366144
```

我们可以看到，可变对象变化后，地址是没有改变的

如果两个变量同时指向一个地址

### 可变对象

```python
>>> foo = [1, 2, 3]
>>> id(foo)
140672830232448
>>> bar = foo
>>> id(bar)
140672830232448
>>> foo[0] = 4
>>> foo
[4, 2, 3]
>>> bar
[4, 2, 3]
>>> id(foo)
140672830232448
>>> id(bar)
140672830232448
```

我们可以看到，改变 `foo` 则 `bar` 也跟着变，因为他们始终指向同一个地址

### 不可变对象

```python
>>> foo = (1, 2, 3)
>>> id(foo)
140672831403712
>>> bar = foo
>>> foo = (4, 5, 6)
>>> foo
(4, 5, 6)
>>> bar
(1, 2, 3)
>>> id(foo)
140672828856768
>>> id(bar)
140672831403712
```

我们可以看到，`foo` 改变后，它的地址也发生了变化，而 `bar` 则维持原来的地址，原来地址中的内容也没有发生变化

## 类型判断

python 可以用 `type` 函数来检查一个变量的类型，使用方法如下：

```python
>>> x = "foobar"
>>> type(x)
<type 'str'>
>>> x=10
>>> type(x)
<type 'int'>
>>> x=('1','2','3')
>>> type(x)
<type 'tuple'>
>>> x = ['1','2','3']
>>> type(x)
<type 'list'>
```

在脚本代码中的使用：

```python
x = "foobar"
print(type(x))
```

## 字符串

-   Python 中单引号和双引号使用完全相同，但单引号和双引号不能匹配。
-   使用三对引号 `'''` 或 `"""` 可以囊括一个多行字符串。
-   与其他语言相似，python 也使用 `\` 作为转义字符
-   自然字符串，通过在字符串前加 `r`  或 `R`。如 `r"this is a line with \n"` 则`\n` 会显示，并不是换行。
-   Python 允许处理 unicode 字符串，加前缀 `u` 或 `U` ，如 `u"this is an unicode string"`。
-   字符串是不可变的。
-   按字面意义级联字符串，如`"this " "is " "string"`会被自动转换为`this is string`。
-   字符串可以用 `+` 运算符连接在一起，用 `*` 运算符重复。
-   Python 中的字符串有两种索引方式，从左往右以 `0` 开始，从右往左以 `-1` 开始。
-   Python 中的字符串不能改变（详见[上一节](#不可变对象)）。
-   Python 没有单独的字符类型，一个字符就是长度为 `1` 的字符串。
-   字符串的截取的语法格式如下：`变量[头下标:尾下标:步长]`

```python
word = '字符串' 
sentence = "这是一个句子。" 
paragraph = """这是一个段落， 
可以由多行组成"""
```

```python
>>> print('\n')       # 输出空行
>>> print(r'\n')      # 输出 \n
>>>
\n
```

这里的 `r` 指 `raw`，即 `raw string`，会自动将反斜杠转义

## 空行

函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用两行空行分隔，以突出函数入口的开始。

空行与代码缩进不同，空行并不是 Python 语法的一部分。书写时不插入空行，Python 解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

记住：**空行也是程序代码的一部分**。

>  在PEP8中介绍了一些python代码的格式，其中介绍了函数之间要有两行空行，如果python代码没有使用两行空行的话，部分IDE会出现修改提示（比如pycharm）。这样的代码不影响运行，但对于代码阅读不利，


[^first]:  UTF-8 和  unicode 的解释请看阮一峰老师的文章 [字符编码笔记：ASCII，Unicode 和 UTF-8 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)