import { httpGet } from '../httpMethods/httpGetMethod';

const httpMethods = {
  GET: httpGet,
};

const redirectTo = (method, path, resourceData) => {
  const httpMethod = httpMethods[method];
  httpMethod.redirectTo(path, resourceData);
};

export { redirectTo };
