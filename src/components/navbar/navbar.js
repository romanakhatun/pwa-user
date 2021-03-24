import React from 'react';
import { Link } from 'react-router-dom';
import Install from '../install/install';
import './navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">About</Link>
      <Link to="/user">User</Link>
      <Link to="/camera">Camera</Link>
      <Install />
    </header>
  );
};

export default Navbar;