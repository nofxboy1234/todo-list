const lastID = (modelClass) => {
  const model = modelClass.last();
  if (model) {
    return model.id;
  } else {
    return 0;
  }
};

const nextID = (modelClass) => {
  return lastID(modelClass) + 1;
};

export { nextID };
