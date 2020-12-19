import React from 'react';
import styles from './Overlay.module.scss';

function Overlay({isOpen = false, children, title, onClose}) {
  return isOpen ? (
    <div className={styles.Overlay} aria-hidden="true">
    </div>
  ) : null;
}

export default Overlay;
