import React from 'react';
import placeholder from './svg/placeholder-preview.png';
import styles from './Preview.module.scss';

function Preview() {
  return (
    <div className={styles.Preview}>
      {/* Placeholder image */}
      <img src={placeholder} />
    </div>
  );
}

export default Preview;
