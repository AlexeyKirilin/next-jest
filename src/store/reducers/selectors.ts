import { createSelector } from '@reduxjs/toolkit';

import storeSelector from 'store/storeSelector';

const selectAppStore = createSelector(
  storeSelector,
  ({ contentStore }) => contentStore,
);

const selectBreadData = createSelector(selectAppStore, ({bread}) => bread.data);
const selectBreadError = createSelector(selectAppStore, ({bread}) => bread.error);
const selectBreadIsLoading = createSelector(selectAppStore, ({bread}) => bread.isLoading);


const selectCakesData = createSelector(selectAppStore, ({cakes}) => cakes.data);
const selectCakesError = createSelector(selectAppStore, ({cakes}) => cakes.error);
const selectCakesIsLoading = createSelector(selectAppStore, ({cakes}) => cakes.isLoading);

const selectPiesData = createSelector(selectAppStore, ({pies}) => pies.data);
const selectPiesError = createSelector(selectAppStore, ({pies}) => pies.error);
const selectPiesIsLoading = createSelector(selectAppStore, ({pies}) => pies.isLoading);

const selectBunsData = createSelector(selectAppStore, ({buns}) => buns.data);
const selectBunsError = createSelector(selectAppStore, ({buns}) => buns.error);
const selectBunsIsLoading = createSelector(selectAppStore, ({buns}) => buns.isLoading);

const selectTotalData = createSelector(selectAppStore, ({total}) => total.data);
const selectTotalError = createSelector(selectAppStore, ({total}) => total.error);
const selectTotalIsLoading = createSelector(selectAppStore, ({total}) => total.isLoading);


export {
  selectBreadData,
  selectBreadError,
  selectBreadIsLoading,
  selectCakesData,
  selectCakesError,
  selectCakesIsLoading,
  selectPiesData,
  selectPiesError,
  selectPiesIsLoading,
  selectBunsData,
  selectBunsError,
  selectBunsIsLoading,
  selectTotalData,
  selectTotalError,
  selectTotalIsLoading,
}

