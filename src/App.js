import React from 'react';
import logo from './logo.svg';
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import My from './components/my/my';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={My} />
          <Route exact path='/server' component={My} />
          <Redirect to='/home' />          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
