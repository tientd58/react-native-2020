import axios from 'axios';
import lodash from 'lodash';

const baseAxios = options => {
  const defaultHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: lodash.get(options, 'timeout', 30000),
    headers: defaultHeader,
  });
};

const executeRequest = (method, pathName, data, options = {}) => {
  const body = method === 'get' || !data ? {} : {data};
  const requestObject = {
    method,
    url: pathName,
    params: options.query,
    ...body,
  };
  const baseAxiosRequest = baseAxios(options);

  return new Promise(async (resolve, rejects) => {
    try {
      const res = await baseAxiosRequest.request(requestObject);
      return resolve(res);
    } catch (error) {
      return rejects(error);
    }
  });
};

const get = (pathName, options) =>
  executeRequest('get', pathName, null, options);

const post = (pathName, data, options) =>
  executeRequest('post', pathName, data, options);

const put = (pathName, data, options) =>
  executeRequest('put', pathName, data, options);

const remove = (pathName, data, options) =>
  executeRequest('delete', pathName, data, options);

export default {get, post, put, remove};
