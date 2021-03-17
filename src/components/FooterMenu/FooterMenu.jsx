import React from 'react';

import Button from '../Button';
import styles from './FooterMenu.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../utilities/classNames';

function FooterMenu({ children, show }) {
  const { t } = useTranslation();

  // Making opacity 0 instead of not rendering
  // in order to prevent janky animation when opening/closing sheet.
  const footerMenuClassNames = classNames(
    styles.FooterMenu,
    show && styles.visible
  );

  function handlePrintButtonClick() {
    window.print();
  }

  return (
    <nav className={footerMenuClassNames}>
      {children}
      <Button primary onClick={handlePrintButtonClick}>
        {t('print')}
      </Button>
    </nav>
  );
}

export default FooterMenu;
