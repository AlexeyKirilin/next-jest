import { CakesData } from 'store/reducers/ContentStore/types';

import { api } from './utils';

type CakesDataResult = {
  data: CakesData[];
};

const getAllCakes = async () => {
  const { data } = await api.get<CakesDataResult>('/cakes');

  return data;
};

export { getAllCakes };
