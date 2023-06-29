import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { getAllBread } from "api/routes/getAllBread";
import { getAllCakes } from 'api/routes/getAllCakes';
import { getAllPies } from 'api/routes/getAllPies';
import { getAllBuns } from 'api/routes/getAllBuns';
import { getTotal } from 'api/routes/getTotal';

import { BreadResponseData } from 'api/models/bread';
import { BunsResponseData } from 'api/models/buns';
import { CakesResponseData } from 'api/models/cakes';
import { PiesResponseData } from 'api/models/pies';
import { TotalResponseData } from 'api/models/total';

export const fetchAllBread = createAsyncThunk<BreadResponseData>(
  'fetchAllBread',
  async () => {
    const data = await getAllBread();

    return data;
  },
);

export const fetchAllCakes = createAsyncThunk<CakesResponseData>(
  'fetchAllCakes',
  async () => {
    const data = await getAllCakes();

    return data;
  },
);

export const fetchAllPies = createAsyncThunk<PiesResponseData>(
  'fetchAllPies',
  async () => {
    const data = await getAllPies();

    return data;
  },
);

export const fetchAllBuns = createAsyncThunk<BunsResponseData>(
  'fetchAllBuns',
  async () => {
    const data = await getAllBuns();

    return data;
  },
);

export const fetchTotal = createAsyncThunk<TotalResponseData>(
  'fetchTotal',
  async () => {
    const data = await getTotal()

    return data;
  }
)
