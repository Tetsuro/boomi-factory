import React from 'react';
import styles from './ButtonGroup.module.scss';
import Button from '../Button';

function ButtonGroup({ buttons }) {
  const buttonsMarkup = buttons.map((button, index) => (
    <li key={index}>
      {/* <button onClick={button.onClick}>{button.label}</button> */}
      <Button onClick={button.onClick}>{button.label}</Button>
    </li>
  ));

  return <ul className={styles.ButtonGroupList}>{buttonsMarkup}</ul>;
}

export default ButtonGroup;
