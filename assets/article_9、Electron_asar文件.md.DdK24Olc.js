import{_ as a,c as s,o as n,a3 as t}from"./chunks/framework.O95JGkcW.js";const k=JSON.parse('{"title":"asar文件","description":"","frontmatter":{"title":"asar文件"},"headers":[],"relativePath":"article/9、Electron/asar文件.md","filePath":"article/9、Electron/asar文件.md","lastUpdated":1714302060000}'),e={name:"article/9、Electron/asar文件.md"},i=t(`<h1 id="asar文件解压" tabindex="-1">asar文件解压 <a class="header-anchor" href="#asar文件解压" aria-label="Permalink to &quot;asar文件解压&quot;">​</a></h1><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 全局安装asar依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; npm i -g @electron/asar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 查看</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; asar -V</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 解压指定文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  asar extract &lt;fileName&gt; &lt;filePath&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  asar extract app.asar ./</span></span></code></pre></div>`,2),l=[i];function r(p,c,h,o,d,E){return n(),s("div",null,l)}const g=a(e,[["render",r]]);export{k as __pageData,g as default};
