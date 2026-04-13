import {defineConfig} from 'vitepress'
// @ts-ignore
import fs from 'node:fs'
// @ts-ignore
import path from 'node:path'
// @ts-ignore
import matter from 'gray-matter'

// 导航文本的多语言配置
const texts = {
    zhCN: {
        home: '首页',
        bili: '哔哩哔哩',
        edit: '在 GitHub 上编辑此页面'
    },
    enUS: {
        home: 'Home',
        bili: 'BiliBili',
        edit: 'Edit this page on GitHub'
    }
}


function getFileTitle(filePath: string) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8')
        const {data} = matter(content)
        if (data.title) return data.title

        const h1Match = content.match(/^#\s+(.*)/m)
        if (h1Match) return h1Match[1].trim()

        return path.basename(filePath, '.md')
    } catch (e) {
        return path.basename(filePath, '.md')
    }
}

function getSidebar(filePath: string) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8')
        const {data} = matter(content)
        if (data.sidebar) return data.sidebar
        else if (data.title) return data.title

        const h1Match = content.match(/^#\s+(.*)/m)
        if (h1Match) return h1Match[1].trim()

        return path.basename(filePath, '.md')
    } catch (e) {
        return path.basename(filePath, '.md')
    }
}

function getOrder(filePath: string) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8')
        const {data} = matter(content)
        if (data.order) return parseInt(data.order)

        return null
    } catch (e) {
        return null
    }
}

/**
 * 递归扫描目录，生成嵌套的sidebar结构
 */
function scanDirectory(dirPath: string, basePath: string, lang: string = 'zhCN') {
    const items: any[] = []

    // 读取目录内容
    const entries = fs.readdirSync(dirPath)

    // 分离文件和目录
    const files = entries.filter(f => f.endsWith('.md'))
    const dirs = entries.filter(f =>
        fs.statSync(path.join(dirPath, f)).isDirectory()
    )

    // 处理markdown文件
    files.forEach(file => {
        const filePath = path.join(dirPath, file)
        const linkPath = path.join(basePath, file.replace('.md', ''))

        items.push({
            text: getSidebar(filePath),
            link: `${linkPath}`,
            order: getOrder(filePath)
        })
    })

    // 处理子目录
    dirs.forEach(dir => {
        const subDirPath = path.join(dirPath, dir)
        const subBasePath = path.join(basePath, dir)

        // 递归扫描子目录
        const subItems = scanDirectory(subDirPath, subBasePath, lang)

        // 如果子目录有内容，则添加为折叠项
        if (subItems.length > 0) {
            const dirIndexPath = path.join(subDirPath, 'index.md')
            const dirTitle = fs.existsSync(dirIndexPath) ? getFileTitle(dirIndexPath) : dir

            items.push({
                text: dirTitle,
                collapsed: true,
                items: subItems,
                order: getOrder(dirIndexPath)
            })
        }
    })

    // 对items进行排序，让index.md始终在最前面
    return items.sort((a, b) => {
        // 如果a是index而b不是，a排前面
        if (a.link && a.link.endsWith('index') && !(b.link && b.link.endsWith('index'))) {
            return -1
        }
        // 如果b是index而a不是，b排前面
        if (b.link && b.link.endsWith('index') && !(a.link && a.link.endsWith('index'))) {
            return 1
        }
        // 如果ab都定义了order，则按order排序
        if (a.order && b.order) {
            return a.order > b.order ? 1 : -1
        }
        // 其他情况按字母顺序排序
        return `${a.link}`.localeCompare(`${b.link}`)
    })
}

/**
 * 自动生成导航和侧边栏
 */
function getAutoConfig(lang: string = 'zhCN') {
    const nav: any[] = [];
    nav.push({
        component: 'fullres',
    })
    nav.push({text: texts[lang].home, link: `/${lang}/`})
    const sidebar: any = {}

    const postsPath = path.resolve(__dirname, `../${lang}`)
    // 读取 posts 目录下的所有第一级子目录
    if (!fs.existsSync(postsPath)) return {nav, sidebar}

    const categories = fs.readdirSync(postsPath).filter(f =>
        fs.statSync(path.join(postsPath, f)).isDirectory()
    )

    categories.forEach((cat: any) => {
        const catPath = path.join(postsPath, cat)
        const indexPath = path.join(catPath, 'index.md')

        // 1. 生成 Nav: 获取该分类 index.md 的标题
        const catTitle = fs.existsSync(indexPath) ? getFileTitle(indexPath) : cat
        nav.push({
            text: catTitle,
            link: `/${lang}/${cat}/index`
        })

        // 2. 生成 Sidebar: 递归扫描该目录及其子目录
        const basePath = `/${lang}/${cat}`
        const items = scanDirectory(catPath, basePath, lang)

        sidebar[`/${lang}/${cat}/`] = [
            {
                text: catTitle, // 侧边栏大标题使用该分类的 index.md 标题
                items: items
            }
        ]
    })

    const editLink = {
        text: texts[lang].edit,
        pattern: 'https://github.com/QiuShui1012/qiushui1012.github.io/edit/main/src/:path'
    }

    const socialLinks = [
        {icon: 'github', link: 'https://github.com/QiuShui1012/', ariaLabel: 'GitHub'},
        {icon: 'bilibili', link: 'https://space.bilibili.com/484142219/', ariaLabel: texts[lang].bili},
        {icon: 'qq', link: 'https://qm.qq.com/q/qhkaBY4I8w', ariaLabel: 'QQ'},
    ];

    const footer = {
        message: 'Released under the CC-BY-NC-SA 4.0 License.',
        copyright: 'Copyright © 2024-present QiuShui1012'
    };

    // const carbonAds = {
    //     code: 'your-carbon-code',
    //     placement: 'your-carbon-placement'
    // };

    return {socialLinks, nav, sidebar, editLink, footer}
}

export default defineConfig({
    title: "QiuShui1012's Website",
    description: "秋水的个人网页",
    lastUpdated: true,
    head: [['link', {rel: 'icon', href: '/static/favicon.ico'}]],
    themeConfig: {
        ...getAutoConfig(),
        search: {
            provider: 'local'
        }
    },

    markdown: {
        lineNumbers: true,
    },

    locales: {
        zhCN: {
            label: '简体中文',
            lang: 'zh-CN'
        },
        enUS: {
            label: 'English',
            lang: 'en-US',
            themeConfig: getAutoConfig('enUS')
        }
    }
})
