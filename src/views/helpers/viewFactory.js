import { editRenderer } from '../../renderers/editRenderer';
import { indexRenderer } from '../../renderers/indexRenderer';
import { newRenderer } from '../../renderers/newRenderer';
import { showRenderer } from '../../renderers/showRenderer';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createViews(resourceSingular, resourcePlural, views, resourceViews) {
  const entries = new Map([
    [`${resourcePlural}Path`, indexRenderer(resourceViews.index)],
    [`new${capitalize(resourceSingular)}Path`, newView(resourceViews.edit)],
    [
      `edit${capitalize(resourceSingular)}Path`,
      editRenderer(resourceViews.new_),
    ],
    [`${resourceSingular}Path`, showView(resourceViews.show)],
  ]);
  Object.assign(views, Object.fromEntries(entries));
}

export { createViews };
