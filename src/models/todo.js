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
  new: function (title, description, dueDate, priority, checkList, projectID) {
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
        console.log(`Save '${title}' to local storage`);
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
        console.log(`Update '${title}' in local storage`);
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
        console.log(`Remove '${title}' from local storage`);
        const removeIndex = todos.indexOf(this);
        todos.splice(removeIndex, 1);
      },
    };
  },
  all: function () {
    console.log('Get all todo objects from todo.js / local storage');
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
