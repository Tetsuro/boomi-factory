import React from 'react';
import styles from './ColorsList.module.scss';
import { colors } from '../../data/colors.json';
import OptionsGrid from '../OptionsGrid';

function ColorsList({ activeColor, onSwatchClick }) {
  function handleClick(color) {
    onSwatchClick(color);
  }

  // TODO: Better key for li?
  const options = colors.map((color, index) => {
    const isActive = color === activeColor;

    const thumbnailMarkup = (
      <div className={styles.ColorsThumbnail}>
        <span
          className={styles.Swatch}
          style={{ backgroundColor: color.primary }}
        ></span>
        <span
          className={styles.Swatch}
          style={{ backgroundColor: color.secondary }}
        ></span>
      </div>
    );

    return {
      title: color.name,
      thumbnail: thumbnailMarkup,
      active: isActive,
      onClick: () => handleClick(color),
    };
  });

  return <OptionsGrid options={options} />;
}

export default ColorsList;
