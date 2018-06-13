import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'
//负责收集数据
export default  class updateBookForm extends React.Component{
    constructor(props){
        super(props);
        this.state={bname:"",price:""}
    }
    render(){
        return  (

            <div id="updateBookPan">
                <form action="#" onSubmit={(e)=>function(){this.updateBook(e)}}>
                    <input name="bname" type="text" defaultValue="john" value={this.state.bname} onChange={(o) => {
                        this.changeHandle(o)
                    }
                    }/>
                    <input name="price" type="number" step="0.5" defaultValue="john" value={this.state.price} onChange={(o) => {
                        this.changeHandle(o)
                    }
                    }/>
                    <input type="submit"/>
                    <span>tip:{this.state.bname}</span>
                </form>
            </div>
        )

    }
    submitHandle(e){
        e.preventDefault();
        let book={this:name.value,price:this.price.value}
        this.props.callback(book)

    }
}