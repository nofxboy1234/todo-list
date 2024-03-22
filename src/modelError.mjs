function createModelError(description) {
  const instance = {
    get description() {
      return description;
    },
  };

  return instance;
}

export { createModelError };

// const error = createModelError('Name cannot be blank');
// console.log(error.description);
// error.description = 'z';
// console.log(error.description);
