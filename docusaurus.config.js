import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
title: 'QiuShui\'s Website',
tagline: 'A Minecraft modder.',
favicon: 'img/favicon.ico',
trailingSlash: true,

url: 'https://qiushui1012.github.io/',
url: 'https://qiushui1012.github.io',
baseUrl: '/',

organizationName: 'QiuShui1012',
projectName: 'qiushui1012.github.io',

onBrokenLinks: 'throw',
onBrokenMarkdownLinks: 'warn',

i18n: {
  defaultLocale: 'en',
  locales: ['en','zh-Hans'],
  localeConfigs: {
    en: {
      htmlLang: 'en-GB',
    },
    zh: {
      direction: 'rtl',
    },
  },
},

presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: './sidebars.js',
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    }),
  ],
],

themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'QiuShui\'s Website',
      logo: {
        alt: 'QiuShui\'s Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainDocSidebar',
          position: 'left',
          label: 'Documents',
        },
        {
          href: '/docs/category/mods',
          position: 'left',
          label: 'Mods',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documents',
              to: '/docs/intro',
            },
            {
              label: 'Mods',
              to: '/docs/mods',
            },
          ],
        },
        {
          title: 'Social Accounts',
          items: [
            {
              label: 'Bilibili (China)',
              href: 'https://space.bilibili.com/484142219',
            },
            {
              label: 'CurseForge (For 1012)',
              href: 'https://www.curseforge.com/members/qiushui1012',
            },
            {
              label: 'CurseForge (For 0875)',
              href: 'https://www.curseforge.com/members/qiushui0875',
            },
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/user/QiuShui1012',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/QiuShui1012',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QiuShui1012. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
