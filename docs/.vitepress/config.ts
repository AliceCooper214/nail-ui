import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = [
  {
    text: '快速开始',
    items: [
      { text: '安装', link: '/guide/install' } // /guide/install.md
    ]
  }
]

export default {
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      md.use(demoBlockPlugin)
    }
  }
}
