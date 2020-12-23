import React from "react";
import { useTranslation } from 'react-i18next';

import styles from "./MobileMenu.module.scss";

function MobileMenu({ open }) {
  const {t, i18n} = useTranslation();

  return open ? (
    <nav className={styles.MobileMenu}>
      <h2>{t('menu.menu')}</h2>
      <ul>
        <li>
          <a href="#">{t('menu.whats_a_boomi')}</a>
        </li>
        <li>
          <a href="#">{t('menu.donate')}</a>
        </li>
      </ul>
      <ul>
        <li><button onClick={() => i18n.changeLanguage('en')}>🇬🇧 English</button></li>
        <li><button onClick={() => i18n.changeLanguage('fr')}>🇫🇷 Français</button></li>
        <li><button onClick={() => i18n.changeLanguage('jp')}>🇯🇵 日本語</button></li>
      </ul>
    </nav>
  ) : null;
}

export default MobileMenu;
