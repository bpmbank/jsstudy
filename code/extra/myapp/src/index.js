import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import App from './App';

// import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
