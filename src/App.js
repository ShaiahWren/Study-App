import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { getAllUsers } from "./api/index";

// Components
import LandingPage from "./components/LandingPage";

const apiUrl = "https://secret-gorge-43213.herokuapp.com/users/all";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    setUserData(data)
  }
  return (
    <div className="App">
      <Router>
        <LandingPage users={userData}/>
      </Router>
    </div>
  );
}

export default App;
