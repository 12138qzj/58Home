import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import My from './pages/my/my';
import Server from './pages/server/Server';
import Tabbuttom from './components/tabbuttom/Tabbuttom';
import Main from './pages/Main/Main'
import Info from './pages/Info/Info'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route  path='/main' component={Main} />

          <Route  path='/server' component={Server} />
        <Route  path='/info' component={Info} />
        <Route  path='/home' component={My} />


          <Redirect to='/home' />
        </Switch>
      <Tabbuttom />
      </BrowserRouter>

    </div>
  );
}

export default App;
