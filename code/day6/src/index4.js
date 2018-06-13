import React from 'react';
import ReactDOM from 'react-dom'
import AddBookForm from  './books/add_book'
import $ from 'jquery'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state= {dv:new Date()}  //状态代表未来渲染到页面的数据
        this.addBook =this.addBook.bind(this);
    }
    componentDidMount() {
        $.ajax({url: this.props.url, method: "GET"})
            .done((bks) => {
                console.log(bks);
                this.setState({books: bks})
            })
    }

    render() {
        return (<div id="wrapper">
            {/*<div id="addBookPan">*/}
                {/*<form action="#" onSubmit={(e) => {*/}
                    {/*this.addBook(e)*/}
                {/*}}>*/}
                    {/*<input type="text" ref={(me) => {*/}
                        {/*this.bname = me*/}
                    {/*}}/>*/}
                    {/*<input type="number" step="0.5" ref={(me) => {*/}
                        {/*this.price = me*/}
                    {/*}}/>*/}
                    {/*<input type="submit"/>*/}
                {/*</form>*/}
            {/*</div>*/}
            <AddBookForm callback={this.addBook}/>
            <div id="bookList">
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.books.map((book) => {
                        return (<tr key={book._id} onDoubleClick={()=>{
                           this.dbclickHandle(book);
                        }
                        }>
                            <td>{book.id}</td>
                            <td>{book.bname}</td>
                            <td>{book.price}</td>
                            <td>
                                <button onClick={() => {
                                    this.deleteBook(book);
                                }}>删除
                                </button>
                            </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
            <UpdateBookForm callback={this.updateBook} ref={(me)=>{this.updateForm=me}}/>


            {/*<div id="updateBookPan">*/}
                {/*<form action="#" onSubmit={(e)=>function(){this.updateBook(e)}}>*/}
                    {/*<input name="bname" type="text" defaultValue="john" value={this.state.bname} onChange={(o) => {*/}
                        {/*this.changeHandle(o)*/}
                    {/*}*/}
                    {/*}/>*/}
                    {/*<input name="price" type="number" step="0.5" defaultValue="john" value={this.state.price} onChange={(o) => {*/}
                        {/*this.changeHandle(o)*/}
                    {/*}*/}
                    {/*}/>*/}
                    {/*<input type="submit"/>*/}
                    {/*<span>tip:{this.state.bname}</span>*/}
                {/*</form>*/}
            {/*</div>*/}
        </div>);
    }

    addBook(book) {
        // console.log(this.bname.value);
        // let bn = this.bname.value;
        // let pc = this.price.value;
        let opt={url:this.props.url,method:"POST"};
        opt.contentType="application/json";
        opt.data=book
        $.ajax(opt).done((book) => {
            this.state.books.push(book[0]);
            this.setState({books: this.state.books});
        })
    }
    deleteBook(book) {
        $({url: this.props.url + book._id, method: "DELETE"})
            .done((o) => {
                let index = this.state.books.indexOf(o);
            });
    }
    changeHandle(e){
        this.setState({[e.target.name]:e.target.value})
    }
    dbclickHandle(book){

        this.currentBook = book;
        this.upform.setState({})

        this.setState({bname:book.bname})
        this.setState({price:book.price})
    }
    updateBook(bk){
        e.preventDefault();
        let opt={url:this.props.url+this.currentBook._id,method:"PUT"};
        opt.contentType="application/json";
        pt.data=JSON.stringify({_id:this.currentBook._id,bname:this.state.bname,price:this.state.price});
        $.ajax(opt).done((book)=>{
        let index=this.state.books.indexOf(this.currentBook);
        this.state.books.splice(index,1,book)
            this.setState({books:this.state.books
            })
        })
    }


}

ReactDOM.render(<App url="http://localhost:90000/books/"/>, document.getElementById("root"))