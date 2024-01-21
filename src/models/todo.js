const todos = [];

const lastID = () => {
  const todo = Todo.last();
  if (todo) {
    return todo.id;
  } else {
    return 0;
  }
};

const nextID = () => {
  return lastID() + 1;
};

const Todo = {
  new: function (
    title = '',
    description = '',
    dueDate = '',
    priority = 'medium',
    checkList = {},
    projectID = undefined
  ) {
    return {
      title,
      description,
      dueDate,
      priority,
      checkList,
      projectID,
      isComplete: function () {
        return false;
      },
      save: function () {
        this.id = nextID();
        todos.push(this);
        return true;
      },
      update: function (
        title,
        description,
        dueDate,
        priority,
        checkList,
        projectID
      ) {
        Object.assign(this, {
          title,
          description,
          dueDate,
          priority,
          checkList,
          projectID,
        });
        return true;
      },
      destroy: function () {
        const removeIndex = todos.indexOf(this);
        todos.splice(removeIndex, 1);
      },
    };
  },
  all: function () {
    return todos;
  },
  find: function (id) {
    return todos.find((todo) => todo.id === id);
  },
  last: function () {
    return todos.at(-1);
  },
};

export { Todo };
