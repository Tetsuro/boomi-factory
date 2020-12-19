import React from "react";
import styles from "./MobileMenu.module.scss";

function MobileMenu({ open }) {
  return open ? (
    <nav className={styles.MobileMenu}>
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="#">What's a Boomi?</a>
        </li>
        <li>
          <a href="#">Build a Boomi</a>
        </li>
        <li>
          <a href="#">Donate</a>
        </li>
      </ul>
    </nav>
  ) : null;
}

export default MobileMenu;
