import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <h1>Hello</h1>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
