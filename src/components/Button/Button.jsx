import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, children, textColor, bgColor }) {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

export default Button;
