import React from 'react';
import './App.scss';
import Master from "./components/hoc/Master";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <Router>
        <Master />
      </Router>
    </div>
  );
}

export default App;
