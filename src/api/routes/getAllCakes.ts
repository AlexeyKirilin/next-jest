import sendRequest from 'api/utils/utils';
import { ApiMethods } from 'store/constants/types';
import { CakesResponseData } from 'api/models/cakes';

const getAllCakes = () => {
  sendRequest<CakesResponseData>({
    url: `cakes`,
    method: ApiMethods.GET
  })
}

export { getAllCakes };
