import { configureStore } from '@reduxjs/toolkit';

import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from './reducers';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: true,
      }),
    ],
  });

export const wrapper = createWrapper(makeStore, { debug: true });
