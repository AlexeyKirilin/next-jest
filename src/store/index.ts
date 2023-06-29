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
      // написать свой логгер, где будет использовано https://developer.mozilla.org/en-US/docs/Web/API/console/group
      // в логах должна быть инфа о пред стейте, экшене и некст стейте
    ],
  });


export const wrapper = createWrapper(makeStore, { debug: true });


// const logger = (state, action) => {
//   console.group("Logger");

//   console.log("State:", state);
//   console.log("Action:", action);

//   console.groupEnd();
// };