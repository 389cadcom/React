import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import './App.css';
import logo from './assets/images/logo.svg'

import history from './store/history'
import routes from './routes'
import Navs from './layouts/navs.js'


function App() {
  return (
    <Router history={ history }>
      <Navs />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          { routes.map((router, k)=> <Route {...router} key={k} />) }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
