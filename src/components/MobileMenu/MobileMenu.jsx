import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { classNames } from '../../utilities/classNames';

import styles from './MobileMenu.module.scss';

export function MobileMenu({ open = false, onAnyLinkClick }) {
  const { t, i18n } = useTranslation();

  const transitionClassNames = {
    enter: classNames(styles.MobileMenu),
    enterDone: classNames(styles.MobileMenu, styles['MobileMenu-enter-done']),
    exitActive: classNames(styles.MobileMenu),
    exitDone: classNames(styles.MobileMenu),
  };

  return (
    <CSSTransition
      in={open}
      timeout={{ enter: 0, exit: 200 }}
      classNames={transitionClassNames}
      unmountOnExit
    >
      <div>
        <div className={styles.Heading}>
          <h2>{t('menu.menu')}</h2>
        </div>
        <nav className={styles.MainMenu}>
          <ul>
            <li>
              <Link
                to={{ pathname: '/about', state: { modalIsOpen: true } }}
                onClick={onAnyLinkClick}
              >
                {t('menu.whats_a_boomi')}
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: '/how-to-build', state: { modalIsOpen: true } }}
                onClick={onAnyLinkClick}
              >
                {t('menu.how_to_build')}
              </Link>
            </li>
          </ul>
        </nav>

        {/* <ul className={styles.LanguageMenu}>
          <li>
            <button onClick={() => i18n.changeLanguage('en')}>
              🇬🇧 English
            </button>
          </li>
          <li>
            <button onClick={() => i18n.changeLanguage('fr')}>
              🇫🇷 Français
            </button>
          </li>
          <li>
            <button onClick={() => i18n.changeLanguage('jp')}>🇯🇵 日本語</button>
          </li>
        </ul> */}
        <footer>
          <Trans i18nKey='footer.text'>
            {/* eslint-disable jsx-a11y/anchor-has-content */}
            {/* ...since content is filled in by i18n */}
            <a
              href='https://www.tetchi.ca'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
            <a
              href='https://www.twitter.com/t3tchi'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Trans>
        </footer>
      </div>
    </CSSTransition>
  );
}
