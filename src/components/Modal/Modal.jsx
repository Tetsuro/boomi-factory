import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.scss';
import { classNames } from '../../utilities/classNames';
import { Link } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

function Modal({ isOpen = false, children, title, onClose }) {
  const transitionClassNames = {
    appear: classNames(styles.Modal, styles['Modal-appear']),
    enter: classNames(styles.Modal, styles['Modal-enter']),
    enterActive: classNames(styles.Modal, styles['Modal-enter-active']),
    enterDone: classNames(styles.Modal, styles['Modal-enter-done']),
    exitActive: classNames(styles.Modal, styles['Modal-exit-active']),
    exitDone: classNames(styles.Modal, styles['Modal-exit-done']),
  };

  return (
    <CSSTransition
      in
      appear
      timeout={{ enter: 0, exit: 0 }}
      classNames={transitionClassNames}
    >
      <div>
        <div className={styles.Header}>
          <h2>{title}</h2>
          <Link to='/' className={styles.CloseButton}>
            <span>Close</span>
            <CloseIcon />
          </Link>
        </div>
        <div className={styles.Body}>{children}</div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
