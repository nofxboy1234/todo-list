import { contentContainer } from '../layouts/application';
import { clearContent } from '../helpers';
import { projectPartial } from './_project';

const render = (project) => {
  if (!project) return;

  clearContent();
  contentContainer.appendChild(projectPartial(project));
};

export { render };
