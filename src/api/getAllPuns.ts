import { PunsData } from 'store/reducers/ContentStore/types';

import { api } from './utils';

type PunsDataResult = {
  data: PunsData[];
};

const getAllPuns = async () => {
  const { data } = await api.get<PunsDataResult>('/puns');

  return data;
};

export { getAllPuns };
