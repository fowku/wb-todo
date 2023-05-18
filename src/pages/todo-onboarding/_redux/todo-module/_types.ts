import { TaskType } from '../../page/_types';
import { TODO_REDUCER_NAME } from './_constants';

export type TodoStateType = {
  isLoading: boolean;
  newTodoValue: string;
  tasks: Array<TaskType>;
  updatingItems: Array<TaskType['id']>;
};

export type TodoStatePartType = {
  [TODO_REDUCER_NAME]: TodoStateType;
};
