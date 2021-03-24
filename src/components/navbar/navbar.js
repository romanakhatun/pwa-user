import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">About</Link>
      <Link to="/user">User</Link>
      <Link to="/camera">Camera</Link>
    </header>
  );
};

export default Navbar;