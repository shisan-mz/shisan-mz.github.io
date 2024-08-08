---
title: electron中编译原生C++模块
---

# electron中编译原生C++模块，以sqlite3为例

npm包中部分模块只实现了对Nodejs原生环境的支持，或者只有C++源码，在有的electron版本或平台中使用需要进行编译，否则在导入使用或者打包时会报错。


## 一、Windows环境

1、安装Python 3.10+、VisualStudio2017 （编译需要C++环境）
![dependent](/img/rebuild.png)

VisualStudio安装注意

![VisualStudio](/img/VisualStudio.png)
(1)勾选C++生成工具，以及右侧三项
(2)设置npm在 Windows 平台上使用的 Visual Studio 编译工具的版本
```
npm config set msvs_version 2017
```

2、安装全局依赖node-gyp（使用管理员命令安装）

```
npm install -g node-gyp
```

3、electron项目中安装依赖

```json
npm i sqlite3 -S
npm i @electron/rebuild -D
```

4、项目的package.json文件的script中添加脚本命令

```
"scripts": {
	"rebuild": "electron-rebuild -f -w sqlite3",
},
```

可以使用`electron-rebuild`编译项目中所有的原生模块，也可以通过`electron-rebuild -f -w <moduleName>`编译指定的原生模块。

5、运行rbuild脚本命令

```
npm run rbuild
```
