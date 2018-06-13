//异步理解-前台 客服
function system_call(callback) {
    let fd = setInterval(() => {
        callback(Math.random());
    }, 1000);
    setTimeout(() => {
        clearInterval(fd);
    }, 5000)
}

system_call((msg)=>{
    console.log(msg);
})
console.log("other work...")