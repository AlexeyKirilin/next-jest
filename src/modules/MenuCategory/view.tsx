import React from 'react';
// import classNames from 'classnames';

import { CategoryName, OuterProps } from './types';

import styles from './styles.module.scss';

const View = ({ setActivePage }) => {
  return (
    <div className={styles.menuCategory}>
      <div onClick={() => setActivePage()} className={styles.menuCategoryItem}>
        {CategoryName.bread}
      </div>
      <div onClick={() => setActivePage()} className={styles.menuCategoryItem}>
        {CategoryName.cakes}
      </div>
      <div onClick={() => setActivePage()} className={styles.menuCategoryItem}>
        {CategoryName.pies}
      </div>
      <div onClick={() => setActivePage()} className={styles.menuCategoryItem}>
        {CategoryName.buns}
      </div>
    </div>
  );
};

export default View;

//

// function MenuCategory<DictionaryItem>({
//   setActivePage,
//   activePage,
//   dictionaryData,
// }: OuterProps<DictionaryItem>) {
//   const options = Object.keys(dictionaryData).map((key: string) => {
//     const { title } = dictionaryData[key];
//   const options =
//     return (
//       <>
//         <div
//           className={classNames({
//             [styles.menuCategoryItem]: true,
//             [styles.active]: activePage === title,
//           })}
//           onClick={() => setActivePage(title)}
//           key={`item-${title}`}
//         >
//           {CategoryName.bread}
//         </div>
//       </>
//     );
//   });

//   return <div classname={styles.menuCategory}>{options}</div>;
// }
