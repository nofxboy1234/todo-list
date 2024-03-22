function createModelError(description) {
  const instance = {
    get description() {
      return description;
    },
  };

  return instance;
}

export { createModelError };
