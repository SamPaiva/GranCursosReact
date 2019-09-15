import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root'));


