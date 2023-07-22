import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';
import Projects from './components/Projects'
import Files from './components/Files'

function ApplicationRoutes() {
  const location = useLocation();
  
  return (
    <>
      {/* Render Hero component conditionally based on the location */}
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/files" element={<Files />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ApplicationRoutes />
    </Router>
  );
}

export default App;