import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  { text: '博客', icon: 'blog', link: '/blog.html' },
  { text: '学习路线', icon: 'line', link: '/home.html' },
  { text: '案例', icon: 'discover', link: '/demo/' },
  {
    text: '指南',
    icon: 'creative',
    prefix: '/guide/',
    children: [
      {
        text: 'Bar',
        icon: 'creative',
        prefix: 'bar/',
        children: ['baz', { text: '...', icon: 'more', link: '' }],
      },
      {
        text: 'Foo',
        icon: 'config',
        prefix: 'foo/',
        children: ['ray', { text: '...', icon: 'more', link: '' }],
      },
    ],
  },
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
