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
  saveDependent: function () {
    params.data.tasks.forEach((paramsTask) => {
      if (!isPersistedTask(paramsTask)) {
        paramsTask.data.todoID = this.data.id;
        if (paramsTask.save()) {
          console.log(
            `saved task with id:${paramsTask.data.id} and set its todoID to ${this.data.id}`
          );
        } else {
          paramsTask.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  updateDependent: function () {
    params.data.tasks.forEach((paramsTask) => {
      if (isPersistedTask(paramsTask)) {
        const storedTask = Task.find(paramsTask.data.id);
        if (storedTask.update(paramsTask)) {
          console.log(`updated task with id:${storedTask.data.id}`);
        } else {
          paramsTask.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  destroyDependent: function () {
    params.data.destroyedTasks.forEach((paramsTask) => {
      if (isPersistedTask(paramsTask)) {
        const storedTask = Task.find(paramsTask.data.id);
        storedTask.destroy();
        console.log(`destroyed task with id:${storedTask.data.id}`);
      }
    });
  },
  saveParents: function () {
    params.data.projects.forEach((paramsProject) => {
      if (!isPersistedProject(paramsProject)) {
        if (paramsProject.save()) {
          console.log(`saved project with id:${paramsProject.data.id}`);
        } else {
          paramsProject.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  updateParents: function () {
    params.data.projects.forEach((paramsProject) => {
      if (isPersistedProject(paramsProject)) {
        const storedProject = Project.find(paramsProject.data.id);
        if (storedProject.update(paramsProject)) {
          console.log(`updated project with id:${storedProject.data.id}`);
        } else {
          paramsProject.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  linkToParents: function (updatedData) {
    params.data.projects.forEach((paramsProject, index) => {
      if (isProjectOfTodo(this, index)) {
        this.data.projectID = paramsProject.data.id;
        if (updatedData) {
          updatedData.data.projectID = paramsProject.data.id;
        }
        console.log(`set projectID of todo to ${paramsProject.data.id}`);
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
