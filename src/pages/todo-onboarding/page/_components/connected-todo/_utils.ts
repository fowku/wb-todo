import { TaskType } from '../../_types';

export const sortTasks = (tasks: Array<TaskType>) =>
  tasks.sort((task) => (task.isCompleted ? 1 : -1));
