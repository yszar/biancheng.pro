---
# 这是文章的标题
title: Python 的优点和缺点
# 这是页面的图标
icon: yemian
# 是否原创
isOriginal: true
# 是否加入文章列表
article: false
# 展开深度
headerDepth: 2
# 这是侧边栏的顺序
order: 2
# 设置作者
author: Jiu Yang
# 设置写作时间
date: 2022-11-21 09:51:58
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

python 语言有简单；易学；易读、易维护；用途广泛；速度快；免费、开源；高层语言；可移植性；解释性；面向对象；可扩展性、可扩充性；可嵌入性；丰富的库等等很多优点，同时也有单行语句和命令行输出问题；给初学者带来困惑；运行速度慢等缺点。对于每个优缺点的具体内容我们将在文章中展开。

## 优点

1. **简单**：Python 是一种代表简单主义思想的语言。阅读一个良好的 Python 程序就感觉像是在读英语一样。它使你能够专注于解决问题而不是去搞明白语言本身。

2. **易学**：Python 极其容易上手，因为 Python 有极其简单的说明文档。

> [!success]
> 鉴于以上两点，我非常推荐没有编程基础的同学以 Python 入门

3. **易读**、易维护：风格清晰划一、强制缩进

4. **用途广泛**

5. **速度快**：Python 的底层是用 C 语言写的，很多标准库和第三方库也都是用 C 写的，运行速度非常快。

6. **免费、开源**：Python 是 FLOSS（自由/开放源码软件）之一。使用者可以自由地发布这个软件的拷贝、阅读它的源代码、对它做改动、把它的一部分用于新的自由软件中。FLOSS 是基于一个团体分享知识的概念。

7. **高级语言**：用 Python 语言编写程序的时候无需考虑诸如如何管理你的程序使用的内存一类的底层细节。

8. **可移植性**：由于它的开源本质，Python 已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。这些平台包括 Linux、Windows、FreeBSD、Macintosh、Solaris、OS/2、Amiga、AROS、AS/400、BeOS、OS/390、z/OS、Palm OS、QNX、VMS、Psion、Acom RISC OS、VxWorks、PlayStation、Sharp Zaurus、Windows CE、PocketPC、Symbian 以及 Google 基于 linux 开发的 android 平台。

9. **解释性**：一个用编译性语言比如 C 或 C++写的程序可以从源文件（即 C 或 C++语言）转换到一个你的计算机使用的语言（二进制代码，即 0 和 1）。这个过程通过编译器和不同的标记、选项完成。

运行程序的时候，连接/转载器软件把你的程序从硬盘复制到内存中并且运行。而 Python 语言写的程序不需要编译成二进制代码。你可以直接从源代码运行程序。

在计算机内部，Python 解释器把源代码转换成称为字节码的中间形式，然后再把它翻译成计算机使用的机器语言并运行。这使得使用 Python 更加简单。也使得 Python 程序更加易于移植。

10. **面向对象**：Python 既支持面向过程的编程也支持面向对象的编程。在“面向过程”的语言中，程序是由过程或仅仅是可重用代码的函数构建起来的。在“面向对象”的语言中，程序是由数据和功能组合而成的对象构建起来的。

Python 是完全面向对象的语言。函数、模块、数字、字符串都是对象。并且完全支持继承、重载、派生、多继承，有益于增强源代码的复用性。Python 支持重载运算符和动态类型。相对于 Lisp 这种传统的函数式编程语言，Python 对函数式设计只提供了有限的支持。有两个标准库 (functools, itertools) 提供了 Haskell 和 Standard ML 中久经考验的函数式程序设计工具。

11. **可扩展性、可扩充性**：如果需要一段关键代码运行得更快或者希望某些算法不公开，可以部分程序用 C 或 C++编写，然后在 Python 程序中使用它们。

Python 本身被设计为可扩充的。并非所有的特性和功能都集成到语言核心。Python 提供了丰富的 API 和工具，以便程序员能够轻松地使用 C 语言、C++、Cython 来编写扩充模块。Python 编译器本身也可以被集成到其它需要脚本语言的程序内。因此，很多人还把 Python 作为一种“胶水语言”（glue language）使用。使用 Python 将其他语言编写的程序进行集成和封装。在 Google 内部的很多项目，例如 Google Engine 使用 C++编写性能要求极高的部分，然后用 Python 或 Java/Go 调用相应的模块。《Python 技术手册》的作者马特利（Alex Martelli）说：“这很难讲，不过，2004 年，Python 已在 Google 内部使用，Google 召募许多 Python 高手，但在这之前就已决定使用 Python，他们的目的是 Python where we can, C++ where we must，在操控硬件的场合使用 C++，在快速开发时候使用 Python。”

