import autoGetSidebarOptionBySrcDir from "./sidebar";
const path = require("path");

module.exports = {
    title: "个人博客",
    description: "万幸始于相识，万幸止于相识。",
    lang: "cn-ZH",
    base: "/",
    head: [
        ['link', { rel: 'icon', href: '/vite.svg', type: 'image/svg+xml' }]
    ],
    themeConfig: {
        lastUpdated: '上次更新',
        search: {
            provider: 'local'
        },
        siteTitle: "米斯特李",  //左上角的
        logo: "/logo.jpg",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
            {
                text: "学习",             //导航标签的名字
                items: [                  //这种格式是有下拉菜单的版本
                    { text: "基础", link: "/web/基础/HTML/01.HTML5之Dialog标签" }, 
                    { text: "小程序", link: "/web/小程序/01.基础入门" },     //text代表每一项的名字，link是连接的位置
                    { text: "Vue", link: "/web/Vue/01.vue" },
                    { text: "React", link: "/web/React/01.react" },
                    { text: "Electron", link: "/web/Electron/01.使用Vite+Electron构建Vue项目" },
                    { text: "Git", link: "/web/Git/01.git常用命令" },
                ],
            },
            { text: "文章", link: "/article/HTML/01.HTML5之Dialog标签" },
            { text: "代码片段", link: "/code/01.css抖动" },
            { text: "工具软件", link: "/tool/Visual Studio Code" },
            { text: "插件扩展", link: "/plugin/axios" },
        ],
        sidebar: {
            "/web/基础": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/基础/HTML"),
                "HTML"
            ).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/基础/CSS"),
                "CSS"
            )).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/基础/JavaScript"),
                "JavaScript"
            )),
            "/web/小程序": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/小程序"),
                "微信小程序"
            ),
            "/web/Vue": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/Vue"),
                "Vue"
            ),
            "/web/React": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/React"),
                "React"
            ),
            "/web/Electron": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/Electron"),
                "Electron"
            ).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/Electron-builder"),
                "Electron-builder"
            )),
            "/web/Git": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/Git"),
                "Git"
            ),
            "/article": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../article/HTML"),
                "HTML"
            ).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../article/CSS"),
                "CSS"
            )).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../article/JavaScript"),
                "JavaScript"
            )).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../article/Vue"),
                "Vue"
            )).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../article/React"),
                "React"
            )).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../article/NODE"),
                "NODE"
            )).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../article/其他"),
                "其他"
            )),
            "/code": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../code"),
                "代码片段"
            ),
            "/tool": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../tool"),
                "工具软件"
            ),
            "/plugin": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../plugin"),
                "插件扩展"
            ),
        },
        socialLinks: [{ icon: "github", link: "https://github.com/Libaizhu" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    }
}
