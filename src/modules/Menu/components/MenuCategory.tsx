import React from 'react';

import styles from '../styles.module.scss';

const MenuCategory: React.FC = () => {
  return (
    <div className={styles.menuCategory}>
      <div className={styles.menuCategoryItem}>Bread</div>
      <div className={styles.menuCategoryItem}>Pies</div>
      <div className={styles.menuCategoryItem}>Puns</div>
      <div className={styles.menuCategoryItem}>Cakes</div>
      <div className={styles.menuCategoryItem}>Pizza</div>
      <div className={styles.menuCategoryItem}>Desert</div>
    </div>
  );
};

export default MenuCategory;
