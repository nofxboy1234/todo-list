const createProject = (title) => {
  const save = () => {
    console.log(`Save '${title}' to local storage`);
    return true;
  };

  const todos = (todosController) => {
    console.log(`Get all Todo objects where project = ${title}`);
    // for each todo in todosController.todos
    //   add to array if todo.project === title
  };

  return {
    title,
    save,
    todos,
  };
};

export { createProject };
