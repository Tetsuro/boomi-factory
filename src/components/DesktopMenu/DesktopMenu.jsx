import React from 'react';
import styles from './DesktopMenu.module.scss';
import { classNames } from '../../utilities/classNames';
import { Button } from '../../components';

export function DesktopMenu({ tabs, activeTab, footerAction, onTabClick }) {
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
      <div className={styles.Body}>{tabs[activeTab].content}</div>
      <div className={styles.Footer}>
        <Button primary onClick={footerAction.onClick}>
          {footerAction.label}
        </Button>
      </div>
    </div>
  );
}
