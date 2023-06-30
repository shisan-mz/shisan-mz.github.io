import autoGetSidebarOptionBySrcDir from "./sidebar";
const path = require("path");

module.exports = {
    title: "blog",
    description: "Front end project and tips sharing",
    lang: "cn-ZH",
    base: "/",
    head: [
        ['link', { rel: 'icon', href: '/vite.svg', type: 'image/svg+xml' }]
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        siteTitle: "摸鱼老萌新",  //左上角的
        logo: "/logo.jpg",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
            {
                text: "前端学习",             //导航标签的名字
                items: [                  //这种格式是有下拉菜单的版本
                    { text: "基础", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
                    { text: "Vue", link: "/web/vue/01.vue" },
                    { text: "React", link: "/articles/react/index" },
                    { text: "小程序", link: "/articles/mini/index" },
                    { text: "Electron", link: "/web/electron/01.electron" },
                    { text: "Web3D", link: "/articles/web3d/index" },
                    { text: "Rust", link: "/web/rust/01.基础入门" },
                ],
            },
            { text: "BUG记录", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },   //这种是没有下拉菜单的版本
            { text: "项目", link: "/intent/" },
        ],
        sidebar: {
            "/web/electron": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/electron"),
            ).concat(autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/electron-builder"),
            )),
            "/web/vue": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/vue"),
                "Vue"
            ),
            "/web/rust": autoGetSidebarOptionBySrcDir(
                path.resolve(__dirname, "../web/rust"),
            ),
        },
        socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    }
}
