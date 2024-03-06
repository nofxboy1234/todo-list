import { httpDelete } from '../httpMethods/httpDeleteMethod';
import { httpGet } from '../httpMethods/httpGetMethod';
import { httpPatch } from '../httpMethods/httpPatchMethod';
import { httpPost } from '../httpMethods/httpPostMethod';
import { httpPut } from '../httpMethods/httpPutMethod';

const httpMethods = {
  GET: httpGet,
  POST: httpPost,
  PATCH: httpPatch,
  PUT: httpPut,
  DELETE: httpDelete,
};

const redirectTo = (method, path, resourceData) => {
  const httpMethod = httpMethods[method];
  httpMethod.redirectTo(path, resourceData);
};

export { redirectTo };
