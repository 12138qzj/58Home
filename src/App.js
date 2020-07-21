import React from 'react';
// >>>>>>> a5393527ef00ea87ca6926b8ccae9ff5977b3ca4
// import './App.css';
// import My from './pages/my/my';
// import Server from './pages/server/Server';
// import Tabbuttom from './components/tabbuttom/Tabbuttom';

// =======
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import My from './pages/my/my';
import Server from './pages/server/Server';
import Tabbuttom from './components/tabbuttom/Tabbuttom';
import Info from './pages/Info/Info'
import Main from './pages/Main/Main'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route  path='/info' component={Info} />
          <Route  path='/main' component={Main} />
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
