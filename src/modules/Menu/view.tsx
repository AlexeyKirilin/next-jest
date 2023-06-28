import React from 'react';

import MenuCategory from 'modules/MenuCategory';
import MenuList from 'modules/MenuList';
import { OuterProps } from './types';

import styles from './styles.module.scss';

function View<DictionaryItems>({
  setActivePage,
  data,
  activePage,
  dictionaryData,
}: OuterProps<DictionaryItems>) {
  const dictionaryDataItem = dictionaryData[activePage];

  return (
    <div className={styles.menu}>
      <MenuCategory
        dictionaryData={dictionaryData}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <MenuList data={dictionaryDataItem} />
    </div>
  );
}

export default View;
