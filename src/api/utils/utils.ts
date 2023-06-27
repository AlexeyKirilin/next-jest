import axios from 'axios';

import { RequestData } from './types';

const api = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'content-type': 'application/json',
  },
});

const sendRequest = async <ResponseData>({url, method}: RequestData): ResponseData => {
  return await api()
    .request({
      method,
      url
    })
    .then(response => response.data)
}

export default sendRequest;
