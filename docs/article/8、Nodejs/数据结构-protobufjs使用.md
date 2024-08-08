---
title: 数据结构-protobufjs使用
---

# Node.js使用Protobuf数据结构

## 1、Protobuf
protobufjs是一个纯JavaScript实现，支持Node.js和浏览器的TypeScript，它容易使用速度快速，可以直接反射.proto文件，不需要生成任何文件，主要功能是解析.proto文件，构建Message类，编码解码。

https://github.com/protobufjs/protobuf.js
<br>
https://protobufjs.github.io/protobuf.js/

## 2.1 安装
初始化package.json
```json
# 新建项目目录，在项目目录中，使用终端执行初始化命令
npm init -y
```
安装protobufjs、protobufjs-cli
```json
npm install protobufjs

# The command line utility lives in the protobufjs-cli package and must be installed separately:
npm install protobufjs-cli

```

## 2.2 命令行工具
将proto文件转成js使用（后面以js方式加载时会使用）
```json
# package.json
"scripts": {
    # 使用pbjs命令批量将指定文件夹下.proto文件转换为.js文件； -o 后参数分别为proto生成js文件路径(如果放入文件夹中需要先建好Protojs文件夹)、proto文件路径
    "build-proto:pbjs": "pbjs  -t static-module -w commonjs -o ./Protojs/index.js ./Proto/*.proto",
    # 使用pbts命令将.proto文件转换为.js文件
    "build-proto:pbts": "pbts --main --out ./Protojs/proto.d.ts ./Protojs/index.js && node ./protobufUtil.js"
},
```
用于给proto生成ts的声明文件（项目根目录的Protojs/protobufUtil.js）
```js
// Protojs/protobufUtil.js
const fs = require('node:fs');
const path = require('node:path');
const file = path.join(__dirname, '..', 'Protojs', 'proto.d.ts');

const original = fs.readFileSync(file, { encoding: 'utf8' });
fs.writeFileSync(file, `
  namespace proto {
      ${original}
  }
  export default proto;
  `);
```

## 2.3 Protobuf 代码示例
项目根目录下新建Proto文件夹，定义一个test.proto的demo文件
```proto
// test.proto
package testpackage;
syntax = "proto3";

message TestMessage {
    required string name = 1;   //帐号名
    required string pwd = 2;    //帐号密码
}

```

### 2.3.1 直接加载.proto文件方式
项目根目录下新建app_proto.js
```js
// app_proto.js
let protobuf = require("protobufjs");

protobuf.load("./Proto/test.proto", function(err, root) {
    if (err) throw err;

    let TestMessage = root.lookupType("testpackage.TestMessage");

    // Exemplary payload
    let payload = { name: "哈哈哈哈哈哈", pwd: "123456"};;
    console.log("payload: " + JSON.stringify(payload));

    // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
    let errMsg = TestMessage.verify(payload);
    if (errMsg) throw Error(errMsg);

    // Create a new message
    let originMessage = TestMessage.create(payload); // or use .fromObject if conversion is necessary
    console.log("create: " + JSON.stringify(originMessage));

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    let buffer = TestMessage.encode(originMessage).finish();
    // ... do something with buffer
    console.log("encode: " + JSON.stringify(buffer));

    // Decode an Uint8Array (browser) or Buffer (node) to a message
    let message = TestMessage.decode(buffer);
    // ... do something with message
    console.log("decode: " + JSON.stringify(message));

    // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

    // Maybe convert the message back to a plain object
    let object = TestMessage.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
        // see ConversionOptions
    });
    console.log("toObject: " + JSON.stringify(object));
});
```
package.json中新增脚本命令
```json
# package.json
"scripts": {
    "dev:proto": "node ./app_proto.js"
},

# 终端执行命令
npm run dev:proto

# 输出结果如下
payload: {"name":"哈哈哈哈哈哈","pwd":"123456"}
create: {"name":"哈哈哈哈哈哈","pwd":"123456"}
encode: {"type":"Buffer","data":[10,18,229,147,136,229,147,136,229,147,136,229,147,136,229,147,136,229,147,136,18,6,49,50,51,52,53,54]}
decode: {"name":"哈哈哈哈哈哈","pwd":"123456"}
toObject: {"name":"哈哈哈哈哈哈","pwd":"123456"}
```

