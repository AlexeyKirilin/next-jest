import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import {
  fetchAllBread,
  fetchAllCakes,
  fetchAllPies,
  fetchAllBuns,
  getTotal
} from './actions';

import { handlePendingStore, handleFulfilledStore, handleRejectedStore } from 'helpers/store';

import { ContentStateBlocks, BreadData, CakesData, PiesData, BunsData, ContentState } from './types';

import { State } from 'store/types';

const getInitialStateBlock = () => ({
  data: [], error: null, isLoading: false
})

const initialState: ContentState = {
    bread: getInitialStateBlock(),
    cakes: {
      data: [],
      error: null,
      isLoading: false
    },
    pies: {
      data: [],
      error: null,
      isLoading: false
    },
    buns: {
      data: [],
      error: null,
      isLoading: false
    },
    total: {
      data: [],
      error: null,
      isLoading: false
    }
};

const handlers = {
    [fetchAllBread.pending.type]: (state: ContentState) => {
      handlePendingStore({ state, name: ContentStateBlocks.BREAD });
    },
    [fetchAllBread.fulfilled.type]: (
      state: ContentState,
      { payload }: PayloadAction<BreadData[]>,
      ) => {
        handleFulfilledStore({ state, payload, name: ContentStateBlocks.BREAD });
    },
    [fetchAllBread.rejected.type]: (state: ContentState, { error }: ErrorAction) => {
      const errorData = { name: error.name, message: error.message };
      handleRejectedStore({ state, errorData, name: ContentStateBlocks.BREAD });
    },

    [fetchAllCakes.pending.type]: (state: ContentState) => {
      handlePendingStore({ state, name: ContentStateBlocks.CAKES });
    },
    [fetchAllCakes.fulfilled.type]: (
      state: ContentState,
      { payload }: PayloadAction<CakesData[]>,
      ) => {
        handleFulfilledStore({ state, payload, name: ContentStateBlocks.CAKES });
    },
    [fetchAllCakes.rejected.type]: (state: ContentState, { error }: ErrorAction) => {
      const errorData = { name: error.name, message: error.message };
      handleRejectedStore({ state, errorData, name: ContentStateBlocks.CAKES });
    },

    [fetchAllPies.pending.type]: (state: ContentState) => {
      handlePendingStore({ state, name: ContentStateBlocks.PIES });
    },
    [fetchAllPies.fulfilled.type]: (
      state: ContentState,
      { payload }: PayloadAction<PiesData[]>,
      ) => {
        handleFulfilledStore({ state, payload, name: ContentStateBlocks.PIES });
    },
    [fetchAllPies.rejected.type]: (state: ContentState, { error }: ErrorAction) => {
      const errorData = { name: error.name, message: error.message };
      handleRejectedStore({ state, errorData, name: ContentStateBlocks.PIES });
    },
    
    [fetchAllBuns.pending.type]: (state: ContentState) => {
      handlePendingStore({ state, name: ContentStateBlocks.BUNS });
    },
    [fetchAllBuns.fulfilled.type]: (
      state: ContentState,
      { payload }: PayloadAction<BunsData[]>,
      ) => {
        handleFulfilledStore({ state, payload, name: ContentStateBlocks.BUNS });
    },
    [fetchAllBuns.rejected.type]: (state: ContentState, { error }: ErrorAction) => {
      const errorData = { name: error.name, message: error.message };
      handleRejectedStore({ state, errorData, name: ContentStateBlocks.BUNS });
    },
    [getTotal.type]: (
      state: ContentState,
      { payload }: { payload: number },
    ) => {
        state.total = payload;
      },
    [HYDRATE]: (state: ContentState, action: PayloadAction<State>) => ({
      ...state,
      ...action.payload.contentStore,
    }),
}

const reducer = createReducer(initialState, handlers);

export default reducer;