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


```