### 2.3.2 直接加载.js文件方式
终端执行2.2中的脚本命令，Protojs中的index.js就是.proto文件转成的js文件
`注：编译成esm规范，在使用时报错（暂为解决）`
`"build-proto:pbejs": "pbjs  -t static-module -w es6 -o ./Protojs/index.js ./Proto/*.proto"`,
```json
npm run build-proto:pbjs
```
项目根目录下新建app_proto_js.js
```js
// app_proto_js.js
let protobuf = require("protobufjs");

let testProto = require("./Protojs"); // exemplary for node
let TestUtils = testProto.testpackage.TestMessage;

// Exemplary payload
let payload = { name: "js哈哈哈js", pwd: "js123js"};
console.log("payload: " + JSON.stringify(payload));

// Verify the payload if necessary (i.e. when possibly incomplete or invalid)
let errMsg = TestUtils.verify(payload);
if (errMsg) throw Error(errMsg);

// Create a new message
let originMessage = TestUtils.create(payload); // or use .fromObject if conversion is necessary
console.log("create: " + JSON.stringify(originMessage));

// Encode a message to an Uint8Array (browser) or Buffer (node)
let buffer = TestUtils.encode(originMessage).finish();
// ... do something with buffer
console.log("encode: " + JSON.stringify(buffer));

// Decode an Uint8Array (browser) or Buffer (node) to a message
let message = TestUtils.decode(buffer);
// ... do something with message
console.log("decode: " + JSON.stringify(message));

// If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

// Maybe convert the message back to a plain object
let object = TestUtils.toObject(message, {
    longs: String,
    enums: String,
    bytes: String,
    // see ConversionOptions
});
console.log("toObject: " + JSON.stringify(object));

```
package.json中新增脚本命令
```json
# package.json
"scripts": {
    "dev:protojs": "node ./app_proto_js.js"
},

# 终端执行命令
npm run dev:protojs

# 输出结果如下
payload: {"name":"js哈哈哈js","pwd":"js123js"}
create: {"name":"js哈哈哈js","pwd":"js123js"}
encode: {"type":"Buffer","data":[10,13,106,115,229,147,136,229,147,136,229,147,136,106,115,18,7,106,115,49,50,51,106,115]}
decode: {"name":"js哈哈哈js","pwd":"js123js"}
toObject: {"name":"js哈哈哈js","pwd":"js123js"}
```
### 2.3.3 例子
account.proto
```proto
// account.proto
package shisan;
syntax = "proto3";

message Account{
    required string name = 1; //帐号名
    required string pwd = 2; //帐号密码
}

message AccountList{
    required int32 index = 1;
    repeated Account list = 2;
}
```
#### 2.3.3.1 create()创建对象
app_account.js
```js
// app_account.js
let ProtoBufJs = require("protobufjs");
let root = ProtoBufJs.loadSync("./account.proto");
let AccountList = root.lookupType("shisan.AccountList");
let Account = root.lookupType("shisan.Account");
let accountListObj = AccountList.create();

for(let i = 0; i < 5; i++){
    let accountObj = Account.create();
    accountObj.name = "name_"+i;
    accountObj.pwd = "pwd_"+i;
    accountListObj.list.push(accountObj);
}

let buffer = AccountList.encode(accountListObj).finish();

console.log("data: " + JSON.stringify(accountListObj));
console.log("encode: " + JSON.stringify(buffer));

#终端执行node命令
node ./app_account.js
```
#### 2.3.3.2 fromObject()创建对象
```js
let ProtoBufJs = require("protobufjs");
let root = ProtoBufJs.loadSync("./account.proto");
let AccountList = root.lookupType("shisan.AccountList");
let Account = root.lookupType("shisan.Account");

let accountObj1 = Account.fromObject({pwd:"111", name:"name111"});
let accountObj2 = Account.fromObject({pwd:"222", name:"name222"});
let accountObj3 = Account.fromObject({pwd:"333", name:"name333"});
let accountListObj = AccountList.fromObject({index:"0", list:[accountObj1,accountObj2,accountObj3]});
let buffer = AccountList.encode(accountListObj).finish();

console.log("data: " + JSON.stringify(accountListObj));
console.log("encode: " + JSON.stringify(buffer));

#终端执行node命令
node ./app_account.js
```
