import React from "react";
import styles from "./MobileMenu.module.scss";

function MobileMenu({ open }) {
  return open ? (
    <div className={styles.Wrapper}>
      <ul>
        <li>
          <a href="#">What's a Boomi?</a>
        </li>
        <li>
          <a href="#">Build a Boomi</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Donate</a>
        </li>
      </ul>
    </div>
  ) : null;
}

export default MobileMenu;
