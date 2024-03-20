import { createHelpers } from '../../rendering/helpers/createHelpers';

import { controller } from '../../controllers/projects';
import { params } from '../../parameters/project';

import { createResourceNameInfo } from '../../resourceNameInfo/resourceNameInfo';

import { indexPath } from '../paths/index';
import { editPath } from '../paths/edit';
import { newPath } from '../paths/new';
import { showPath } from '../paths/show';

const helperTargets = {
  new_: newPath(controller, params),
  edit: editPath(controller, params),
  index: indexPath(controller, params),
  show: showPath(controller, params),
};

const nameInfo = createResourceNameInfo('project', 'projects');
const pathHelpers = createHelpers(nameInfo, helperTargets);

export { pathHelpers };
