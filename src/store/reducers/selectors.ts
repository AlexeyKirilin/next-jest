import { createSelector } from '@reduxjs/toolkit';

import storeSelector from 'store/storeSelector';

const selectAppStore = createSelector(
  storeSelector,
  ({ contentStore }) => contentStore,
);

export const selectBreadData = createSelector(selectAppStore, ({bread}) => bread.data);
export const selectBreadError = createSelector(selectAppStore, ({bread}) => bread.error);
export const selectBreadIsLoading = createSelector(selectAppStore, ({bread}) => bread.isLoading);


export const selectCakesData = createSelector(selectAppStore, ({cakes}) => cakes.data);
export const selectCakesError = createSelector(selectAppStore, ({cakes}) => cakes.error);
export const selectCakesIsLoading = createSelector(selectAppStore, ({cakes}) => cakes.isLoading);

export const selectPiesData = createSelector(selectAppStore, ({pies}) => pies.data);
export const selectPiesError = createSelector(selectAppStore, ({pies}) => pies.error);
export const selectPiesIsLoading = createSelector(selectAppStore, ({pies}) => pies.isLoading);

export const selectBunsData = createSelector(selectAppStore, ({buns}) => buns.data);
export const selectBunsError = createSelector(selectAppStore, ({buns}) => buns.error);
export const selectBunsIsLoading = createSelector(selectAppStore, ({buns}) => buns.isLoading);

export const selectTotalData = createSelector(selectAppStore, ({total}) => total.data);
export const selectTotalError = createSelector(selectAppStore, ({total}) => total.error);
export const selectTotalIsLoading = createSelector(selectAppStore, ({total}) => total.isLoading);


