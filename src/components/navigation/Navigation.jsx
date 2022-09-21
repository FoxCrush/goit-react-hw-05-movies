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
      <img
        className={styles.logo}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
        alt="themoviedb logo"
      />
    </div>
  );
};

export default Navigation;
