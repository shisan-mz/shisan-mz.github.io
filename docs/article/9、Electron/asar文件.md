---
title: asar文件
---

# asar文件打包与解压

```shell
# 全局安装asar依赖
> npm i -g @electron/asar

# 查看
> asar -V

# 解压指定文件
>  asar extract <fileName> <filePath>
# 示例：
# 解压asar中的文件到当前文件夹中
>  asar extract app.asar ./
# 解压asar中的文件到当前文件夹下的app文件夹中
>  asar extract app.asar app

# 打包成asar归档文件
>  asar pack <fileName> <fileName>.asar
# 示例：
# 将app文件夹打包成asar
>  asar pack app app.asar

```
