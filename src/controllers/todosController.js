import { Todo } from '../models/todo';
import { params } from '../parameters/todoParameters';
import {
  createController,
  resourceSingular as todo,
  resourcePlural as todos,
} from './controller';

const permittedParams = [
  'title',
  'description',
  'dueDate',
  'priority',
  'checkList',
  'projectID',
];

const TodosController = createController(
  'todo',
  'todos',
  Todo,
  params,
  permittedParams
);

export { TodosController };
