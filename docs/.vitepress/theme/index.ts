// https://vitepress.dev/guide/custom-theme
import {inBrowser, Theme} from 'vitepress'
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

    if (!inBrowser) return
    let urlParts = window?.location.href.split('/');
    let urlPartsSize = urlParts.length
    if (urlPartsSize <= 1 || urlPartsSize == 3 || (urlPartsSize == 4 && !urlPartsSize[3])) router.go('/zhCN').then()
  },
} satisfies Theme
