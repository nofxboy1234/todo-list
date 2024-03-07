import { httpDelete } from '../routeMethods/httpDeleteMethod';
import { httpGet } from '../routeMethods/httpGetMethod';
import { httpPatch } from '../routeMethods/httpPatchMethod';
import { httpPost } from '../routeMethods/httpPostMethod';
import { httpPut } from '../routeMethods/httpPutMethod';

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
