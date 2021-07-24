import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import './Styles/style.css';
import Header from './Components/Header';
import Routes from './Components/Routes';


function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <Header />
        </div>
        <hr />
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
