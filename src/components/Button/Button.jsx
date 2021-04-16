import React from 'react';
import styles from './Button.module.scss';
import { classNames } from '../../utilities/classNames';

export function Button({ primary, children, onClick }) {
  const buttonClasses = classNames(styles.Button, primary && styles.primary);

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
