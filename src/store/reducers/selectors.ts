import { createSelector } from '@reduxjs/toolkit';

import storeSelector from 'store/storeSelector';

const selectAppStore = createSelector(
  storeSelector,
  ({ contentStore }) => contentStore,
);

const selectBreadData = createSelector(selectAppStore, ({bread}) => bread.data)
const selectCakesData = createSelector(selectAppStore, ({cakes}) => cakes.data);
const selectPiesData = createSelector(selectAppStore, ({pies}) => pies.data);
const selectBunsData = createSelector(selectAppStore, ({buns}) => buns.data);
const selectTotalData = createSelector(selectAppStore, ({total}) => total.data);


export {
  selectBreadData,
  selectCakesData,
  selectPiesData,
  selectBunsData,
  selectTotalData
}

