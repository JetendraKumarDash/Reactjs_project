import React from 'react';
import Home from './Homepage';
import Tdetails from './Teamdetails';
import Pdetails from './Playersdetails';
import Addplayer from './Addplayer';
import Nav from './navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tdetails' component={Tdetails} />
        <Route path='/pdetails' component={Pdetails} />
        <Route path='/addplayer' component={Addplayer} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
