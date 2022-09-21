import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigationContainer">
      <ul className="navList">
        <li className="navListItem">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="navListItem">
          <Link to={'/movies'}>Movies</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
