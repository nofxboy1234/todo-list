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

import { createTodoController } from './controllers/todosController.js';

const todoController = createTodoController();
todoController.create({
  title: 'Feed the dogs',
  description: 'Make sure the dogs are happy!',
});
