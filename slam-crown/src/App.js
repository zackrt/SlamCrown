import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LandingPage from './components/landingpage';
import SignUp from './components/signupform';
import Login from './components/login';
import UserPage from './components/userpage';
import UserReportHistory from './components/userreporthistory';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1><Link to="/">Welcome to Slam Crown</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/userpage" component={UserPage} />
                    <Route exact path="/userreporthistory" component={UserReportHistory} />
                </main>
            </div>
        </Router>
    );
}
