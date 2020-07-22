import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {renderRoutes} from 'react-router-config';
import routes from './routes/index.js';
import My from './pages/my/my';
import Server from './pages/server/Server';
import Tabbuttom from './components/tabbuttom/Tabbuttom';
import Main from './pages/Main/Main'
import Info from './pages/Info/Info'

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch>
          <Route  path='/main' component={Main} />
          <Route  path='/server' component={Server} />
          <Route  path='/info' component={Info} />
          <Route  path='/my' component={My} />
          <Redirect to='/main' />
        </Switch> */}
        {renderRoutes(routes)}
        <Tabbuttom />
      </BrowserRouter>
    </div>
  );
}

export default App;
