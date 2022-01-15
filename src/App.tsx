import React from 'react';
import './App.css';
import {Link, Outlet, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      Hello world!
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        <Link to="/home">Home Page</Link> | 
        <Link to="/about">About Page</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
