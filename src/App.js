import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth:"40rem", margin:"4rem auto"}}>
      <Router>
        <Switch>
        <Route exact path="/add" component={ AddUser } />
        <Route path="/edit/:id" component={ EditUser } />
        <Route path="/" component={ Home } />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
