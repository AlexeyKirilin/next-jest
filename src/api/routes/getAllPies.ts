import sendRequest from 'api/utils/utils';
import { ApiMethods } from 'store/constants/types';
import { PiesData } from 'api/models/pies';

const getAllPies = () => 
  sendRequest<PiesData>({
    url: '/pies',
    method: ApiMethods.GET
  })

export { getAllPies };
