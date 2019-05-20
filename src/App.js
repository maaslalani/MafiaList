import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/:company' component={Company}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
