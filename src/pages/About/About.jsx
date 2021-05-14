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
      <p>
        Boomi is a friendly boombox buddy I created in 2007. Since its creation,
        Boomi has starred in many of my school projects including the{' '}
        <a
          href='https://www.youtube.com/watch?v=skoA5jfge7Q'
          target='_blank'
          rel='noopener noreferrer'
        >
          final project
        </a>{' '}
        for my 3D animation class.
      </p>
      <p>
        I first made Boomi into a papercraft toy in 2009 when I was really into
        Kidrobot toys. After a long hiatus Boomi finally returns, more
        customizable than ever!
      </p>
      <p>I hope you enjoy creating your own Boomi 😊</p>
      <p style={{ textAlign: 'right', marginBottom: '0' }}>
        <em>- tetchi</em>
      </p>
    </Modal>
  );
}
