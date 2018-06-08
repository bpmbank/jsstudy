//回调地狱
const  fs = require('fs'); //#include<fcsl.h>

fs.open("./app.js","r",(err,fd)=>{
    console.log(fd);
    fs.write(fd,buf,(err)=>{
        fs.open((err,fd)=>{
            // fs.open
        })
    })
})
console.log("other work...")