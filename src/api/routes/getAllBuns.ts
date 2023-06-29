import sendRequest from 'api/utils/utils';
import { ApiMethods } from 'store/constants/types';
import { BunsData } from 'api/models/buns';

const getAllBuns = () => 
  sendRequest<BunsData>({
    url: '/buns',
    method: ApiMethods.GET
  })

export { getAllBuns };
