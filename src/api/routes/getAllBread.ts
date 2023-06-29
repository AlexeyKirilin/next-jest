import sendRequest from 'api/utils/utils';
import { ApiMethods } from 'store/constants/types';
import { BreadData } from 'api/models/bread';

const getAllBread = () => 
  sendRequest<BreadData>({
    url: '/bread',
    method: ApiMethods.GET,
  })

export { getAllBread };
