import DefaultTheme from 'vitepress/theme'

// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import './demoblock.scss'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

// 引入字体图标css
import './iconfont.css'
import './iconfont.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册DemoBlock所需组件
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
