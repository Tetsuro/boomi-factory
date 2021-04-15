import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { ReactComponent as HamburgerIcon } from './icons/menu.svg';
import { ReactComponent as Logo } from './icons/logo.svg';

import { classNames } from '../../utilities/classNames';

function Header({ show = true, onMobileMenuActivatorClick }) {
  const { t } = useTranslation();

  function handleClick() {
    onMobileMenuActivatorClick();
  }

  const transitionClassNames = {
    appear: styles.Header,
    enter: classNames(styles.Header, styles['Header-enter']),
    enterActive: classNames(styles.Header, styles['Header-enter-active']),
    enterDone: classNames(styles.Header, styles['Header-enter-done']),
    exitActive: classNames(styles.Header, styles['Header-exit-active']),
    exitDone: classNames(styles.Header, styles['Header-exit-done']),
  };

  return (
    <CSSTransition
      in={show}
      appear={show}
      timeout={{ enter: 0, exit: 100 }}
      classNames={transitionClassNames}
      unmountOnExit
    >
      <div>
        <div className={styles.Logo}>
          <Logo />
          <h1>boomi</h1>
        </div>
        <nav className={styles.Links}>
          <ul>
            <li>
              <Link to={{ pathname: '/about', state: { modalIsOpen: true } }}>
                {t('menu.whats_a_boomi')}
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: '/how-to-build', state: { modalIsOpen: true } }}
              >
                {t('menu.how_to_build')}
              </Link>
            </li>
            <li>
              <Link to={{ pathname: '/gallery', state: { modalIsOpen: true } }}>
                {t('menu.gallery')}
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.MobileMenuActivator} onClick={handleClick}>
          <HamburgerIcon />
          <span>Open menu</span>
        </button>
      </div>
    </CSSTransition>
  );
}

export default Header;
