const lastID = (modelClass) => {
  const model = modelClass.last();
  if (model) {
    return model.id;
  } else {
    return 0;
  }
};

export { lastID };
