// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import {ShikiMagicMove} from "shiki-magic-move/vue";
import MagicCodeGroup from "./components/MagicCodeGroup.vue";
import Layout from "./theme/Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router }) {
    app.component('ShikiMagicMove', ShikiMagicMove)
    app.component('MagicCodeGroup', MagicCodeGroup)

    let urlPartSize = window.location.href.split('/').length
    if (urlPartSize <= 1 || urlPartSize == 3 || (urlPartSize == 4 && !urlPartSize[3])) router.go('/zhCN').then()
  },
} satisfies Theme
