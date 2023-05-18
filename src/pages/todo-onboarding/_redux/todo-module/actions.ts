import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { TaskType } from '../../page/_types';

const START_LOADING = 'START_LOADING';
export const startLoadingAction: IReduxBaseAction<
  typeof START_LOADING
> = () => ({
  type: START_LOADING,
});
startLoadingAction.type = START_LOADING;

const STOP_LOADING = 'STOP_LOADING';
export const stopLoadingAction: IReduxBaseAction<typeof STOP_LOADING> = () => ({
  type: STOP_LOADING,
});
stopLoadingAction.type = STOP_LOADING;

const SET_TASKS = 'SET_TASKS';
export const setTasksAction: IReduxAction<Array<TaskType>, typeof SET_TASKS> = (
  payload,
) => ({
  type: SET_TASKS,
  payload,
});
setTasksAction.type = SET_TASKS;

const FETCH_TASKS_SAGA = 'FETCH_TASKS_SAGA';
export const fetchTasksActionSaga: IReduxBaseAction<
  typeof FETCH_TASKS_SAGA
> = () => ({
  type: FETCH_TASKS_SAGA,
});
fetchTasksActionSaga.type = FETCH_TASKS_SAGA;

const ADD_TASK_SAGA = 'ADD_TASK_SAGA';
export const addTaskActionSaga: IReduxAction<string, typeof ADD_TASK_SAGA> = (
  payload,
) => ({
  type: ADD_TASK_SAGA,
  payload,
});
addTaskActionSaga.type = ADD_TASK_SAGA;

const EDIT_TASK_SAGA = 'EDIT_TASK_SAGA';
export const editTaskActionSaga: IReduxAction<
  TaskType,
  typeof EDIT_TASK_SAGA
> = (payload) => ({
  type: EDIT_TASK_SAGA,
  payload,
});
editTaskActionSaga.type = EDIT_TASK_SAGA;

const REMOVE_TASK_SAGA = 'REMOVE_TASK_SAGA';
export const removeTaskActionSaga: IReduxAction<
  TaskType['id'],
  typeof REMOVE_TASK_SAGA
> = (payload) => ({
  type: REMOVE_TASK_SAGA,
  payload,
});
removeTaskActionSaga.type = REMOVE_TASK_SAGA;

const SET_NEW_TODO_VALUE = 'SET_NEW_TODO_VALUE';
export const setNewTodoValueAction: IReduxAction<
  string,
  typeof SET_NEW_TODO_VALUE
> = (payload) => ({
  type: SET_NEW_TODO_VALUE,
  payload,
});
setNewTodoValueAction.type = SET_NEW_TODO_VALUE;

const SET_UPDATING_TASKS = 'SET_UPDATING_TASKS';
export const setUpdatingTasksAction: IReduxAction<
  Array<string>,
  typeof SET_UPDATING_TASKS
> = (payload) => ({
  type: SET_UPDATING_TASKS,
  payload,
});
setUpdatingTasksAction.type = SET_UPDATING_TASKS;
