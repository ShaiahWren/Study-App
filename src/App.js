import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

// Components
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">

      <Router>
        <LandingPage />
      </Router>
    </div>
  );
}

export default App;
