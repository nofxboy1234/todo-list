function createErrorCollection() {
  const errors = [];

  const add = (error) => {
    errors.push(error);
  };

  const forEach = (callback) => {
    errors.forEach((error) => {
      callback(error);
    });
  };

  const size = () => {
    return errors.length;
  };

  const clear = () => {
    errors.length = 0;
  };

  const instance = {
    add,
    forEach,
    size,
    clear,
  };

  return instance;
}

export { createErrorCollection };
