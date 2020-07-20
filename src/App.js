import React from 'react';
<<<<<<< HEAD
import './App.css';
import Info from './pages/Info/Info'
import Main from './pages/Main/Main'
=======
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import My from './components/my/my';
import Server from './components/server/Server';
import Tabbuttom from './components/tabbuttom/Tabbuttom';



>>>>>>> qzj

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Info ></Info> */}
      <Main></Main>
=======
      <BrowserRouter>
        <Switch>
          <Route  path='/home' component={My} />
          <Route  path='/server' component={Server} />
          <Redirect to='/home' />
        </Switch>
      <Tabbuttom />
      </BrowserRouter>
>>>>>>> qzj
    </div>
  );
}

export default App;