12. **可嵌入性**：可以把 Python 嵌入 C/C++程序，从而向程序用户提供脚本功能。

13. **丰富的库**：Python 标准库确实很庞大。它可以帮助处理各种工作，包括正则表达式、文档生成、单元测试、线程、数据库、网页浏览器、CGI、FTP、电子邮件、XML、XML-RPC、HTML、WAV 文件、密码系统、GUI（图形用户界面）、Tk 和其他与系统有关的操作。这被称作 Python 的“功能齐全”理念。除了标准库以外，还有许多其他高质量的库，如 wxPython、Twisted 和 Python 图像库等等。

14. **规范的代码**：Python 采用强制缩进的方式使得代码具有较好可读性。而 Python 语言写的程序不需要编译成二进制代码。Python 的作者设计限制性很强的语法，使得不好的编程习惯（例如 if 语句的下一行不向右缩进）都不能通过编译。其中很重要的一项就是 Python 的缩进规则。一个和其他大多数语言（如 C）的区别就是，一个模块的界限，完全是由每行的首字符在这一行的位置来决定（而 C 语言是用一对大括号{}来明确的定出模块的边界，与字符的位置毫无关系）。通过强制程序员们缩进（包括 if，for 和函数定义等所有需要使用模块的地方），Python 确实使得程序更加清晰和美观。

15. **高级动态编程**：虽然 Python 可能被粗略地分类为“脚本语言”（script language），但实际上一些大规模软件开发计划例如 Zope、Mnet 及 BitTorrent，Google 也广泛地使用它。Python 的支持者较喜欢称它为一种高级动态编程语言，原因是“脚本语言”泛指仅作简单程序设计任务的语言，如 shellscript、VBScript 等只能处理简单任务的编程语言，并不能与 Python 相提并论。

16. **做科学计算优点多**：说起科学计算，首先会被提到的可能是 MATLAB。除了 MATLAB 的一些专业性很强的工具箱还无法被替代之外，MATLAB 的大部分常用功能都可以在 Python 世界中找到相应的扩展库。和 MATLAB 相比，用 Python 做科学计算有如下优点：

- 首先，MATLAB 是一款商用软件，并且价格不菲。而 Python 完全免费，众多开源的科学计算库都提供了 Python 的调用接口。用户可以在任何计算机上免费安装 Python 及其绝大多数扩展库。

- 其次，与 MATLAB 相比，Python 是一门更易学、更严谨的程序设计语言。它能让用户编写出更易读、易维护的代码。

- 最后，MATLAB 主要专注于工程和科学计算。然而即使在计算领域，也经常会遇到文件管理、界面设计、网络通信等各种需求。而 Python 有着丰富的扩展库，可以轻易完成各种高级任务，开发者可以用 Python 实现完整应用程序所需的各种功能。

## 缺点

1. **速度慢**。    Python 的运行速度相比 C 语言确实慢很多，跟 JAVA 相比也要慢一些，因此这也是很多所谓的大牛不屑于使用 Python 的主要原因，但其实这里所指的运行速度慢在大多数情况下用户是无法直接感知到的，必须借助测试工具才能体现出来的，比如你用 C 运一个程序花了 0.1s, 用 Python 是 0.01s, 这样 C 语言直接比 Python 快了 10s, 算是非常夸张了，但是你是无法直接通过肉眼感知的，因为一个正常人所能感知的时间最小单位是 0.15-0.4s 左右，哈哈。其实在大多数情况下 Python 已经完全可以满足你对程序速度的要求，除非你要写对速度要求极高的搜索引擎等，这种情况下，当然还是建议你用 C 去实现的。

2. **代码不能加密**。因为 PYTHON 是解释性语言，它的源码都是以名文形式存放的，不过我不认为这算是一个缺点，如果你的项目要求源代码必须是加密的，那你一开始就不应该用 Python 来去实现。

3. **线程不能利用多 CPU 问题**。这是 Python 被人诟病最多的一个缺点。GIL 即全局解释器锁（Global Interpreter Lock），是计算机程序设计语言解释器用于同步线程的工具，使得任何时刻仅有一个线程在执行，Python 的线程是操作系统的原生线程。在 Linux 上为 pthread，在 Windows 上为 Win thread，完全由操作系统调度线程的执行。一个 python 解释器进程内有一条主线程，以及多条用户程序的执行线程。即使在多核 CPU 平台上，由于 GIL 的存在，所以禁止多线程的并行执行。关于这个问题的折衷解决方法，我们在以后线程和进程章节里再进行详细探讨。