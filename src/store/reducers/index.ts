import { combineReducers } from '@reduxjs/toolkit';

import contentStore from './reducer'

const rootReducer = combineReducers({
    contentStore,
})


export { rootReducer };
