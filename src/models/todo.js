import { Project } from './project';
import { nextID } from './applicationRecord';

const todos = [];

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
        this.id = nextID(Todo);
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
      project: function () {
        return Project.find(this.projectID);
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
