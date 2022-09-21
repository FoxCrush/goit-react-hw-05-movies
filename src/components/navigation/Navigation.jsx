import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink
            className={navData =>
              navData.isActive ? styles.navListLinkActive : styles.navListLink
            }
            end
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink
            className={navData =>
              navData.isActive ? styles.navListLinkActive : styles.navListLink
            }
            to="/movies"
          >
            MOVIES
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
