---
# 这是文章的标题
title: 页面配置
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
date: 2022-11-15 13:57:23
# 页面内容描述
description: 
# 一个页面可以有多个分类
category: []
# 一个页面可以有多个标签
tag: []
# 此页面会在文章列表置顶
sticky: true
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


### 一、安装 [Docker](https://so.csdn.net/so/search?q=Docker&spm=1001.2101.3001.7020)

1.  Docker 要求 CentOS 系统的内核版本高于 3.10 ，通过 uname -r 命令查看你当前的内核版本 。

```
$ uname -r

```

2.  更新库源

```
$ sudo apt-get update

```

3.  安装相应的依赖

```
$ sudo apt-get install apt-transport-https ca-certificates software-properties-common curl gnupg-agent 

```

4.  添加 Docker 的官方 GPG 密钥

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

```

5.  验证密钥

```
$ sudo apt-key fingerprint 0EBFCD88

```

![](https://img-blog.csdnimg.cn/51b8edc276a740cc9b52021a96deb327.png)

6.  根据你电脑系统去设置仓库（三选一）

```
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo add-apt-repository "deb [arch=armhf] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

```

7.  再更新一次库源

```
$ sudo apt-get update

```

8.  安装最新的 docker

```
 $ sudo apt-get install docker-ce docker-ce-cli containerd.io

```

9.  测试运行

```
$ sudo docker run hello-world

```

![](https://img-blog.csdnimg.cn/0c5c4042710f42788e83998d44fc8d50.png)

### 二、VS Code 搭建 Docker 环境

配置非 root 用户有权限执行 Docker 命令：`此权限操作必须执行，否则无法在VScode中查找当前用户下的相关容器`

1.  创建 docker 组

```
$ sudo groupadd docker

```

2.  添加你的用户到 docker 组中

```
$ sudo gpasswd -a ${USER} docker

```

3.  刷新用户组信息，我使用的是 ubuntu 系统，可以直接在终端中输入下面的命令更新组，其他非 linux 系统或者虚拟机需要重启才可以更新组

```
$ newgrp docker 

```

4.  这个时候在终端中使用 docker 已经不需要输入 sudo 了，使用下面命令在终端中验证

```
 $ docker ps -a

```

> 问： 为什么需要创建 docker 用户组？  
> 答： Docker 守候进程绑定的是一个 unix socket，而不是 TCP 端口。这个套接字默认的属主是 root，其他是用户可以使用 sudo 命令来访问这个套接字文件。因为这个原因，docker 服务进程都是以 root 帐号的身份运行的。

5.  在 VS Code 中安装 Remote — Containers 扩展，安装成功后，在 VScode 界面上左下角会出现一个绿色的状态条（Status bar）![](https://img-blog.csdnimg.cn/88086c4eb1924e6aac1497327960e5f4.png)  
    ![](https://img-blog.csdnimg.cn/f05e633d585748e6b4044c36b2b15fe5.png)
6.  点击上图的绿色图标可以展示 VScode 正在 local 或者 remote 运行，点击可以显示 Remote-Containers 的命令；左侧栏应该展示当前正在运行的容器：hello-world，如果没有，就点击绿色图标，选择 Reopen in Container。  
    ![](https://img-blog.csdnimg.cn/60670bada5c8402788b194a666ab541c.png)  
    至此，VS Code 的环境就搭建好了。
7.  如果第 6 步出现提示：  
    `Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json": dial unix /var/run/docker.sock: connect: permission denied` ，如果在确定了用户组的设置是正确的情况下，再次遇到这个问题，那有可能是 /var/run/docker.sock 文件的权限不够导致的。可以按如下操作解决，设置之后再在 VS Code 打开即可。

```
# 查看一下/var/run/docker.sock的权限
$ sudo ll /var/run/docker.sock
# 结果：srw-rw---- 1 root docker 0 5月  26 15:06 /var/run/docker.sock
# 修改文件权限
$ sudo chmod 666 /var/run/docker.sock
# 此时再查看文件权限
$ ls -lrth /var/run/docker.sock
# 结果：srw-rw-rw- 1 root docker 0 5月  26 15:06 /var/run/docker.sock

```