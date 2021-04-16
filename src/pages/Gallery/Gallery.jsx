import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '../../components';

export function Gallery() {
  const { t } = useTranslation();

  return (
    <Modal title={t('menu.gallery')}>
      <p>Gallery</p>
    </Modal>
  );
}
