import React from 'react';
import styles from './BluePrint.module.scss';
import { ReactComponent as BluePrintSVG } from './svg/blueprint.svg';
import { eyesArray } from '../EyesList';

export function BluePrint({ activeColor, activeEyes }) {
  const { primary, secondary } = activeColor;

  const SelectedEyesSVG = eyesArray.find((eye) => eye.name === activeEyes)
    .blueprintSvg;

  const primaryStyles = {
    fill: primary,
  };

  const secondaryStyles = {
    fill: secondary,
  };

  const fillsMarkup = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 792 612'>
      <rect width='792' height='612' style={{ fill: 'none' }} />
      <g>
        <rect
          x='170.2'
          y='493.2'
          width='80.51'
          height='81.75'
          style={secondaryStyles}
        />
        <g>
          <path d='M601.42,458.14' style={primaryStyles} />
          <path d='M669.33,575.63' style={primaryStyles} />
          <line
            x1='577.81'
            y1='470.83'
            x2='606.71'
            y2='524.58'
            style={primaryStyles}
          />
          <path d='M767.55,407.69' style={primaryStyles} />
          <path
            d='M754.52,307.64l-93.81,14.89-2.4,26.69L656,375.9,628.75,417l-27.33,41.13-23.61,12.69L554.2,483.52H455.56l-23.2,92.11h145l56.86-46.86,11.86,9.91,19.33-10.36L678.28,509l-8.6-13,23.89-36,23.89-36.05,15.32,2.87,12.81-19.34,2-22.09-13.77-7Z'
            style={primaryStyles}
          />
          <line
            x1='658.31'
            y1='349.22'
            x2='719.1'
            y2='354.67'
            style={primaryStyles}
          />
          <line
            x1='554.2'
            y1='483.52'
            x2='577.4'
            y2='575.63'
            style={primaryStyles}
          />
          <line
            x1='656'
            y1='375.9'
            x2='745.59'
            y2='407.45'
            style={primaryStyles}
          />
        </g>
        <g>
          <polyline
            points='335.2 247.33 452.43 247.33 452.43 145.31 351.08 145.31 335.2 160.85'
            style={primaryStyles}
          />
          <line
            x1='335.2'
            y1='138.1'
            x2='254.41'
            y2='138.1'
            style={primaryStyles}
          />
          <rect
            x='173.63'
            y='36.54'
            width='161.57'
            height='427.44'
            style={primaryStyles}
          />
          <polyline
            points='173.63 247.33 56.4 247.33 56.4 145.31 157.75 145.31 173.63 160.85'
            style={primaryStyles}
          />
          <line
            x1='173.63'
            y1='138.1'
            x2='254.41'
            y2='138.1'
            style={primaryStyles}
          />
        </g>
        <g>
          <polygon
            points='357.84 227.4 431.71 227.4 431.71 166.48 373.38 166.48 357.84 176.39 357.84 227.4'
            style={secondaryStyles}
          />
          <rect
            x='211.57'
            y='145.31'
            width='85.69'
            height='85.86'
            style={secondaryStyles}
          />
          <polygon
            points='150.99 227.4 77.12 227.4 77.12 166.48 135.45 166.48 150.99 176.39 150.99 227.4'
            style={secondaryStyles}
          />
        </g>
        <g>
          <polygon
            points='227.45 197 227.45 204.43 219.9 204.43 219.9 153.42 288.93 153.42 288.93 204.43 281.38 204.43 281.38 197 227.45 197'
            style={primaryStyles}
          />
          <polygon
            points='219.9 227.4 219.9 212.53 227.45 212.53 227.45 219.97 281.38 219.97 281.38 212.53 288.93 212.53 288.93 227.4 219.9 227.4'
            style={primaryStyles}
          />
        </g>
        <rect
          x='211.57'
          y='231.17'
          width='85.69'
          height='8.61'
          style={{ fill: '#fff' }}
        />
        <circle cx='239.38' cy='208.2' r='3.77' style={{ fill: '#fff' }} />
        <circle cx='269.45' cy='208.2' r='3.77' style={{ fill: '#fff' }} />
        <g>
          <path
            d='M413.54,289.28l-22.37,78.65,28.94,76.47a81.77,81.77,0,0,0-6.57-155.12Z'
            style={primaryStyles}
          />
          <path
            d='M509.46,289.28l-22.37,78.65L516,444.4a81.77,81.77,0,0,0-6.57-155.12Z'
            style={primaryStyles}
          />
        </g>
      </g>
    </svg>
  );

  return (
    <div className={styles.BluePrint}>
      {fillsMarkup}
      <SelectedEyesSVG />
      <BluePrintSVG />
    </div>
  );
}
