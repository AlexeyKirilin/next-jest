import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import {
  fetchAllBread,
  fetchAllCakes,
  fetchAllPies,
  fetchAllPuns
} from './actions';

import { ContentStateBlocks, BreadData, CakesData, PiesData, PunsData, ContentState } from './types';
import { State } from 'store/types';

const initialState: ContentState = {
    braed: {
        data: [],
        error: null,
        isLoading: false
    },
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
    puns: {
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
    [fetchAllPuns.pending.type]: (state: ContentState) => {
      handlePendingStore({ state, name: ContentStateBlocks.PUNS });
    },
    [fetchAllPuns.fulfilled.type]: (
      state: ContentState,
      { payload }: PayloadAction<PunsData[]>,
      ) => {
        handleFulfilledStore({ state, payload, name: ContentStateBlocks.PUNS });
    },
    [fetchAllPuns.rejected.type]: (state: ContentState, { error }: ErrorAction) => {
      const errorData = { name: error.name, message: error.message };
      handleRejectedStore({ state, errorData, name: ContentStateBlocks.PUNS });
    },
    [HYDRATE]: (state: ContentState, action: PayloadAction<State>) => ({
      ...state,
      ...action.payload.contentStore,
    }),
}

const reducer = createReducer(initialState, handlers);

export { reducer };