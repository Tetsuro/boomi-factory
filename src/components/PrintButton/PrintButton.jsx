import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PrintButton.module.scss';

function PrintButton() {
  const { t } = useTranslation();

  function handleClick() {
    window.print();
  }

  return (
    <button onClick={handleClick} className={styles.PrintButton}>
      {t('print')}
    </button>
  );
}

export default PrintButton;
