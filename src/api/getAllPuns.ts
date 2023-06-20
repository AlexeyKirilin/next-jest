import { BunsData } from 'store/reducers/ContentStore/types';

import { api } from './utils';

type BunsDataResult = {
  data: BunsData[];
};

const getAllBuns = async () => {
  const { data } = await api.get<BunsDataResult>('/buns');

  return data;
};

export { getAllBuns };
