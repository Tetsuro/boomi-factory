import React from "react";
import {CSSTransition} from 'react-transition-group';
import styles from "./Header.module.scss";
import { ReactComponent as HamburgerIcon } from "./icons/menu.svg";
import {classNames} from '../../utilities/classNames';

function Header({show = true, onMobileMenuActivatorClick}) {
  function handleClick() {
    onMobileMenuActivatorClick();
  }

  const transitionClassNames = { 
    appear: styles.Header,
    enter: classNames(styles.Header, styles['Header-enter']),
    enterActive: classNames(styles.Header, styles['Header-enter-active']),
    enterDone: classNames(styles.Header, styles['Header-enter-done']),
    exitActive: classNames(styles.Header, styles['Header-exit-active']),
    exitDone: classNames(styles.Header, styles['Header-exit-done']),
  };

  return (
      <CSSTransition in={show} appear={show} timeout={{enter: 0, exit: 100}} classNames={transitionClassNames} unmountOnExit>
        <div>
          <h1>Boomi</h1>
          <button className={styles.MobileMenuActivator} onClick={handleClick}>
            <HamburgerIcon />
            <span>Open menu</span>
          </button>
        </div>
      </CSSTransition>
  );
}

export default Header;
