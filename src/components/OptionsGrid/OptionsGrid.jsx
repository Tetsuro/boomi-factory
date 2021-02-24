import React from 'react';

import styles from './OptionsGrid.module.scss';

function OptionsGrid({ options }) {
  const optionsMarkup = options.map((option, index) => {
    return (
      <li key={index}>
        <button
          className={styles.Button}
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
