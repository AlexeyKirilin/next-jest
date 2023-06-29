import sendRequest from "api/utils/utils"
import { ApiMethods } from "store/constants/types";
import { TotalData } from "api/models/total";


const getTotal = () => 
  sendRequest<TotalData>({
    url: '/total',
    method: ApiMethods.GET
})

export { getTotal }
