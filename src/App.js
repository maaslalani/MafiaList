import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/:company' component={Company}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
