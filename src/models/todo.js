const createTodo = (title, description, dueDate, priority, checkList) => {
  const isComplete = () => {
    return false;
  };

  const save = () => {
    console.log(`Save ${title} to local storage`);
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

export { createTodo };
