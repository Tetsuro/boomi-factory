import React from 'react';
import styles from './Overlay.module.scss';

function Overlay({isOpen = false, onClick}) {
  return isOpen ? (
    <div className={styles.Overlay} aria-hidden="true" onClick={onClick}>
    </div>
  ) : null;
}

export default Overlay;
