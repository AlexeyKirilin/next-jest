import sendRequest from 'api/utils/utils';
import { ApiMethods } from 'store/constants/types';
import { BreadResponseData } from 'api/models/bread';

const getAllBread = () => 
  sendRequest<BreadResponseData>({
    url: `bread`,
    method: ApiMethods.GET,
  })

export { getAllBread };
