import _ from 'lodash';
import myName from './myName';
import { functionOne, functionTwo } from './myModule';
import './style.css';
import Icon from './icon.png';

import Data from './data.xml';
import Notes from './data.csv';
import Data2 from './data.json';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

import printMe from './print.js';

import { createTodosController } from './controllers/todosController.js';

console.log('\n');

const todosController = createTodosController();
const checkList = { 'Fill water bowl': false, 'Fill food bowl': false };
let todo = todosController.build();
todo = todosController.create(
  'Feed the dogs',
  'Make sure the dogs are happy!',
  '2024-01-31',
  'high',
  checkList
);

console.log('\n');

todosController.show(todo);
todosController.index();

console.log('\n');

todosController.edit(todo);
todosController.update(
  'Feed the dogs and cats',
  'Make sure the dogs and cats are happy!',
  '2024-01-31',
  'high',
  checkList
);

console.log('\n');

todosController.destroy(todo);
