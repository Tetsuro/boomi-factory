import React from 'react';
import styles from './EyesList.module.scss';
import { eyesArray } from './eyesMap';

export function EyesList({ onEyesClick }) {
  function handleClick(eye) {
    console.log(eye);
    onEyesClick(eye.svg);
  }

  const listMarkup = eyesArray.map((eye, index) => {
    // const isActive = color === activeColor;
    // const buttonClassNames = classNames(
    //   styles.Button,
    //   isActive && styles.active
    // );
    const PreviewSVG = eye.previewSvg;

    return (
      <li key={index}>
        <button className={styles.Button} onClick={() => handleClick(eye)}>
          <PreviewSVG style={{ width: '100px' }} />
          {eye.name}
        </button>
      </li>
    );
  });

  // for (const property in eyesMap) {
  //   // TODO: Make smaller SVGs for eyes preview.
  //   // const EyeComponent = eyesMap[property];
  //   // TODO: render <EyeComponent /> instead of {property}
  //   listMarkup.push(
  //     <li key={property}>
  //       <button onClick={() => handleClick(property)} className={styles.Button}>
  //         Hi - {property}
  //       </button>
  //     </li>
  //   );
  // }

  return <ul className={styles.EyesList}>{listMarkup}</ul>;
}
