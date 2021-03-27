import React from 'react';
import styles from './DesktopMenu.module.scss';
import { classNames } from '../../utilities/classNames';

function DesktopMenu({ tabs, activeTab, onTabClick, children }) {
  const tabsMarkup = tabs.map((tab, index) => {
    const tabClasses = classNames(
      styles.Tab,
      activeTab === index && styles.active
    );

    return (
      <button className={tabClasses} onClick={() => onTabClick(index)}>
        {tab.label}
      </button>
    );
  });

  return (
    <div className={styles.DesktopMenu}>
      <div className={styles.Tabs}>{tabsMarkup}</div>
      <div className={styles.Body}>{children}</div>
    </div>
  );
}

export default DesktopMenu;
