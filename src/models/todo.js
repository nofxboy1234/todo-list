const buildTodo = (title, description, dueDate, priority, checkList) => {
  return {
    title,
    description,
    dueDate,
    priority,
    checkList,
  };
};

const createTodo = (title, description, dueDate, priority, checkList) => {
  const isComplete = () => {
    return false;
  };

  const save = () => {
    console.log(`Save '${title}' to local storage`);
    return true;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    checkList,
    isComplete,
    save,
  };
};

export { buildTodo, createTodo };