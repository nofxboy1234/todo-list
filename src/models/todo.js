import { Project } from './project';
import { createModel as Model, exists } from './model';
import { Task } from './task';
import { params } from '../parameters/todoParameters';

const isPersistedTask = (task) => {
  return task.data.id ? true : false;
};

const isPersistedProject = (project) => {
  return project.data.id ? true : false;
};

const isProjectOfTodo = (todo, indexInParams) => {
  const projectInputValue = todo.data.projectInputValue;

  let projectInputValueIndex;
  if (projectInputValue.startsWith('undefined-')) {
    projectInputValueIndex = Number(projectInputValue.split('-').at(1));
  } else {
    projectInputValueIndex = Number(projectInputValue);
  }

  return projectInputValueIndex === indexInParams;
};

const instanceProperties = {
  project: function () {
    return (
      Project.find(this.data.projectID) || { data: { name: 'no project' } }
    );
  },
  tasks: function () {
    return Task.all().filter((task) => task.data.todoID === this.data.id);
  },
  destroyDependent: function () {
    this.tasks().forEach((task) => {
      task.destroy();
    });
  },
  saveDependent: function () {
    params.data.tasks.forEach((task) => {
      if (!isPersistedTask(task)) {
        const updatedData = {
          data: {
            todoID: this.data.id,
          },
        };
        if (task.save()) {
          task.update(updatedData);
          console.log(
            `saved task with id:${task.data.id} and set its todoID to ${this.data.id}`
          );
        } else {
          task.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  saveParents: function () {
    params.data.projects.forEach((project, index) => {
      if (!isPersistedProject(project)) {
        if (project.save()) {
          console.log(`saved project with id:${project.data.id}`);
        } else {
          project.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  linkToParents: function () {
    params.data.projects.forEach((project, index) => {
      if (isProjectOfTodo(this, index)) {
        this.data.projectID = project.data.id;
        console.log(`set projectID of todo to ${project.data.id}`);
      }
    });
  },
  validate: function () {
    if (this.data.title === '') {
      this.errors.push('Title cannot be blank');
    }
    if (this.data.title.length < 2) {
      this.errors.push('Title must be 2 or more characters');
    }
    if (this.data.description === '') {
      this.errors.push('Description cannot be blank');
    }
    if (this.data.description.length < 2) {
      this.errors.push('Description must be 2 or more characters');
    }
    if (this.data.dueDate === '') {
      this.errors.push('Date cannot be blank');
    }
    if (!this.data.id) {
      if (exists(Todo, 'title', this)) {
        this.errors.push('A Todo already exists with this title');
      }
    }
  },
};
const Todo = Object.assign({}, Model(instanceProperties));
const staticProperties = {};
Object.assign(Todo, staticProperties);

export { Todo };
