function createError(description) {
  const instance = {
    get description() {
      return description;
    },
  };

  return instance;
}

export { createError };
