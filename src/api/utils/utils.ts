import axios from 'axios';
// добавить линтер на проверку не используемых импортов
import { RequestData, ResponseData } from './types';

const api = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'content-type': 'application/json',
  },
});
// Разобраться что за тип async <ResponseData> = https://www.typescriptlang.org/docs/handbook/2/generics.html

const sendRequest = async <R>({url, method}: RequestData): Promise<R> => {
  return api()
    .request({
      method,
      url
    })
    .then(response => response.data)
}

export default sendRequest;
