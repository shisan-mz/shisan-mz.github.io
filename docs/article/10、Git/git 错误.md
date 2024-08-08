---
title: git 错误
---

# git 错误

## 1、fatal:unable to access 'https://github.com/.../.git':Could not resolve host:github.com

```json
# 查看是否使用代理
> git config --global http.proxy

# 取消代理
> git config --global --unset http.proxy
> git config --global --unset https.proxy

```

## 2、The authenticity of host 'github.com (20.205.243.166)' can't be established.
RSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxx.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? 

```json
输入yes再回车
```

## 3、Warning: Permanently added ‘github.com’ (ED25519) to the list of known hosts. git@github.com

GitHub SSH秘钥不对

```json
# 1、检查本地是否有id_rsa、id_rsa.pub密匙
> ls ~/.ssh
known_hosts

# 2、生成新秘钥(任意邮箱，一路回车)
> ssh-keygen -t rsa -C "xxx@xxx.com"

# 3、检查生成的秘钥
> ls ~/.ssh
id_rsa          id_rsa.pub      known_hosts

# 4、查看公钥
> cat ~/.ssh/id_rsa.pub
ssh-rsa AAgPdBcQ... xx@gmail.com

# 5、GitHub上配置SSH keys
个人设置settings --> SSH and GPG keys -->new SSH keys ---> (title随意)
```

## 4、Repository not found。fatal: Could not read from remote repository

```json
# 1、查看本地是否有ssh
> ls ~/.ssh
id_rsa          id_rsa.pub      known_hosts

# 2、产看并公钥添加到github
> cat ~/.ssh/id_rsa.pub
ssh-rsa AAgPdBcQ... xx@gmail.com

# 3、查看公钥是否有误(无误结果如下)
> ssh -T git@github.com
Hi xxxx! You've successfully authenticated, but GitHub does not provide shell access.

# 4、确认仓库路径

```
