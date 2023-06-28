import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { getAllBread } from "api/routes/getAllBread";
import { getAllCakes } from 'api/routes/getAllCakes';
import { getAllPies } from 'api/routes/getAllPies';
import { getAllBuns } from 'api/routes/getAllBuns';

const fetchAllBread = createAsyncThunk<BreadResponseData>(
    'fetchAllBread',
    async () => {
      const { data } = await getAllBread();
  
      return data;
    },
);

const fetchAllCakes = createAsyncThunk(
    'fetchAllCakes',
    async () => {
      const { data } = await getAllCakes();
  
      return data;
    },
);

const fetchAllPies = createAsyncThunk(
    'fetchAllPies',
    async () => {
      const { data } = await getAllPies();
  
      return data;
    },
);

const fetchAllBuns = createAsyncThunk(
    'fetchAllBuns',
    async () => {
      const { data } = await getAllBuns();
  
      return data;
    },
);

const getTotal = createAction<number>('total');

export {
  fetchAllBread,
  fetchAllCakes,
  fetchAllPies,
  fetchAllBuns,
  getTotal
}