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
          x='169.65'
          y='494.36'
          width='79.92'
          height='81.15'
          style={secondaryStyles}
        />
        <g>
          <path d='M602.08,459.58' style={primaryStyles} />
          <path d='M669.49,576.21' style={primaryStyles} />
          <line
            x1='578.65'
            y1='472.18'
            x2='607.33'
            y2='525.54'
            style={primaryStyles}
          />
          <path d='M767,409.5' style={primaryStyles} />
          <path
            d='M754.05,310.19,660.93,325l-2.37,26.5-2.3,26.48-27,40.81-27.13,40.83-23.43,12.6-23.44,12.6H457.29l-23,91.43h144l56.44-46.52,11.79,9.84,19.18-10.29,12.73-19.17-8.54-12.89,23.72-35.79,23.72-35.78,15.2,2.85,12.72-19.2,1.95-21.92-13.68-7Z'
            style={primaryStyles}
          />
          <line
            x1='658.56'
            y1='351.46'
            x2='718.9'
            y2='356.87'
            style={primaryStyles}
          />
          <line
            x1='555.21'
            y1='484.78'
            x2='578.23'
            y2='576.21'
            style={primaryStyles}
          />
          <line
            x1='656.26'
            y1='377.94'
            x2='745.19'
            y2='409.26'
            style={primaryStyles}
          />
        </g>
        <g>
          <polyline
            points='332.13 245.24 448.49 245.24 448.49 143.97 347.9 143.97 332.13 159.4'
            style={primaryStyles}
          />
          <line
            x1='332.13'
            y1='136.82'
            x2='251.94'
            y2='136.82'
            style={primaryStyles}
          />
          <rect
            x='171.75'
            y='36'
            width='160.38'
            height='424.29'
            style={primaryStyles}
          />
          <polyline
            points='171.75 245.24 55.38 245.24 55.38 143.97 155.98 143.97 171.75 159.4'
            style={primaryStyles}
          />
          <line
            x1='171.75'
            y1='136.82'
            x2='251.94'
            y2='136.82'
            style={primaryStyles}
          />
        </g>
        <g>
          <polygon
            points='354.6 225.46 427.93 225.46 427.93 164.99 370.03 164.99 354.6 174.82 354.6 225.46'
            style={secondaryStyles}
          />
          <rect
            x='209.41'
            y='143.97'
            width='85.06'
            height='85.23'
            style={secondaryStyles}
          />
          <polygon
            points='149.27 225.46 75.95 225.46 75.95 164.99 133.85 164.99 149.27 174.82 149.27 225.46'
            style={secondaryStyles}
          />
        </g>
        <g>
          <polygon
            points='225.17 195.28 225.17 202.66 217.68 202.66 217.68 152.02 286.2 152.02 286.2 202.66 278.71 202.66 278.71 195.28 225.17 195.28'
            style={primaryStyles}
          />
          <polygon
            points='217.68 225.46 217.68 210.7 225.17 210.7 225.17 218.08 278.71 218.08 278.71 210.7 286.2 210.7 286.2 225.46 217.68 225.46'
            style={primaryStyles}
          />
        </g>
        <rect
          x='209.41'
          y='229.2'
          width='85.06'
          height='8.55'
          style={{ fill: '#fff' }}
        />
        <circle cx='237.02' cy='206.4' r='3.74' style={{ fill: '#fff' }} />
        <circle cx='266.86' cy='206.4' r='3.74' style={{ fill: '#fff' }} />
        <g>
          <path
            d='M411,289.44l-22.21,78.07,28.73,75.92a81.18,81.18,0,0,0-6.52-154Z'
            style={primaryStyles}
          />
          <path
            d='M506.22,289.44,484,367.51l28.73,75.92a81.18,81.18,0,0,0-6.52-154Z'
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
