import React from 'react';
import { eyesArray } from './eyesMap';
import OptionsGrid from '../OptionsGrid';
import styles from './EyesList.module.scss';

// TODO: Do I even need this component or can I just use OptionsGrid?

export function EyesList({ onEyesClick }) {
  function handleClick(eye) {
    onEyesClick(eye.svg);
  }

  const options = eyesArray.map((eye) => {
    const thumbnailMarkup = (
      <div className={styles.EyeThumbnail}>
        <eye.previewSvg />
      </div>
    );

    return {
      title: eye.name,
      thumbnail: thumbnailMarkup,
      onClick: () => handleClick(eye),
    };
  });

  return <OptionsGrid options={options} />;
}
