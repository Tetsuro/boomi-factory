import React from 'react';
import { colors } from '../../data/colors.json';
import styles from './PaletteTest.module.scss';

export function PaletteTest() {
  const paletteMarkup = colors.map((color, index) => {
    return (
      <div className={styles.Palette}>
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
  });

  return <div className={styles.PaletteTest}>{paletteMarkup}</div>;
}
