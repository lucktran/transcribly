import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1em', background: '#333', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', alignItems: 'center' }}>
        <h1 style={{ color: '#fff' }}>Transcribly</h1>
        <ul style={{ display: 'flex', justifyContent: 'space-between', width: '60%', listStyle: 'none' }}>
          <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/aboutus" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link></li>
          <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </div>
      <ul style={{ display: 'flex', justifyContent: 'space-between', width: '10%', listStyle: 'none' }}>
        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
        <li><Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;