import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Board from './board';


export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1><Link to="/">Slam Crown</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/board/:boardId" component={Board} />
                </main>
            </div>
        </Router>
    );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Slam Crown</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
