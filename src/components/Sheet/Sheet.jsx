import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Sheet.module.scss';
import { classNames } from '../../utilities/classNames';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

export function Sheet({ isOpen = false, children, title, onClose }) {
  const transitionClassNames = {
    enter: classNames(styles.Sheet, styles['Sheet-enter']),
    enterActive: classNames(styles.Sheet, styles['Sheet-enter-active']),
    enterDone: classNames(styles.Sheet, styles['Sheet-enter-done']),
    exitActive: classNames(styles.Sheet, styles['Sheet-exit-active']),
    exitDone: classNames(styles.Sheet, styles['Sheet-exit-done']),
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={{ enter: 0, exit: 150 }}
      classNames={transitionClassNames}
      unmountOnExit
    >
      <div>
        <div className={styles.Header}>
          <h2>{title}</h2>
          <button className={styles.CloseButton} onClick={onClose}>
            <span>Close</span>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.Body}>{children}</div>
      </div>
    </CSSTransition>
  );
}
