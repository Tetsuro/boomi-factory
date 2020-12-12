import React from 'react';
import styles from './ColorsList.module.scss';
import {colors} from "../../data/colors.json";

function ColorsList() {

  // TODO: Better key for li?
  const listMarkup = colors.map((color, index) => (
    <li key={index}>
      <button className={styles.Button}>
        {color.name}
        <span className={styles.Swatch} style={{'backgroundColor': color.primary}}></span>
        <span className={styles.Swatch} style={{'backgroundColor': color.secondary}}></span>
      </button>
    </li>
  ));

  return (
    <ul className={styles.ColorsList}>
      {listMarkup}
    </ul>
  );
}

export default ColorsList;
