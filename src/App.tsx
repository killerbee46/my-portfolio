import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div>
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
