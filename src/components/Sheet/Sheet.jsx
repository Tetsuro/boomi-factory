import React from 'react';
import styles from './Sheet.module.scss';

import {ReactComponent as CloseIcon} from '../../icons/close.svg';

function Sheet({children, title, onClose}) {
  return (
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
  );
}

export default Sheet;
