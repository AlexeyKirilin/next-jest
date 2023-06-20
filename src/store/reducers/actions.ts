import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllBread } from "api/getAllBread";
import { getAllCakes } from 'api/getAllCakes';
import { getAllPies } from 'api/getAllPies';
import { getAllPuns } from 'api/getAllPuns';

const fetchAllBread = createAsyncThunk(
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

const fetchAllPuns = createAsyncThunk(
    'fetchAllPuns',
    async () => {
      const { data } = await getAllPuns();
  
      return data;
    },
);

export {
  fetchAllBread,
  fetchAllCakes,
  fetchAllPies,
  fetchAllPuns
}