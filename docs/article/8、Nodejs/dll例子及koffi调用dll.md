# 一、创建并生成dll

1、新建项目  
2、选择“动态链接库（DLL）”  
3、配置新项目DLL（注意位置，后续生成dll在该路径下的x64\Debug中）

新创建头文件TestDLL.h,它是作用是用来声明需要导出的函数接口
```c++
extern "C" _declspec(dllexport) int sum(int a, int b);
extern "C" __declspec(dllexport) void showMsgBox();
```

新创建源文件TestDLL.cpp,它的作用是用来实现被声明的函数
```c++
#include "pch.h"
#include "testDll.h"

int sum(int a, int b)
{
    return a + b;
}

void showMsgBox()
{
    MessageBox(NULL, L"Hello, World", L"标题", MB_OK);
}
```

菜单栏：生成-》生成解决方案（生成dll）

# 二、koffi调用dll
koffi文档：https://nongchatea.gitbook.io/koffi-chinese
安装koffi
```json
npm install koffi
```
调用dll
```js
import koffi from 'koffi';
import myDll from "./resources/test.dll"

const lib = koffi.load(myDll)
//sum：方法名，int：返回值类型，["int","int"]参数类型
const nativeSum = lib.func("__stdcall","sum","int",["int","int"])
const nativeShowMsgBox = lib.func("__stdcall","showMsgBox",'void *',[])

// 调用对应方法
// nativeSum(1,9)
// nativeShowMsgBox()
```
