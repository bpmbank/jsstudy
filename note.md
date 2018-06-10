#### js笔记

函數是一等公民：

Function.protype==Function.＿＿proto＿＿

null与undefined的于别：

undefined实际上代表了不存在的值（non-existence of a value）。

有许多的方法产生一个undefined值的代码。它通常遇到当试图访问一个不存在的值时。在这种情况下，在JavaScript这种动态的弱类型语言中，只会默认返回一个undefined值，而不是上升为一个错误:

任何声明变量时没有提供一个初始值，都会有一个为undefined的默认值
当试图访问一个不存在的对象属性或数组项时，返回一个undefined值
如果省略了函数的返回语句,返回undefined
函数调用时未提供的值结果将为undefined参数值
void操作符也可以返回一个undefined值。像Underscore的库使用它作为一个防御式的类型检查，因为它是不可变的，可以在任何上下文依赖返回undefined
undefined是一个预定义的全局变量(不像null关键字)初始化为undefined值

MVX(C/T/VM)的必要性：　

解决数据和表现强耦合问题,避免写出太多面条代碼,累！

### DOM
DOM：平台中立的API
1998年10月，由
https://developer.mozilla.org/zh-CN/docs/Web/API

### HTTP
浏览器输入地址后 ：
查询dns=>ip=>http=>web服务器=>静态、动态
==》浏览器：html、css引擎-webkit；javascript引擎-v8


#### restful
---- http语义化 ----   
#### 地址语义化：   
#### 动作语义化：  
GET:查询   
POST：添加 (添加后返回新增的数据)     
PUT：整体更新覆盖   
PATCH：局部更新  
DELETE:删除  
OPTION:








