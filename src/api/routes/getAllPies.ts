import sendRequest from 'api/utils/utils';
import { PiesResponseData } from 'api/models/pies';
import { ApiMethods } from 'store/constants/types';

const getAllPies = () => {
  sendRequest<PiesResponseData>({
    url: `pies`,
    method: ApiMethods.GET
  })
}

export { getAllPies };
