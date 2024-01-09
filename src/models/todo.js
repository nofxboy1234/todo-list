const createTodo = (title, description, dueDate, priority, checkList, project) => {
  const isComplete = () => {
    return false;
  };

  const save = () => {
    console.log(`Save '${title}' to local storage`);
    return true;
  };

  const update = () => {
    console.log(`Update '${title}' in local storage`);
    return true;
  };

  const destroy = () => {
    console.log(`Remove '${title}' from local storage`);
  };

  return {
    title,
    description,
    dueDate,
    priority,
    checkList,
    project,
    isComplete,
    save,
    update,
    destroy,
  };
};

export { createTodo };
