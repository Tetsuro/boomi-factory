import React from 'react';

import styles from './OptionsGrid.module.scss';
import { classNames } from '../../utilities/classNames';

function OptionsGrid({ options }) {
  const optionsMarkup = options.map((option, index) => {
    const buttonClassNames = classNames(
      styles.Button,
      option.active && styles.active
    );

    return (
      <li key={index}>
        <button
          className={buttonClassNames}
          onClick={() => option.onClick(option)}
        >
          <div className={styles.Thumbnail}>{option.thumbnail}</div>
          <div className={styles.Title}>{option.title}</div>
        </button>
      </li>
    );
  });
  return <ul className={styles.OptionsGrid}>{optionsMarkup}</ul>;
}

export default OptionsGrid;
