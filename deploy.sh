#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:Libaizhu/Libaizhu.github.io.git master  
git push -f git@github.com:shisan-mz/shisan-mz.github.io.git master  

cd -

# 删除dist文件夹
rm -rf docs/.vitepress/dist