function createErrorCollection() {
  const errors = [];

  const add = (error) => {
    errors.push(error);
  };

  const forEach = (callback) => {
    errors.forEach((element) => {
      callback(element);
    });
  };

  const size = () => {
    return errors.length;
  };

  const instance = {
    add,
    forEach,
    size,
  };

  return instance;
}

export { createErrorCollection };
