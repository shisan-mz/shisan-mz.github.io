import autoGetSidebarOptionBySrcDir from "./sidebar";
import { resolve } from 'node:path'

module.exports = {
    title: "个人博客",
    description: "万幸始于相识，万幸止于相识。",
    lang: "cn-ZH",
    base: "/",
    head: [
        ['link', { rel: 'icon', href: '/vite.svg', type: 'image/svg+xml' }]
    ],
    themeConfig: {
        lastUpdated: true,
        search: {
            provider: 'local'
        },
        siteTitle: "米斯特李",      //左上角的
        logo: "/logo.jpg",          //左上角的logo,注意：路径从public文件夹开始
        nav: [                      //右上角的导航栏
            { text: '首页', link: '/' },
            { text: '笔记', link: '/article/page' },
            { text: '代码片段', link: '/code/page' },
            // { text: '工具软件', link: '/tools/page' },
            { text: '插件扩展', link: '/plugin/page' },
        ],
        sidebar: {
            '/article': autoGetSidebarOptionBySrcDir(resolve(__dirname, '../article')),
            '/code': autoGetSidebarOptionBySrcDir(resolve(__dirname, '../code')),
            // '/tools': autoGetSidebarOptionBySrcDir(resolve(__dirname, '../tools')),
            '/plugin': autoGetSidebarOptionBySrcDir(resolve(__dirname, '../plugin')),
        },
        socialLinks: [{ icon: "github", link: "https://github.com/shisan-mz" }],       //右上角的社交标签
    }
}
