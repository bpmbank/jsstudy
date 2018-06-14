import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'
//负责收集数据
export default  class AddBookForm extends React.Component{
    render(){
  return  (<div id="addBookPan">
            <form action="#" onSubmit={(e) => {
                this.submitHandle(e)
            }}>
                <input type="text" ref={(me) => {
                    this.bname = me
                }}/>
                <input type="number" step="0.5" ref={(me) => {
                    this.price = me
                }}/>
                <input type="submit"/>
            </form>
        </div>)

    }
    submitHandle(e){
        e.preventDefault();
        let book={this:name.value,price:this.price.value}
        this.props.callback(book)

    }
}