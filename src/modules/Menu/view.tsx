import React from 'react';

import MenuCategory from 'modules/MenuCategory';
import MenuList from 'modules/MenuList';
import { ViewProps } from './types';

import styles from './styles.module.scss';

const View: React.FC<ViewProps> = ({
  setActivePage,
  data,
  activePage,
  // dictionaryData,
}) => {
  // const dictionaryDataItem = dictionaryData[activePage];

  return (
    <div className={styles.menu}>
      <MenuCategory
        // dictionaryData={dictionaryData}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <MenuList data={data} />
    </div>
  );
};

export default View;
