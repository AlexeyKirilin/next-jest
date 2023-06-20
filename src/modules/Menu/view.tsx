import React from 'react';

import styles from './styles.module.scss';
import MenuList from './components/MenuList';
import MenuCategory from './components/MenuCategory';

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <MenuCategory />
      <MenuList />
    </div>
  );
};

export default Menu;
