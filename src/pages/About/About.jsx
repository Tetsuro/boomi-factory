import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Modal } from '../../components';

export function About() {
  const { t } = useTranslation();

  return (
    <Modal title={t('menu.whats_a_boomi')}>
      <Helmet>
        <title>{t('whats_a_boomi.title')}</title>
      </Helmet>
      <p>What's a Boomi here.</p>
    </Modal>
  );
}
