import Image from 'next/image';
import React, { ReactElement } from 'react';
import { TextProp } from '../types';
import styles from "./Logo.module.scss";

interface LogoProp extends TextProp {
  iconUrl: string,
}

export const Logo = ({ text, iconUrl }: LogoProp) => {
  return (
    <div className={styles.container}>
      <Image src={iconUrl} alt="carrier logo" width="39" height="39" />
      <span className={styles.text}>{text}</span>
    </div>
  )
}
