import React from 'react';

import PrintButton from '../PrintButton';
import styles from './FooterMenu.module.scss';
import { classNames } from '../../utilities/classNames';

function FooterMenu({ children, show }) {
  // Making opacity 0 instead of not rendering
  // in order to prevent janky animation when opening/closing sheet.
  const footerMenuClassNames = classNames(
    styles.FooterMenu,
    show && styles.visible
  );

  return (
    <nav className={footerMenuClassNames}>
      {children}
      <PrintButton />
    </nav>
  );
}

export default FooterMenu;
