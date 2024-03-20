const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createHelpers(nameInfo, helperTargets) {
  const resourceSingular = nameInfo.singular;
  const resourcePlural = nameInfo.plural;
  const helpers = {};

  const addToHelpers = (name, target) => {
    helpers[name] = target;
  };

  const createIndexHelper = () => {
    const name = `${resourcePlural}Path`;
    const target = helperTargets.index;
    addToHelpers(name, target);
  };

  const createEditHelper = () => {
    const name = `edit${capitalize(resourceSingular)}Path`;
    const target = helperTargets.edit;
    addToHelpers(name, target);
  };

  const createShowHelper = () => {
    const name = `${resourceSingular}Path`;
    const target = helperTargets.show;
    addToHelpers(name, target);
  };

  const createNewHelper = () => {
    const name = `new${capitalize(resourceSingular)}Path`;
    const target = helperTargets.new_;
    addToHelpers(name, target);
  };

  createIndexHelper();
  createEditHelper();
  createShowHelper();
  createNewHelper();

  return helpers;
}

export { createHelpers };
