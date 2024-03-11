import{_ as a,o as s,c as n,V as e}from"./chunks/framework.5a3bb230.js";const h=JSON.parse('{"title":"asar文件","description":"","frontmatter":{"title":"asar文件"},"headers":[],"relativePath":"article/asar文件.md","filePath":"article/asar文件.md"}'),t={name:"article/asar文件.md"},l=e(`<h1 id="asar文件解压" tabindex="-1">asar文件解压 <a class="header-anchor" href="#asar文件解压" aria-label="Permalink to &quot;asar文件解压&quot;">​</a></h1><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 全局安装asar依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; npm i -g @electron/asar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 查看</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; asar -V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 解压指定文件</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;  asar extract &lt;fileName&gt; &lt;filePath&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&gt;  asar extract app.asar ./</span></span></code></pre></div>`,2),r=[l];function p(c,o,i,_,d,C){return s(),n("div",null,r)}const m=a(t,[["render",p]]);export{h as __pageData,m as default};
