import { createSelector } from 'reselect';
import { TodoStateType, TodoStatePartType } from './_types';
import { initialState } from './reducer';
import { TODO_REDUCER_NAME } from './_constants';

const todoStateSelector = (store: TodoStatePartType) =>
  store[TODO_REDUCER_NAME] || initialState;

export const todoTasksSelector = createSelector(
  [todoStateSelector],
  ({ tasks }: TodoStateType) => tasks,
);

export const todoIsLoadingSelector = createSelector(
  [todoStateSelector],
  ({ isLoading }: TodoStateType) => isLoading,
);

export const todoNewValueSelector = createSelector(
  [todoStateSelector],
  ({ newTodoValue }: TodoStateType) => newTodoValue,
);

export const todoUpdatingItemsSelector = createSelector(
  [todoStateSelector],
  ({ updatingItems }: TodoStateType) => updatingItems,
);
