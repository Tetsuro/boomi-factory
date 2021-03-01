import React from 'react';
import styles from './BluePrint.module.scss';
// import { ReactComponent as Boomi } from './svg/boomi.svg';
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

  return <div className={styles.BluePrint}>Hello</div>;
}

export default BluePrint;
