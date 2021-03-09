import React from 'react';
import styles from './BluePrint.module.scss';
import { ReactComponent as BluePrintSVG } from './svg/blueprint.svg';
import { eyesArray } from '../EyesList';

function BluePrint({ activeColor, activeEyes, minimized }) {
  const { primary, secondary } = activeColor;

  // const SelectedEyesSVG = eyesArray.find((eye) => eye.name === activeEyes).svg;

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
          x='181.98'
          y='493.63'
          width='83.93'
          height='85.22'
          style={secondaryStyles}
        />
        <g>
          <path d='M606.7,456.05' style={primaryStyles} />
          <path d='M677.49,578.53' style={primaryStyles} />
          <line
            x1='582.1'
            y1='469.28'
            x2='612.22'
            y2='525.31'
            style={primaryStyles}
          />
          <path d='M779.89,403.45' style={primaryStyles} />
          <path
            d='M766.3,299.16l-97.79,15.51L666,342.5l-2.41,27.81L635.2,413.17l-28.5,42.88-24.6,13.23-24.62,13.23H454.65l-24.18,96H581.66l59.28-48.85L653.31,540l20.14-10.8,13.38-20.14-9-13.54L702.77,458l24.91-37.58,16,3L757,403.21l2-23-14.36-7.32Z'
            style={primaryStyles}
          />
          <line
            x1='666.02'
            y1='342.5'
            x2='729.38'
            y2='348.18'
            style={primaryStyles}
          />
          <line
            x1='557.48'
            y1='482.51'
            x2='581.66'
            y2='578.53'
            style={primaryStyles}
          />
          <line
            x1='663.61'
            y1='370.31'
            x2='757'
            y2='403.21'
            style={primaryStyles}
          />
        </g>
        <g>
          <polyline
            points='328.23 232.24 450.44 232.24 450.44 125.89 344.79 125.89 328.23 142.09'
            style={primaryStyles}
          />
          <line
            x1='328.23'
            y1='118.37'
            x2='244.02'
            y2='118.37'
            style={primaryStyles}
          />
          <rect
            x='159.81'
            y='12.49'
            width='168.43'
            height='445.59'
            style={primaryStyles}
          />
          <polyline
            points='159.81 232.24 37.6 232.24 37.6 125.89 143.25 125.89 159.81 142.09'
            style={primaryStyles}
          />
          <line
            x1='159.81'
            y1='118.37'
            x2='244.02'
            y2='118.37'
            style={primaryStyles}
          />
        </g>
        <g>
          <polygon
            points='351.84 211.46 428.84 211.46 428.84 147.95 368.04 147.95 351.84 158.28 351.84 211.46'
            style={secondaryStyles}
          />
          <rect
            x='199.36'
            y='125.89'
            width='89.33'
            height='89.5'
            style={secondaryStyles}
          />
          <polygon
            points='136.2 211.46 59.2 211.46 59.2 147.95 120 147.95 136.2 158.28 136.2 211.46'
            style={secondaryStyles}
          />
        </g>
        <g>
          <polygon
            points='215.91 179.76 215.91 187.51 208.04 187.51 208.04 134.34 280 134.34 280 187.51 272.13 187.51 272.13 179.76 215.91 179.76'
            style={primaryStyles}
          />
          <polygon
            points='208.04 211.46 208.04 195.96 215.91 195.96 215.91 203.71 272.13 203.71 272.13 195.96 280 195.96 280 211.46 208.04 211.46'
            style={primaryStyles}
          />
        </g>
        <rect
          x='199.36'
          y='215.39'
          width='89.33'
          height='8.98'
          style={{ fill: '#fff' }}
        />
        <circle cx='228.35' cy='191.44' r='3.93' style={{ fill: '#fff' }} />
        <circle cx='259.69' cy='191.44' r='3.93' style={{ fill: '#fff' }} />
        <g>
          <path
            d='M420.33,272.75l-23.33,82,30.17,79.73a85.26,85.26,0,0,0-6.84-161.72Z'
            style={primaryStyles}
          />
          <path
            d='M520.33,272.75l-23.33,82,30.17,79.73a85.26,85.26,0,0,0-6.84-161.72Z'
            style={primaryStyles}
          />
        </g>
      </g>
    </svg>
  );

  return (
    <div className={styles.BluePrint}>
      {fillsMarkup}
      <BluePrintSVG />
    </div>
  );
}

export default BluePrint;
