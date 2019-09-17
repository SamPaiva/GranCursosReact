import React from 'react';

import Home from './screens/Home';
import Courses from './screens/Courses';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={Home} />
        <Route path="/courses" component={Courses} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
