import React from 'react';

import PrintButton from '../PrintButton';
import styles from './FooterMenu.module.scss';

function FooterMenu({ children }) {
  return (
    <nav className={styles.FooterMenu}>
      {children}
      <PrintButton />
    </nav>
  );
}

export default FooterMenu;
