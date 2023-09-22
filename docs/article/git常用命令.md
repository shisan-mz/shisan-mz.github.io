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

# 合并dev分支到master
> git checkout master
> git merge dev

# 删除远程仓库分支
> git push origin --delete <branch-name>


```
