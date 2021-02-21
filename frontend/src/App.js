import './App.css';
import Table from './Table';
import { Router, Route } from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from 'history';


function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
        <Route exact path="/view" component={Table} />
    </Router>
  );
}

export default App;
