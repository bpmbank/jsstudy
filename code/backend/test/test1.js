const mongoose = require('mongoose')
console.log(mongoose)
var bookSchema = new mongoose.Schema({bname: String, price: Number})
mongoose.model("book", bookSchema)
let Book = mongoose.model("book")
let book = new Book({bname:"john",price:23.41})

mongoose.connect("mongodb://localhost:27017/test3", (err) => {
    if (!err) {
        console.log("连接成功")
        book.save((err,book)=>{
            console.log(book);
            mongoose.disconnect()

        })
    }
})
