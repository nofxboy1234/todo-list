import { createRenderer } from './renderer';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createViews(resourceSingular, resourcePlural, views, resourceViews) {
  const entries = new Map([
    [`${resourcePlural}Path`, createRenderer(resourceViews.index)],
    [
      `new${capitalize(resourceSingular)}Path`,
      createRenderer(resourceViews.edit),
    ],
    [
      `edit${capitalize(resourceSingular)}Path`,
      createRenderer(resourceViews.new_),
    ],
    [`${resourceSingular}Path`, createRenderer(resourceViews.show)],
  ]);
  Object.assign(views, Object.fromEntries(entries));
}

export { createViews };
