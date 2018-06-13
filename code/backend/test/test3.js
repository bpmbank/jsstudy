// const qs = require("querystring")
// let s = "uname=john&age=100"
// console.log(qs.parse(s))
let s = "/crm/subsale?item=a&id=12#abc"
let path=require("url").parse(s,true)
console.log(path)
