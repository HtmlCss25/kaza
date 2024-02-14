// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './organism/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lodging" component={Lodging} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
