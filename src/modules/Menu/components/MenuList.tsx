import React from 'react';
import Image from 'next/image';

import ImageItem from 'assets/bread.png';

import styles from '../styles.module.scss';

const MenuList: React.FC = () => {
  return (
    <div className={styles.menuList}>
      <h3 className={styles.menuListTitle}>Menu</h3>
      <div className={styles.menuListGrid}>
        <div className={styles.menuListItem}>
          <Image className={styles.image} src={ImageItem} alt="item-img" />
          <h4 className={styles.menuListName}>Name item</h4>
          <p className={styles.menuListPrice}>price</p>
          <div className={styles.menuListQuantity}>5 шт в наличии</div>
        </div>
        <div className={styles.menuListItem}>
          <Image className={styles.image} src={ImageItem} alt="item-img" />
          <h4 className={styles.menuListName}>Name item</h4>
          <p className={styles.menuListPrice}>price</p>
          <div className={styles.menuListQuantity}>5 шт в наличии</div>
        </div>
        <div className={styles.menuListItem}>
          <Image className={styles.image} src={ImageItem} alt="item-img" />
          <h4 className={styles.menuListName}>Name item</h4>
          <p className={styles.menuListPrice}>price</p>
          <div className={styles.menuListQuantity}>5 шт в наличии</div>
        </div>
        <div className={styles.menuListItem}>
          <Image className={styles.image} src={ImageItem} alt="item-img" />
          <h4 className={styles.menuListName}>Name item</h4>
          <p className={styles.menuListPrice}>price</p>
          <div className={styles.menuListQuantity}>5 шт в наличии</div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
