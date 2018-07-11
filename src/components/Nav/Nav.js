import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/char/create">
            Create a Character
          </Link>
        </li>
        <li>
          <Link to="/char/list">
            Your Characters
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
