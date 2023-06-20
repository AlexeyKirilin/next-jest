import { BreadData } from 'store/reducers/ContentStore/types';

import { api } from './utils';

type BreadDataResult = {
  data: BreadData[];
};

const getAllBread = async () => {
  const { data } = await api.get<BreadDataResult>('/bread');

  return data;
};

export { getAllBread };
