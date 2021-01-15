import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PrintButton.module.scss';

function PrintButton() {
  const { t } = useTranslation();

  return <button className={styles.PrintButton}>{t('print')}</button>;
}

export default PrintButton;
