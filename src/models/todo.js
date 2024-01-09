const todos = [];

function hello() {}

const Todo = {
  new: function (title, description, dueDate, priority, checkList, project) {
    return {
      title,
      description,
      dueDate,
      priority,
      checkList,
      project,
      isComplete: function () {
        return false;
      },
      save: function () {
        console.log(`Save '${title}' to local storage`);
        return true;
      },
      update: function () {
        console.log(`Update '${title}' in local storage`);
        return true;
      },
      destroy: function () {
        console.log(`Remove '${title}' from local storage`);
      },
    };
  },
  all: function () {
    console.log('Get all todo objects from Todo / local storage');
    // const todos = 'dylan';
    hello();
    return todos;
  },
  allAgain: () => {
    console.log('Get all todo objects from Todo / local storage');
    // const todos = 'dylan';
    hello();
    return todos;
  }
};

export { Todo };
