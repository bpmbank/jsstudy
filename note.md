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

#### nodejs 模块
fs：递归删除一个文件夹？    
stream   
net   

#### mongodb
Document:最基本单元，是k-v对的有序集合  
Collection:是Document的集合  
DB：是Collection的集合  
_id,每个文档都会有一个特殊的键，type:ObjectId 
[BSON](http://bsonspec.org)  
[可视化工具robomongo](https://robomongo.org/download)    

#### 数据类型
Boolean、Object  
 

#### 数据操作
查询  
    分页：skip +limit  
    投影：find({查询条件},{投影参数})   
    条件查询：正则式  
    nul&exist：$and操作符  
    数组查询:包含查询$all        
    对象数组查询：$elemMatch
    
更新  
删除  

#### Mongoose  
角色：连接 管理  
schema：

#### 前端
JSX webcomponent  
React/Vue/Angular  

### 包管理  
npm install --save-dev webpack webpack-cli   
cnpm install --save-dev file-loader   
cnpm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react  
cnpm install --save react react-dom  

一键生成react项目  
npm install -g create-react-app

#### React
声明式编程  --单向数据流  
命令式变成  --双向数据流  



##ES基础
day1  
语法  
函数式编程：  
  函数作为参数  
  this的变化  
OP编程：  
  对象创建--动态原型  
  继承--寄生构造（伪经典继承）、  

day2  
jQuery  
链式操作  
ajax操作  

day3
nodejs  
异步式编程  
事件编程--emitter  
express  

day5  
mongodb  
mongoose   
dao分离 

day6  
webpack  
在js中绑定model和view的关系，吧js挂在在dom上，
setState自动变化
  

  