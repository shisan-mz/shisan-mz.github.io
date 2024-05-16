# electron应用进行源码保护

打包工具：electron-builder

## 一、对js文件进行混淆、ASAR文件防解压

### 1、安装需要使用的依赖
全局的node-gyp
```js
# asarmor在安装2.x及2.x的beta版本，用Visual Studio Installer 2017能正常安装，asarmor 3.x报错(需使用Visual Studio Installer 2019+)
    npm i -g node-gyp
    npm i @electron/asar@3.2.10 asarmor@2.0.0 javascript-obfuscator@4.1.0 chalk@4 -D
    npm i fs-extra
```

注:安装asarmor需要本地有Python(安装Python)和C++环境(安装Visual Studio Installer，勾选C++)
当前python版本：3.10.11，Visual Studio Installer版本：2017

Visual studio 生成工具:(Visual Studio Installer)
<br>
如果下载2019版本，只需要将链接中的rel参数改为16；下载2022版本，rel参数为17
```
https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15
```


### 2、在electron-builder.yml文件或package.json文件的build配置下的afterSign钩子执行脚本

```yml
    appId: org.simulatedgreg.test
    productName: 测试应用
    copyright: Copyright © 2023 Client
    directories:
        output: build-electron
    files:
    - '!**/.vscode/*'
    - '!src/*'
    - '!electron.vite.config.{js,ts,mjs,cjs}'
    - '!electron'
    - '!public'
    - '!vite.config.{js,ts,mjs,cjs}'
    - '!index.html'
    - '!build'
    afterSign: build/afterSign.js
```

### 3、afterSign.js

```js
    const fs = require('fs-extra')
    const path = require('node:path');
    const asar = require('@electron/asar');
    const asarmor = require('asarmor');
    //使用javascript-obfuscator代码混淆
    const JavaScriptObfuscator = require('javascript-obfuscator'); 
    const chalk = require('chalk')

    //获取指定文件夹下排除指定类型的文件
    function getFiles(dirpath, exclude) {
        function getFiles_(dir, arr) {
            const stat = fs.statSync(dir);
            if (stat.isDirectory()) {
                const dirs = fs.readdirSync(dir);
                dirs.forEach(value => {
                    let extname = path.extname(value);
                    if (!exclude.includes(value) && !exclude.includes(extname)) getFiles_(path.join(dir, value), arr);
                })
            } else if (stat.isFile()) {
                //文件
                arr.push(dir);
            }
        };
        let arrs = [];
        getFiles_(dirpath, arrs);
        return arrs;
    }

    exports.default = async ({ appOutDir, packager }) => {
        try {
            const asarPath = path.join(packager.getResourcesDir(appOutDir), 'app.asar');
            let appPath = path.join(packager.getResourcesDir(appOutDir), 'app');
            if (fs.existsSync(asarPath)) {
                //如果存在asar压缩包
                asar.extractAll(asarPath, appPath);
            }

            //替换文件内容
            let fileArrs = getFiles(appPath, ["node_modules", "public", ".css", ".html", ".md", ".json", ".xml",".png",".svg",".ttf",".woff",".woff2"]);
            for (let i = 0; i < fileArrs.length; i++) {
                let con = fs.readFileSync(fileArrs[i], 'utf8');
                try {
                    let obfuscationResult = JavaScriptObfuscator.obfuscate(con, {
                        compact: true,
                        debugProtection: true,
                        disableConsoleOutput: true,
                        numbersToExpressions: true,
                        simplify: true,
                        stringArrayShuffle: true,
                        splitStrings: true,
                        stringArrayThreshold: 1
                    });
                    fs.writeFileSync(fileArrs[i], obfuscationResult.getObfuscatedCode());
                } catch (error) {
                    console.log(fileArrs[i],chalk.red('X obscure fail!'))
                }
            }

            console.log(chalk.green('✓ asar content replacement completed.'));
            if (fs.existsSync(asarPath)) {
                fs.unlinkSync(asarPath);
                console.log(chalk.green('✓ delete the original asar.'));
            }
            await asar.createPackage(appPath, asarPath);
            try {
                fs.rmSync(appPath, { recursive: true });
            } catch (error) {
                console.log(chalk.red('X error delete file!',error));
            }
            
            console.log(chalk.green('✓ create new asar.'));

            //防止被解压
            const archive = await asarmor.open(asarPath);
            archive.patch(); // apply default patches               
            archive.patch(asarmor.createBloatPatch(1314));
            console.log(chalk.green(`✓ applying asarmor patches to ${asarPath}`));
            await archive.write(asarPath);
        } catch (err) {
            console.error(err);
        }
    }

```
