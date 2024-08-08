robotjs在electron中使用

robotjs官网：https://robotjs.io/
# 一、安装robotjs
```
npm install robotjs
```
# 二、使用
由于robotjs是c++编写的原生库，而且NPM 包中并没有包含预构建的二进制文件，所以在使用的时候需要根据不同的平台进行重新编译，否则安装完，直接使用会报错，如下：
```json
App threw an error during load
Error: The module '\\?\D:\work\test\electron-vite-test\node_modules\robotjs\build\Release\robotjs.node'
was compiled against a different Node.js version using
NODE_MODULE_VERSION 108. This version of Node.js requires
NODE_MODULE_VERSION 119. Please try re-compiling or re-installing
the module (for instance, using `npm rebuild` or `npm install`).
    at process.func [as dlopen] (node:electron/js2c/node_init:2:2214)
    at Module._extensions..node (node:internal/modules/cjs/loader:1356:18)
    at Object.func [as .node] (node:electron/js2c/node_init:2:2214)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at Module._load (node:internal/modules/cjs/loader:967:12)
    at c._load (node:electron/js2c/node_init:2:13672)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:119:18)
    at Object.<anonymous> (D:\work\test\electron-vite-test\node_modules\robotjs\index.js:1:15)
    at Module._compile (node:internal/modules/cjs/loader:1271:14)
```
注：编译需要的环境（node-gyp 10.1.0、python 3.11.3、Visual Studio Installer 2022（Visual Studio 生成工具））

1、全局安装node-gyp
```json
npm install -g node-gyp
```
2、项目中安装@electron/rebuild
```json
npm install -D @electron/rebuild
```
package.json中添加命令
```json
    "scripts": {
        "rebuild": "electron-rebuild"
    },
```
运行 npm run rebuild ,此时会根据项目中的electron版本及其对应的node-abi版本进行编译。（node-abi查询参考 三、关于如何查看node-abi版本）
（如果不想根据安装好的electron版本编译，可以直接使用如下命令）
```
# npm rebuild --runtime=electron --target=<你的electron版本> --disturl=https://atom.io/download/atom-shell --abi=<对应abi版本>
# 编译electron 26版本的（之前测过可以，后面重装系统后编译环境的各版本不太一样，没有成功）
npm rebuild --runtime=electron --target=26.6.10 --disturl=https://atom.io/download/atom-shell --abi=110
```

生成的二进制文件在node_modules/robotjs/bin中

记录该笔记时，最高可编译到electron的26.x版本，27及以上的electron版本无法获取到对应的node-abi版本，在执行编译的时候会报错


# 三、关于如何查看node-abi版本

1、https://www.npmjs.com/package/node-abi
```json
npm i node-abi -D
```
2、getAbi.js
```json
const nodeAbi = require('node-abi');

// 获取electron@16.2.8版本对应的node-abi
console.log(nodeAbi.getAbi('16.2.8', 'electron'), 'electron v16.2.8')// 99
// 获取electron@22.3.27版本对应的node-abi
console.log(nodeAbi.getAbi('22.3.27', 'electron'), 'electron v22.3.27')//110
// console.log(nodeAbi.getAbi('27.3.11', 'electron'), 'electron v27.3.11')
// console.log(nodeAbi.getAbi('28.3.1', 'electron'), 'electron v28.3.1')
// console.log(nodeAbi.getAbi('29.4.0', 'electron'), 'electron v29.4.0')
// console.log(nodeAbi.getAbi('30.0.2', 'electron'), 'electron v30.0.2')

// 获取指定node-abi版本支持的electron版本
console.log(nodeAbi.getTarget('110','electron'), 'electron abi-110')
```
3、执行脚本
```json
node ./getAbi.js
```