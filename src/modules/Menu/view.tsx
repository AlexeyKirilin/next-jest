import React from 'react';

import MenuCategory from 'modules/MenuCategory';
import MenuList from 'modules/MenuList';
import { OuterProps } from './types';

import styles from './styles.module.scss';

function View<OuterProps>({ setActivePage, data, activePage }) {
  return (
    <div className={styles.menu}>
      <MenuCategory setActivePage={setActivePage} activePage={activePage} />
      <MenuList data={data} />
    </div>
  );
}

export default View;
