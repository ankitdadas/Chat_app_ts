import React from 'react';
import './App.scss';
import Master from "./components/hoc/Master";
import Login from "./pages/Login";
import LoginV2 from "./pages/LoginV2";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <Router>
      {/*  
      <LoginV2/>
       <Login/>
      */}
      
     <Master /> 
      
      </Router>
    </div>
  );
}

export default App;
