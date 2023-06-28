import sendRequest from 'api/utils/utils';
import { ApiMethods } from 'store/constants/types';
import { BunsResponseData } from 'api/models/buns';

const getAllBuns = () => {
  sendRequest<BunsResponseData>({
    url: `buns`,
    method: ApiMethods.GET
  })
}

export { getAllBuns };
