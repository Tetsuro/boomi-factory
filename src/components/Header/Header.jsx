import React, { useState } from "react";
import styles from "./Header.module.scss";
import HamburgerMenu from "../HamburgerMenu";

import { ReactComponent as HamburgerActivatorIcon } from "./icons/menu.svg";

function Header() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(open ? false : true);
  }

  return (
    <div className={styles.Header}>
      <h1>Boomi Factory</h1>

      <button className={styles.HamburgerActivator} onClick={handleClick}>
        <HamburgerActivatorIcon />
        <span>Open menu</span>
      </button>

      <HamburgerMenu open={open} />
    </div>
  );
}

export default Header;
