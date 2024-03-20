import { createHelpers } from '../../rendering/helpers/createHelpers';

import { controller } from '../../controllers/todoProjects';
import { params } from '../../parameters/project';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { indexPath } from '../paths/index';
import { editPath } from '../paths/edit';
import { newPath } from '../paths/new';
import { showPath } from '../paths/show';

const helperTargets = {
  index: indexPath(controller, params),
  edit: editPath(controller, params),
  new_: newPath(controller, params),
  show: showPath(controller, params),
};

const nameInfo = createResourceNameInfo('project', 'projects');
const pathHelpers = createHelpers(nameInfo, helperTargets);

export { pathHelpers };
