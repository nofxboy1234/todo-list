import { httpGet } from '../httpMethods/httpGetMethod';
import { httpPost } from '../httpMethods/httpPostMethod';

const httpMethods = {
  GET: httpGet,
  POST: httpPost,
};

const redirectTo = (method, path, resourceData) => {
  const httpMethod = httpMethods[method];
  httpMethod.redirectTo(path, resourceData);
};

export { redirectTo };
