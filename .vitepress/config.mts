import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "ENGG1125 Review",
  description: "Calculus Review Notes",

  markdown: {
    config: (md) => {
      // @ts-ignore
      md.use(mathjax3)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '期中复习 (Midterm)',
        items: [
          { text: '第1讲：函数与图像', link: '/lecture-notes/lecture-01' },
          { text: '第2讲：极限基础与定义', link: '/lecture-notes/lecture-02' },
          { text: '第3讲：单侧极限、无穷与连续性', link: '/lecture-notes/lecture-03' },
          { text: '第4讲：导数 (一)', link: '/lecture-notes/lecture-04' },
          { text: '第5讲：导数 (二) - 隐函数与相关变化率', link: '/lecture-notes/lecture-05' },
          { text: '第6讲：导数的应用 (一) - 极值与中值定理', link: '/lecture-notes/lecture-06' },
          { text: '第7讲：导数的应用 (二) - 优化与洛必达法则', link: '/lecture-notes/lecture-07' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})