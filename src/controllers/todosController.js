import { Todo } from '../models/todo.js';

const TodosController = {
  new: function () {
    this.todo = Todo.new();
  },
};

//   const create = (
//     title,
//     description,
//     dueDate,
//     priority,
//     checkList,
//     project
//   ) => {
// import Todo
//       title,
//       description,
//       dueDate,
//       priority,
//       checkList,
//       project
//     );

//     if (todo.save()) {
//       console.log(`'${todo.title}' was successfully created`);
//       renderIndexView(todos);
//     } else {
//       console.log(`'${todo.title}' failed to save`);
//     }

//     return todo;
//   };

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

export { TodosController };
