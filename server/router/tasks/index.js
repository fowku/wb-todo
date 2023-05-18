const express = require('express');
const {
  tasksGetController,
  tasksPostController,
  tasksPutController,
  tasksDeleteController,
} = require('../../controllers/tasks');

const tasksRouter = express.Router();

tasksRouter.get('/', tasksGetController);
tasksRouter.post('/', tasksPostController);
tasksRouter.put('/', tasksPutController);
tasksRouter.delete('/', tasksDeleteController);

module.exports.tasksRouter = tasksRouter;
