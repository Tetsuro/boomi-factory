import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as HamburgerIcon } from "./icons/menu.svg";
import {classNames} from '../../utilities/classNames';

function Header({show, onMobileMenuActivatorClick}) {
  function handleClick() {
    onMobileMenuActivatorClick();
  }

  const headerClassNames = classNames(styles.Header, !show && styles.hidden)

  return (
    <div className={headerClassNames}>
      <h1>Boomi Factory</h1>
      <button className={styles.MobileMenuActivator} onClick={handleClick}>
        <HamburgerIcon />
        <span>Open menu</span>
      </button>
    </div>
  );
}

export default Header;
