import React, { useState } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as HamburgerActivatorIcon } from "./icons/menu.svg";

function Header({onMobileMenuActivatorClick}) {
  function handleClick() {
    onMobileMenuActivatorClick();
  }

  return (
    <div className={styles.Header}>
      <h1>Boomi Factory</h1>
      <button className={styles.HamburgerActivator} onClick={handleClick}>
        <HamburgerActivatorIcon />
        <span>Open menu</span>
      </button>
    </div>
  );
}

export default Header;
