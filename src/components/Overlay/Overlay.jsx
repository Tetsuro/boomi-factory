import React from 'react';
import styles from './Overlay.module.scss';
import {classNames} from '../../utilities/classNames';

function Overlay({isOpen = false, transparent, onClick}) {

  const overlayClassNames = classNames(styles.Overlay, transparent && styles.transparent)

  return isOpen ? (
    <div className={overlayClassNames} aria-hidden="true" onClick={onClick}>
    </div>
  ) : null;
}

export default Overlay;
