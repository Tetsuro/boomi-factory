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
      <g id='Fills'>
        <g id='HeadBand'>
          <rect
            x='170.2'
            y='493.2'
            width='80.51'
            height='81.75'
            style={secondaryStyles}
          />
        </g>
        <g id='Body'>
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
        <g id='Head_Primary1'>
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
        <g id='Head_Secondary'>
          <g id='Head'>
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
        </g>
        <g id='Head_Primary2'>
          <polygon
            points='227.45 197 227.45 204.43 219.9 204.43 219.9 153.42 288.93 153.42 288.93 204.43 281.38 204.43 281.38 197 227.45 197'
            style={primaryStyles}
          />
          <polygon
            points='219.9 227.4 219.9 212.53 227.45 212.53 227.45 219.97 281.38 219.97 281.38 212.53 288.93 212.53 288.93 227.4 219.9 227.4'
            style={primaryStyles}
          />
        </g>
        <g id='Teeth'>
          <rect
            x='211.57'
            y='231.17'
            width='85.69'
            height='8.61'
            style={{ fill: '#fff' }}
          />
        </g>
        <g id='Nostrils'>
          <circle cx='239.38' cy='208.2' r='3.77' style={{ fill: '#fff' }} />
        </g>
        <circle cx='269.45' cy='208.2' r='3.77' style={{ fill: '#fff' }} />
        <g id='Arms'>
          <path
            d='M413.54,289.28l-22.37,78.65,28.94,76.47a81.77,81.77,0,0,0-6.57-155.12Z'
            style={primaryStyles}
          />
          <path
            d='M509.46,289.28l-22.37,78.65L516,444.4a81.77,81.77,0,0,0-6.57-155.12Z'
            style={primaryStyles}
          />
        </g>
        <g id='Logo'>
          <ellipse
            cx='515.72'
            cy='531.56'
            rx='3.94'
            ry='5.46'
            style={secondaryStyles}
          />
          <path
            d='M520.6,506.43H504.17l3.23-9a1.93,1.93,0,1,0-3.64-1.31l-3.69,10.27h-6.93l-4-10.32a2,2,0,0,0-2.51-1.1,1.93,1.93,0,0,0-1.09,2.5l3.47,8.92h-1.12a5.45,5.45,0,0,0-5.45,5.41v28.1a4.35,4.35,0,0,0,4.35,4.35H521.7a4.35,4.35,0,0,0,4.35-4.35v-28.1A5.45,5.45,0,0,0,520.6,506.43Zm-34.29,9v-3.56a1.56,1.56,0,0,1,1.56-1.56h2.62l2,5.09h-5.71A3.59,3.59,0,0,0,486.31,515.41Zm6.45,24c-3.13,0-5.66-3.51-5.66-7.84s2.53-7.84,5.66-7.84,5.66,3.51,5.66,7.84S495.88,539.4,492.76,539.4Zm4.1-24h-.23l-2-5.09h4Zm18.86,24c-3.12,0-5.66-3.51-5.66-7.84s2.54-7.84,5.66-7.84,5.66,3.51,5.66,7.84S518.85,539.4,515.72,539.4Zm6-24H501l1.83-5.1H520.6a1.56,1.56,0,0,1,1.56,1.56v3.56A3.59,3.59,0,0,0,521.7,515.38Z'
            style={secondaryStyles}
          />
          <ellipse
            cx='492.76'
            cy='531.56'
            rx='3.94'
            ry='5.46'
            style={secondaryStyles}
          />
          <g>
            <path
              d='M487.67,551.6a3.73,3.73,0,0,1,0,7.45,2.55,2.55,0,0,1-2.15-1.15V558a1,1,0,0,1-1.08,1,1,1,0,0,1-1.07-1v-9.33a1,1,0,0,1,1.07-1,1,1,0,0,1,1.08,1v4A2.67,2.67,0,0,1,487.67,551.6Zm-.41,1.92a1.82,1.82,0,0,0,0,3.63,1.82,1.82,0,0,0,0-3.63Z'
              style={secondaryStyles}
            />
            <path
              d='M492.28,555.3a3.78,3.78,0,0,1,7.55,0,3.78,3.78,0,0,1-7.55,0Zm5.4,0a1.63,1.63,0,1,0-3.25,0,1.63,1.63,0,1,0,3.25,0Z'
              style={secondaryStyles}
            />
            <path
              d='M500.94,555.3a3.77,3.77,0,0,1,7.54,0,3.77,3.77,0,0,1-7.54,0Zm5.39,0a1.62,1.62,0,1,0-3.24,0,1.62,1.62,0,1,0,3.24,0Z'
              style={secondaryStyles}
            />
            <path
              d='M515.59,552.89c0-1.51,2.83-1.31,2.83-1.31,1.71,0,2.8,1.09,2.82,3.26V558a1,1,0,0,1-1.08,1,1.06,1.06,0,0,1-1.08-1v-2.95c0-.94-.56-1.43-1.19-1.43s-1.22.41-1.22,1.46V558a1,1,0,0,1-1.07,1,1.06,1.06,0,0,1-1.08-1v-3a1.23,1.23,0,0,0-1.18-1.38c-.65,0-1.25.37-1.25,1.46V558a1,1,0,0,1-1.07,1,1.06,1.06,0,0,1-1.08-1v-5.43a1.06,1.06,0,0,1,1.08-1,1,1,0,0,1,1.07,1s.15-1,1.88-1A1.68,1.68,0,0,1,515.59,552.89Z'
              style={secondaryStyles}
            />
            <path
              d='M524.07,547.83a1.26,1.26,0,1,1,0,2.51,1.26,1.26,0,1,1,0-2.51ZM525.14,558a1,1,0,0,1-1.07,1,1.06,1.06,0,0,1-1.08-1v-5.43a1.06,1.06,0,0,1,1.08-1,1,1,0,0,1,1.07,1Z'
              style={secondaryStyles}
            />
          </g>
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
