import React from 'react';
import styles from './ButtonGroup.module.scss';

function ButtonGroup({ buttons }) {
  const buttonsMarkup = buttons.map((button, index) => (
    <li key={index}>
      <button onClick={button.onClick}>{button.label}</button>
    </li>
  ));

  return <ul className={styles.ButtonGroupList}>{buttonsMarkup}</ul>;
}

export default ButtonGroup;
