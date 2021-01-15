import React from 'react';
import styles from './ColorsList.module.scss';
import { colors } from '../../data/colors.json';
import { classNames } from '../../utilities/classNames';

function ColorsList({ activeColor, onSwatchClick }) {
  function handleClick(color) {
    onSwatchClick(color);
  }

  // TODO: Better key for li?
  const listMarkup = colors.map((color, index) => {
    const isActive = color === activeColor;
    const buttonClassNames = classNames(
      styles.Button,
      isActive && styles.active
    );

    return (
      <li key={index}>
        <button className={buttonClassNames} onClick={() => handleClick(color)}>
          <div className={styles.SwatchWrapper}>
            <span
              className={styles.Swatch}
              style={{ backgroundColor: color.primary }}
            ></span>
            <span
              className={styles.Swatch}
              style={{ backgroundColor: color.secondary }}
            ></span>
          </div>
          <div className={styles.Label}>{color.name}</div>
        </button>
      </li>
    );
  });

  return <ul className={styles.ColorsList}>{listMarkup}</ul>;
}

export default ColorsList;
