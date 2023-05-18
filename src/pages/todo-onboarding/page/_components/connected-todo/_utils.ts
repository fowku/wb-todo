import { TaskType } from '../../_types';

const sortByName = (tasks: Array<TaskType>): Array<TaskType> =>
  tasks.sort((taskA, taskB) => taskA.data.localeCompare(taskB.data));

export const sortTasks = (tasks: Array<TaskType>): Array<TaskType> => {
  const completed: Array<TaskType> = [];
  const uncompleted: Array<TaskType> = [];

  tasks.forEach((task) => {
    if (task.isCompleted) {
      completed.push(task);
    } else {
      uncompleted.push(task);
    }
  });

  return [...sortByName(uncompleted), ...sortByName(completed)];
};
