import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

// Stylesheet
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="title-div">
      <div>
        <h2 className="nav-title">BOOKSTORE CMS</h2>
      </div>
      <div className="menu">
        <nav>
          <ul className="menu-list">
            <li className="list-item">
              <Link to="/">Books</Link>
            </li>
            <li className="list-item">
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
    <FaUserAlt className="user-icon" />
  </div>
);

export default Navbar;
