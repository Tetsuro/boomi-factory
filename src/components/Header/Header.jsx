import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as HamburgerIcon } from "./icons/menu.svg";

function Header({onMobileMenuActivatorClick}) {
  function handleClick() {
    onMobileMenuActivatorClick();
  }

  return (
    <div className={styles.Header}>
      <h1>Boomi Factory</h1>
      <button className={styles.MobileMenuActivator} onClick={handleClick}>
        <HamburgerIcon />
        <span>Open menu</span>
      </button>
    </div>
  );
}

export default Header;
