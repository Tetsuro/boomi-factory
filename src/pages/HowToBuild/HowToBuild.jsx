import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/Modal';

export function About() {
  const { t } = useTranslation();

  return (
    <Modal title={t('menu.whats_a_boomi')}>
      <p>Testing</p>
    </Modal>
  );
}
