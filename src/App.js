import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import My from './components/my/my';
import Server from './components/server/Server';
import Tabbuttom from './components/tabbuttom/Tabbuttom';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route  path='/home' component={My} />
          <Route  path='/server' component={Server} />
          <Redirect to='/home' />
        </Switch>
      <Tabbuttom />
      </BrowserRouter>
    </div>
  );
}

export default App;
