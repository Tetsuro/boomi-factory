import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Modal } from '../../components';

export function HowToBuild() {
  const { t } = useTranslation();

  return (
    <Modal title={t('menu.how_to_build')}>
      <Helmet>
        <title>{t('how_to_build.title')}</title>
      </Helmet>
      <p>How to build here</p>
    </Modal>
  );
}
