import React from "react";
import styles from "./FooterMenu.module.scss";

function FooterMenu() {
  return (
    <nav className={styles.FooterMenu}>
      <ul className={styles.FooterList}>
        <li>
          <button>Select colours</button>
        </li>
        <li>
          <button>Select eyes</button>
        </li>
        <li>
          <button>Print Boomi</button>
        </li>
      </ul>
    </nav>
  );
}

export default FooterMenu;
