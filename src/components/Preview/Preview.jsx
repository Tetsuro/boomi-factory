import React from 'react';
import styles from './Preview.module.scss';
import {ReactComponent as Boomi} from './svg/boomi.svg';
import {eyesMap} from '../EyesList';
import {classNames} from '../../utilities/classNames';

function Preview({activeColor, activeEyes, minimized}) {

  const {primary, secondary} = activeColor;

  const SelectedEyes = eyesMap[activeEyes];

  const primaryStyles = {
    fill: primary,
  }

  const secondaryStyles = {
    fill: secondary,
  }

  const previewClassNames = classNames(styles.Preview, minimized && styles.minimized)

  const fillColorMarkup = (
    <svg id="Fill-Colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538.32 725.47">
      <g id="Body">
        <path d="M550,664.72,459.88,574H163.51L73.44,664.72S68.84,692.23,102,709a95.24,95.24,0,0,0,47.76,10.55l-16.61,64.62h57.72L211,750H412.37l20.13,34.23h57.72l-16.61-64.62A95.27,95.27,0,0,0,521.38,709C554.55,692.23,550,664.72,550,664.72Z" transform="translate(-13.85 -60.71)" style={primaryStyles}/>
      </g>
      <g id="Head">
        <polygon points="82.76 513.34 79.39 288.34 86.17 243.89 136.14 227.12 297.85 227.45 459.55 227.12 506.53 243.89 516.31 291.34 512.93 513.34 82.76 513.34" style={primaryStyles} />
      </g>
      <g id="OuterFaceplate">
        <polygon points="407.96 474.5 408.28 291.71 399.57 256.35 194.12 256.35 187.41 291.71 187.73 474.5 407.96 474.5" style={secondaryStyles}></polygon>
      </g>
      <g id="InnerFaceplate">
        <polygon points="209.9 273.7 205.9 291.71 205.9 404.81 227.79 404.81 227.79 384.03 367.9 384.03 367.9 404.81 389.79 404.81 390.79 291.71 385.79 273.7 209.9 273.7" style={primaryStyles}></polygon>
        <polygon points="205.9 464.6 205.9 423.23 227.79 423.23 227.79 445.11 367.9 445.11 367.9 423.23 389.79 423.23 389.79 464.6 205.9 464.6" style={primaryStyles}></polygon>
      </g>
      <SelectedEyes />
    </svg>
  );

  return (
    <div className={previewClassNames}>
      {fillColorMarkup}
      <Boomi />
    </div>
  );
}




export default Preview;
