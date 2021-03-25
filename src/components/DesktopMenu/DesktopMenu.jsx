import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './DesktopMenu.module.scss';
import { classNames } from '../../utilities/classNames';

// import { ReactComponent as CloseIcon } from '../../icons/close.svg';

function DesktopMenu({ tabs, children }) {
  // const transitionClassNames = {
  //   enter: classNames(styles.Sheet, styles['Sheet-enter']),
  //   enterActive: classNames(styles.Sheet, styles['Sheet-enter-active']),
  //   enterDone: classNames(styles.Sheet, styles['Sheet-enter-done']),
  //   exitActive: classNames(styles.Sheet, styles['Sheet-exit-active']),
  //   exitDone: classNames(styles.Sheet, styles['Sheet-exit-done']),
  // };

  return <div className={styles.DesktopMenu}>{children}</div>;
}

export default DesktopMenu;
