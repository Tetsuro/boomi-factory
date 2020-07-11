import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.Preview}>
      <h1>Boomi Factory</h1>
      <button>Menu</button>
      <ul>
        <li>
          <a href='#'>What's a Boomi?</a>
        </li>
        <li>
          <a href='#'>Build a Boomi</a>
        </li>
        <li>
          <a href='#'>Gallery</a>
        </li>
        <li>
          <a href='#'>Donate</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
