import DefaultTheme from 'vitepress/theme'

// 导入nail-ui
import NailUI from '../../../scripts/entry'
import '../../../src/styles/index.scss'

// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import './style.css'
import { useComponents } from './useComponents.js'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // DefaultTheme
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)

    ctx.app.use(NailUI)
  }
}
