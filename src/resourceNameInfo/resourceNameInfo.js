const resourceNameInfo = {
  init: function (singular, plural) {
    this.singular = singular;
    this.plural = plural;
  },
};

const createResourceNameInfo = (singular, plural) => {
  Object.create(resourceNameInfo).init(singular, plural);
};

export { createResourceNameInfo };
