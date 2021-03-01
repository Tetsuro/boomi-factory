import React from 'react';
import styles from './BluePrint.module.scss';
import { ReactComponent as BluePrintSVG } from './svg/blueprint.svg';
import { eyesArray } from '../EyesList';

function BluePrint({ activeColor, activeEyes, minimized }) {
  // const { primary, secondary } = activeColor;

  // const SelectedEyesSVG = eyesArray.find((eye) => eye.name === activeEyes).svg;

  // const primaryStyles = {
  //   fill: primary,
  // };

  // const secondaryStyles = {
  //   fill: secondary,
  // };

  return (
    <div className={styles.BluePrint}>
      <BluePrintSVG />
    </div>
  );
}

export default BluePrint;
