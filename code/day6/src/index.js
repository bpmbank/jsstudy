import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

let a = "john"
let user = {uname: "tom", age: 23}

class Clock extends React.Component{

    constructor(props){
       super(props);
       this.state= {dv:new Date()}  //状态代表未来渲染到页面的数据
   }
   componentDidMount(){
        this.fd=setInterval(()=>{
            //this.state.div=...错误
            this.setState({dv:new Date()})
        },1000)
   }
   componentWillUnmount(){
        clearInterval(fd);
   }
    render(){ //展示内容
        let format=this.props.format;
        let rs = this.state.dv.toLocaleString();
        if (format=="ISO"){
            rs=this.state.dv.toISOString();
        }
       return (<div>
           <h3>{rs}</h3>
           <button onClick={()=>{
               clearInterval(this.fd)
           }}>stop</button>
       </div>)

   }
}
class App extends React.Component {
    render() {
        return (<div><Clock format={this.props.format}></Clock></div>);
        // return (<h1>Hello world {this.props.user.uname},{this.props.user.age}!!!!</h1>)
    }
}

window.onload = function () {
    ReactDOM.render((<div>
        {/*<App user={user}/>*/}
        {/*<App user={{uname:"john",age:100}} format={"ISO"}/>*/}
        <App format="other"/>
        <App format="ISO"/>
    </div>), document.getElementById("root"));
}
