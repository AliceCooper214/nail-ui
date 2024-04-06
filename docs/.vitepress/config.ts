import { defineConfig } from 'vitepress'
import { demoBlockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

const sidebar = [
  {
    text: '快速开始',
    items: [
      { text: '安装', link: '/guide/install' } // /guide/install.md
    ]
  },
  {
    text: '通用',
    items: [{ text: 'Button 按钮', link: '/components/button/' }]
  }
]

export default defineConfig({
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      md.use(demoBlockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
})
