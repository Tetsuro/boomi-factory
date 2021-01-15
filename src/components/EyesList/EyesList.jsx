import React from 'react';
import styles from './EyesList.module.scss';
import { eyesMap } from './eyesMap';

export function EyesList({ onEyesClick }) {
  function handleClick(eyes) {
    onEyesClick(eyes);
  }

  const listMarkup = [];

  for (const property in eyesMap) {
    // TODO: Make smaller SVGs for eyes preview.
    // const EyeComponent = eyesMap[property];
    // TODO: render <EyeComponent /> instead of {property}
    listMarkup.push(
      <li key={property}>
        <button onClick={() => handleClick(property)} className={styles.Button}>
          {property}
        </button>
      </li>
    );
  }

  return <ul className={styles.EyesList}>{listMarkup}</ul>;
}
