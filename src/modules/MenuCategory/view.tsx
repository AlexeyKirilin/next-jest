import React from 'react';
import classNames from 'classnames';

import { CategoryName, OuterProps } from './types';

import styles from './styles.module.scss';

function MenuCategory<DictionaryItem>({
  setActivePage,
  activePage,
  dictionaryData,
}: OuterProps<DictionaryItem>) {
  const options = Object.keys(dictionaryData).map((key: string) => {
    const { title } = dictionaryData[key];

    return (
      <>
        <div
          className={classNames({
            [styles.menuCategoryItem]: true,
            [styles.active]: activePage === title,
          })}
          onClick={() => setActivePage(title)}
          key={`item-${title}`}
        >
          {CategoryName.bread}
        </div>
      </>
    );
  });

  return <div classname={styles.menuCategory}>{options}</div>;
}

export default MenuCategory;
