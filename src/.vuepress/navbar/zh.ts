import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  { text: '博客', icon: 'blog', link: '/blog.html' },
  { text: '学习路线', icon: 'luxian', link: '/home.html' },
  { text: 'Python3 入门教程', icon: 'python', link: '/python3/' },
  { text: '学习资料', icon: 'PDF', link: '/pdf/' },
  {
    text: '关于我',
    icon: 'guanyuwo',
    children: [
      {
        text: '关于我这个站',
        icon: 'guanyuzhan',
        link: '/this-website/',
      },
      {
        text: '关于我这个人',
        icon: 'guanyuren',
        link: '/about.html',
      },
    ],
  },
])
