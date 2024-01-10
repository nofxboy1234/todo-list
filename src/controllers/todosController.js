import { Todo } from '../models/todo.js';

let todo;
let todos;

const TodosController = {
  new: function () {
    todo = Todo.new();
    console.log('Render new view');
  },
  create: function (title, description, dueDate, priority, checkList, project) {
    todo = Todo.new(title, description, dueDate, priority, checkList, project);

    if (todo.save()) {
      console.log(`'${todo.title}' was successfully created`);
      // console.log('Render index view');
      this.index();
    } else {
      console.log(`'${todo.title}' failed to save`);
    }
  },
  index: function () {
    todos = Todo.all();
    console.log('\nindex view:');
    console.log(todos);
    console.log('\n');
  },
};

export { TodosController };

//   const edit = (todoToEdit) => {
//     todo = todoToEdit;
//     renderEditView(todo);
//   };

//   const update = (
//     title,
//     description,
//     dueDate,
//     priority,
//     checkList,
//     project
//   ) => {
//     if (
//       todo.update(title, description, dueDate, priority, checkList, project)
//     ) {
//       console.log(`'${todo.title}' was successfully updated`);
//       renderIndexView(todos);
//     } else {
//       console.log(`'${todo.title}' failed to update`);
//     }

//     return todo;
//   };

//   const destroy = (todoToDestroy) => {
//     todoToDestroy.destroy();
//     // Remove todo from the DOM
//     console.log(`'${todo.title}' was successfully destroyed`);
//     renderIndexView(todos);
//   };

//   const show = (todoToShow) => {
//     renderShowView(todoToShow);
//   };

//   const index = () => {
//     renderIndexView(todos);
//   };

//   return { todos, build, create, edit, update, destroy, show, index };
// };
