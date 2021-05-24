import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/login/Login";
import Home from './screens/home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
