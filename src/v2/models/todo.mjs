import { createError } from './error.mjs';
import { createModel, createModelStatic } from './model.mjs';

function createTodoStatic() {
  const modelStatic = createModelStatic();

  const overridesStatic = {};

  const instanceStatic = {};

  return Object.assign({}, modelStatic, overridesStatic, instanceStatic);
}

// "Class"
const Todo = createTodoStatic();

function createTodo(title, description, dueDate, priority, projectID) {
  const model = createModel();

  const overrides = {
    save(modelStatic = Todo) {
      model.save(modelStatic);
    },
    validate() {
      model.errors.clear();
      if (title === '') {
        const error = createError('Title cannot be blank');
        model.errors.add(error);
      }

      if (title.length < 2) {
        const error = createError('Title must be 2 or more characters');
        model.errors.add(error);
      }

      if (description === '') {
        const error = createError('Description cannot be blank');
        model.errors.add(error);
      }

      if (description.length < 2) {
        const error = createError('Description must be 2 or more characters');
        model.errors.add(error);
      }

      if (Todo.all().find((todo) => todo.title === title)) {
        const error = createError('A Todo already exists with this title');
        model.errors.add(error);
      }
    },
  };

  let projectID;

  const tasks = () => {
    // return Task.all().filter((task) => task.todoID === id);
  };

  const instance = {
    get title() {
      return title;
    },
    set title(value) {
      title = value;
    },
    get description() {
      return description;
    },
    set description(value) {
      description = value;
    },
    get dueDate() {
      return dueDate;
    },
    set dueDate(value) {
      dueDate = value;
    },
    get priority() {
      return priority;
    },
    set priority(value) {
      priority = value;
    },
    get projectID() {
      return projectID;
    },
    tasks,
  };

  return Object.assign({}, model, overrides, instance);
}

export { Todo, createTodo };
