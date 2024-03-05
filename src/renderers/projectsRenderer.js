import { render as showProject } from '../views/projects/show';
import { render as indexProject } from '../views/projects/index';
import { render as newProject } from '../views/projects/new';
import { render as editProject } from '../views/projects/edit';

import { contentContainer, projectIndex } from '../views/layouts/application';
import { edit, index, new_, show } from '../symbols/resourceSymbols';
import { renderView } from './renderer';

const render = (path, data) => {
  switch (path) {
    case new_ || 'projects/new':
      renderView(newProject(data), contentContainer);
      document.getElementById('nameID').focus();
      break;
    case index || 'projects/index':
      renderView(indexProject(data), projectIndex);
      break;
    case show || 'projects/show':
      renderView(showProject(data), contentContainer);
      break;
    case edit || 'projects/edit':
      renderView(editProject(data), contentContainer);
      document.getElementById('nameID').focus();
      break;
    default:
      break;
  }
};

export { render, showProject, indexProject, newProject, editProject };
