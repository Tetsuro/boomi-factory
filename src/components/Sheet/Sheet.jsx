import React from 'react';
import styles from './Sheet.module.scss';

function Sheet({children, title, onClose}) {
  console.log(children)
  return (
    <div className={styles.Sheet}>
      <div className={styles.Header}>
        <h2>{title}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Sheet;
