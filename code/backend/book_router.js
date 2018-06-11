const express = require("express")
let bookRouter= express.Router()
let books = [
    {id:1,bname:'abc',price:234.45},
    {id:2,bname:'abc',price:234.45},
    {id:3,bname:'abc',price:234.45},
    {id:4,bname:'abc',price:234.45},
    {id:5,bname:'abc',price:234.45},
    {id:6,bname:'abc',price:234.45}]
bookRouter.route("/")
    .get((req,res)=>{
        res.json(books)
    })
    .post((req,res)=>{
      console.log(req.body)
        res.send(req.body)
    });
bookRouter.route("/:id")
    .delete((req,res)=>{
       let id= req.params.id;
       let i=-1;
       for(i=0;i<books.length;i++){
           if(id==books[i].id)break;
       }
       books.splice(i,1);
       res.json({})
        console.log(id)
    })
    .put((req,res)=>{
        let id = req.params.id;
        let book = req.body;
        let i=-1;
        for(i=0;i<books.length;i++){
            if(id==books[i].id)break;
        }
        books.splice(i,1,book)
        res.json(book);
    })
module.exports = bookRouter