const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createPathHelpers(resourceNameInfo, helperTargets) {
  const resourceSingular = resourceNameInfo.singular;
  const resourcePlural = resourceNameInfo.plural;
  const viewHelpers = {};

  const addToViewHelpers = (name, path) => {
    viewHelpers[name] = path;
  };

  const createIndexViewHelper = () => {
    const name = `${resourcePlural}Path`;
    const path = createRenderer(helperTargets.index);
    addToViewHelpers(name, path);
  };

  const createEditViewHelper = () => {
    const name = `edit${capitalize(resourceSingular)}Path`;
    const path = createRenderer(helperTargets.edit);
    addToViewHelpers(name, path);
  };

  const createShowViewHelper = () => {
    const name = `${resourceSingular}Path`;
    const path = createRenderer(helperTargets.show);
    addToViewHelpers(name, path);
  };

  const createNewViewHelper = () => {
    const name = `new${capitalize(resourceSingular)}Path`;
    const path = createRenderer(helperTargets.new_);
    addToViewHelpers(name, path);
  };

  createIndexViewHelper();
  createEditViewHelper();
  createShowViewHelper();
  createNewViewHelper();

  return viewHelpers;
}

export { createPathHelpers };
