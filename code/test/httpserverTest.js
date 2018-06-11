const http = require('http')
let server = http.createServer();
server.on("request", (req, res) => {
    console.log("one client");
    let headers=req.headers;
    // console.log(headers)
    console.log(req.url);
    req.on("data",(buf)=>{
        console.log(buf.toString());
    })
    res.write("<html><body>123</body></html>")
    // res.write("OK!!!"+buf.toString());
    res.end("test")
    // res.write("ok")
})
server.listen(9000, () => {
    console.log("start server");
    // console.log(server.address());

});
