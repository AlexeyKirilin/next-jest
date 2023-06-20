import { createSelector } from '@reduxjs/toolkit';

import {storeSelector} from 'store/storeSelector';

const selectAppStore = createSelector(
  storeSelector,
  ({ contentStore }) => contentStore,
);

const selectBreadData = createSelector(selectAppStore, ({ bread }) => bread.data);
const selectBreadIsLoading = createSelector(
  selectAppStore,
  ({ bread }) => bread.isLoading,
);
const selectBreadError = createSelector(
  selectAppStore,
  ({ bread }) => bread.error,
);

const selectCakesData = createSelector(selectAppStore, ({ cakes }) => cakes.data);
const selectCakesIsLoading = createSelector(
  selectAppStore,
  ({ cakes }) => cakes.isLoading,
);
const selectCakesError = createSelector(
  selectAppStore,
  ({ cakes }) => cakes.error,
);

const selectPiesData = createSelector(selectAppStore, ({ pies }) => pies.data);
const selectPiesIsLoading = createSelector(
  selectAppStore,
  ({ pies }) => pies.isLoading,
);
const selectPiesError = createSelector(
  selectAppStore,
  ({ pies }) => pies.error,
);

const selectPunsData = createSelector(selectAppStore, ({ puns }) => puns.data);
const selectPunsIsLoading = createSelector(
  selectAppStore,
  ({ puns }) => puns.isLoading,
);
const selectPunsError = createSelector(
  selectAppStore,
  ({ puns }) => puns.error,
);

export {
  selectBreadData,
  selectBreadIsLoading,
  selectBreadError,
  selectCakesData,
  selectCakesIsLoading,
  selectCakesError,
  selectPiesData,
  selectPiesIsLoading,
  selectPiesError,
  selectPunsData,
  selectPunsIsLoading,
  selectPunsError,
}