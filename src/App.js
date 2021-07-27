import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './Styles/style.css';
import Header from './Components/Header';


function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <Header />
        </div>
      </div>
    </Router>
  );
}

export default App;
