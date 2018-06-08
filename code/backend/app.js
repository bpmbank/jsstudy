const $=require("jquery")
const line = require("readline")//同步函数

const rl = line.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",(input)=>{
    if ("bye"==input){
        process.exit(0);
    }
})

console.log("hello world!")