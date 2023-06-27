import React from 'react';
import Image from 'next/image';

import pictures from 'assets/bread.png';
import { OuterProps } from './types';
import styles from './styles.module.scss';

const View: React.FC<OuterProps> = ({ data }) => {
  const { title, total, picture, price } = data;
  return (
    <div className={styles.menuList}>
      <h3 className={styles.menuListTitle}>Menu</h3>
      <div className={styles.menuListGrid}>
        <div className={styles.menuListItem}>
          <Image className={styles.image} src={pictures} alt="item-img" />
          <h4 className={styles.menuListName}>title</h4>
          <p className={styles.menuListPrice}>price</p>
          <div className={styles.menuListQuantity}>total</div>
          <div className={styles.menuListWrapperPlus}>
            <span className={styles.menuListPlus}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
