import React from 'react';
import './App.scss';
import Master from "./components/hoc/Master";
import Login from "./pages/Login";
import LoginV2 from "./pages/LoginV2";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
function App() {

  return (
    <div className="app-container">
      <Router>
        <Master />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/login1" component={LoginV2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
