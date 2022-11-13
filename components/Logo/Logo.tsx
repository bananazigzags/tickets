import React, { ReactElement } from 'react';
import { TextProp } from '../types';
import styles from "./Logo.module.css";

interface LogoProp extends TextProp {
  icon: ReactElement,
}

export const Logo = ({ text, icon }: LogoProp) => {
  return (
    <div className={styles.container}>
      {icon}
      <span className={styles.text}>{text}</span>
    </div>
  )
}
