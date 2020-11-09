import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { getAllUsers } from './api/index';

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
