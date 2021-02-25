import React from 'react';
import { eyesArray } from './eyesMap';
import OptionsGrid from '../OptionsGrid';
import styles from './EyesList.module.scss';

export function EyesList({ activeEyes, onEyesClick }) {
  function handleClick(eyeName) {
    onEyesClick(eyeName);
  }

  const activeEyesName = eyesArray.find((eye) => eye.name === activeEyes).name;

  const options = eyesArray.map((eye) => {
    const thumbnailMarkup = (
      <div className={styles.EyeThumbnail}>
        <eye.previewSvg />
      </div>
    );

    return {
      title: eye.name,
      thumbnail: thumbnailMarkup,
      active: eye.name === activeEyesName,
      onClick: () => handleClick(eye.name),
    };
  });

  return <OptionsGrid options={options} />;
}
