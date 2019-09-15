import React from 'react';

import Home from './screens/Home';
import Courses from './screens/Courses';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
    </BrowserRouter>
  );
}

export default App;
