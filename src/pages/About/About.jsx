import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/Modal';

export function HowToBuild() {
  const { t } = useTranslation();

  return (
    <Modal title={t('menu.how_to_build')}>
      <p>Testing</p>
    </Modal>
  );
}
