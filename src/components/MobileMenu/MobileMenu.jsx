import React from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { classNames } from '../../utilities/classNames';

import styles from './MobileMenu.module.scss';

export function MobileMenu({ open = false, onAnyLinkClick }) {
  const { t } = useTranslation();

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
      <nav>
        <div className={styles.Heading}>
          <h2>{t('menu.menu')}</h2>
        </div>
        <ul className={styles.MainMenu}>
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
          {/* <li>
            <a href="#">{t('menu.donate')}</a>
          </li> */}
        </ul>
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
      </nav>
    </CSSTransition>
  );
}
