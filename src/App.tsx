import React from 'react';
import './App.scss';
import Master from "./components/hoc/Master";
import LoginV2 from "./pages/LoginV2";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LoginButton from './components/LoginButton';
import theme from "./components/Config/Theme";
import { ThemeProvider } from '@mui/material/styles';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        {/* <LoginButton></LoginButton> */}
        <Router>
          <Master />
          <Switch>
            <Route exact path="/" component={LoginV2} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
