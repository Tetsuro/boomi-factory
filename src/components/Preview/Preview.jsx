import React from 'react';
import styles from './Preview.module.scss';
import {ReactComponent as Boomi} from './svg/boomi.svg';

function Preview() {
  return (
    <div className={styles.Preview}>
      <Boomi />
    </div>
  );
}

export default Preview;
