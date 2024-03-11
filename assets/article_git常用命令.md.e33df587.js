import{_ as s,o as n,c as a,V as l}from"./chunks/framework.5a3bb230.js";const D=JSON.parse('{"title":"git 常用命令","description":"","frontmatter":{"title":"git 常用命令"},"headers":[],"relativePath":"article/git常用命令.md","filePath":"article/git常用命令.md"}'),p={name:"article/git常用命令.md"},e=l(`<h1 id="git-常用命令" tabindex="-1">git 常用命令 <a class="header-anchor" href="#git-常用命令" aria-label="Permalink to &quot;git 常用命令&quot;">​</a></h1><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 克隆</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git clone https:</span><span style="color:#676E95;font-style:italic;">//github.com/xxxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 克隆指定分支(&lt;branch-name&gt;:分支名)</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git clone -b &lt;branch-name&gt; https:</span><span style="color:#676E95;font-style:italic;">//github.com/xxxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 查看本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 查看远程仓库分支</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git branch -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 创建本地开发分支</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git branch dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 切换到本地dev分支</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git checkout dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 首次推送到远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git push -u origin dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 推送到远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git push dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 拉取</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 拉取指定分支代码</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git pull origin &lt;branch-name&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 合并dev分支到master</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git merge dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 取消合并分支(合并未提交)</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git merge --abort</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 取消合并分支(合并后已经提交)</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git revert</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程仓库分支</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; git push origin --delete &lt;branch-name&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程仓库中的文件（夹）</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">. 预览想要删除的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">命令：git rm -r -n --cached 文件/文件夹名称</span></span>
<span class="line"><span style="color:#A6ACCD;">由于增加了参数 -n，此时只是预览涉及的文件，不会真正删除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">. 执行删除操作</span></span>
<span class="line"><span style="color:#A6ACCD;">命令：git rm -r --cached 文件/文件夹名称</span></span>
<span class="line"><span style="color:#A6ACCD;">--删除后，编辑.gitignore进行忽略或者本地文件不需要彻底删除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">. 将删除操作提交至远程仓库（commit，push）</span></span></code></pre></div>`,2),t=[e];function c(o,i,r,C,A,g){return n(),a("div",null,t)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
