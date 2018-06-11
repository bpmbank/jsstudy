const express = require("express")
const http = require("http")
const path = require("path")
const router = require("./book_router")
const bodyParser = require("body-parser")

let app = express();
app.use(bodyParser.json())
app.use(require("./cros"))
//url-form-encocded --name=xx&age=yy
// app.use(bodyParser.urlencodeed({extend:true}))

console.log(__dirname)
//============全Restful方案的后台（新型的webservice /SOA===IAAS/PAAS/SAAS/TAAS）============
// ①app.get("/",(req,res)=>{
//
// })
// app.get("/books",(req,res)=>{
//
// })

//②
// app.route("/books")
//     .get((req, res) => {
//         res.send("get books")
//         res.send()
//     })
//     .post((req, post) => {
//
//     })
//③外置路由
// let bookRouter= express.Router()
// bookRouter.route("/")
//     .get((req,res)=>{
//
//     })
//     .post((req,res)=>{
//
//     });
// app.use("/books",bookRouter)

//④外部引用，模块中使用独立router
app.use("/books",router)

//============全Restful方案的后台（新型的webservice /SOA===IAAS/PAAS/SAAS/TAAS）============

// app.use(express.static(__dirname+"\\public"));
// app.set("view engine", "ejs")
// app.set("views", path.join(__dirname, "views"))
// app.use(express.static(path.join(__dirname, "public")))
//
// app.get("/", (req, res) => {
//     res.send("get /");
//     res.end("!");
// })
// app.get("/users", (req, res) => {
//     // res.send("get /users")
//     res.render("allUsers", {uname: "john"})
// })
//
// app.post("/", (req, res) => {
//     res.send("post /")
// })

let server = http.createServer(app);

server.listen(9000, () => {
    console.log("express server start at:" + server.address().port);
})



