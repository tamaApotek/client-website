import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './screens/homepage/homepage'
import Login from './screens/login/login'
import Antrian from './screens/antrian/antrian'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dokter">
          <Antrian />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
