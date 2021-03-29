import React from 'react';

import Button from '../Button';
import styles from './FooterMenu.module.scss';
import { classNames } from '../../utilities/classNames';

function FooterMenu({ children, label, show, onClick }) {
  // Making opacity 0 instead of not rendering
  // in order to prevent janky animation when opening/closing sheet.
  const footerMenuClassNames = classNames(
    styles.FooterMenu,
    show && styles.visible
  );

  return (
    <nav className={footerMenuClassNames}>
      {children}
      <Button primary onClick={onClick}>
        {label}
      </Button>
    </nav>
  );
}

export default FooterMenu;
