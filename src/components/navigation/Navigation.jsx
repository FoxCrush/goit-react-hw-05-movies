import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link to={'/'}>
            <span className={styles.navListItemTitle}>HOME</span>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link to={'/movies'}>
            <span className={styles.navListItemTitle}>MOVIES</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
