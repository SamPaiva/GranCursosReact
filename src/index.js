import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Courses from './screens/Courses';
import store from './store/store';

const routing = (
    <Router>
        <Provider store={store}>
            <Switch>
                <Route path="/" component={App} />
                <Route path="/courses" component={Courses} />
            </Switch>
        </Provider>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root'));


