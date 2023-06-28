import sendRequest from 'api/utils/utils';
import { ApiMethods } from 'store/constants/types';
import { CakesData } from 'api/models/cakes';

const getAllCakes = () => {
  sendRequest<CakesData>({
    url: `/cakes`,
    method: ApiMethods.GET
  })
}

export { getAllCakes };
