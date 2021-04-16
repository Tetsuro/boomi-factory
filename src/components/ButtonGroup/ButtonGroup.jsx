import React from 'react';
import styles from './ButtonGroup.module.scss';
import { Button } from '../../components';

export function ButtonGroup({ buttons }) {
  const buttonsMarkup = buttons.map((button, index) => (
    <li key={index}>
      <Button onClick={button.onClick}>{button.label}</Button>
    </li>
  ));

  return <ul className={styles.ButtonGroupList}>{buttonsMarkup}</ul>;
}
