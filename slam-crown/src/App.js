import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LandingPage from './landingpage.js';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1><Link to="/">Welcome to Slam Crown</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/board/:boardId" component={Board} />
                </main>
            </div>
        </Router>
    );
}
