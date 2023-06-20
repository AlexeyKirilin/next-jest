import { PiesData } from 'store/reducers/ContentStore/types';

import { api } from './utils';

type PiesDataResult = {
  data: PiesData[];
};

const getAllPies = async () => {
  const { data } = await api.get<PiesDataResult>('/pies');

  return data;
};

export { getAllPies };
