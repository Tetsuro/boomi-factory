import React from 'react';
import styles from './Sheet.module.scss';

import {ReactComponent as CloseIcon} from '../../icons/close.svg';

function Sheet({isOpen = false, children, title, onClose}) {
  return isOpen ? (
    <div className={styles.Sheet}>
      <div className={styles.Header}>
        <h2>{title}</h2>
        <button className={styles.CloseButton} onClick={onClose}>
          <span>Close</span>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.Body}>
        {children}
      </div>
    </div>
  ) : null;
}

export default Sheet;
