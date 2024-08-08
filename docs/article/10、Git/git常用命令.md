---
title: git 常用命令
---

# git 常用命令

```json
# 克隆
> git clone https://github.com/xxxx.git

# 克隆指定分支(<branch-name>:分支名)
> git clone -b <branch-name> https://github.com/xxxx.git

# 查看本地分支
> git branch

# 查看远程仓库分支
> git branch -r

# 创建本地开发分支
> git branch dev

# 切换到本地dev分支
> git checkout dev

# 首次推送到远程分支
> git push -u origin dev

# 推送到远程分支
> git push dev

# 拉取
> git pull

# 拉取指定分支代码
> git pull origin <branch-name>

# 合并dev分支到master
> git checkout master
> git merge dev

# 取消合并分支(合并未提交)
> git merge --abort

# 取消合并分支(合并后已经提交)
> git revert

# 删除远程仓库分支
> git push origin --delete <branch-name>

# 删除远程仓库中的文件（夹）
1. 预览想要删除的文件
命令：git rm -r -n --cached 文件/文件夹名称
由于增加了参数 -n，此时只是预览涉及的文件，不会真正删除

2. 执行删除操作
命令：git rm -r --cached 文件/文件夹名称
--删除后，编辑.gitignore进行忽略或者本地文件不需要彻底删除

3. 将删除操作提交至远程仓库（commit，push）

```
