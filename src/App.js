import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import My from './pages/my/my';
import Server from './pages/server/Server';
import Tabbuttom from './components/tabbuttom/Tabbuttom';



=======
import './App.css';
import Info from './pages/Info/Info'
import Main from './pages/Main/Main'
>>>>>>> 74f019a5da56225953339f5d06c43927378cd000

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Switch>
          <Route  path='/home' component={My} />
          <Route  path='/server' component={Server} />
          <Redirect to='/home' />
        </Switch>
      <Tabbuttom />
      </BrowserRouter>
=======
      {/* <Info ></Info> */}
      <Main></Main>
>>>>>>> 74f019a5da56225953339f5d06c43927378cd000
    </div>
  );
}

export default App;
