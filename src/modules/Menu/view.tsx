import React from 'react';

import styles from './styles.module.scss';
import MenuList from './components/MenuList';
import MenuCategory from './components/MenuCategory';

const Menu: React.FC = ({ breadData, cakesData, piesData, bunsData }) => {
  return (
    <div className={styles.menu}>
      <MenuCategory />
      <MenuList
        breadData={breadData}
        cakesData={cakesData}
        piesData={piesData}
        bunsData={bunsData}
      />
    </div>
  );
};

export default Menu;
