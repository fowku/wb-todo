import { TodoStateType } from './_types';
import {
  setNewTodoValueAction,
  setUpdatingTasksAction,
  setTasksAction,
  startLoadingAction,
  stopLoadingAction,
} from './actions';

export const initialState: TodoStateType = {
  isLoading: false,
  newTodoValue: '',
  tasks: [],
  updatingItems: [],
};

type ActionsType =
  | ReturnType<typeof startLoadingAction>
  | ReturnType<typeof stopLoadingAction>
  | ReturnType<typeof setTasksAction>
  | ReturnType<typeof setNewTodoValueAction>
  | ReturnType<typeof setUpdatingTasksAction>;

const reducer = (
  state: TodoStateType = initialState,
  action: ActionsType,
): TodoStateType => {
  switch (action.type) {
    case startLoadingAction.type:
      return { ...state, isLoading: true };
    case stopLoadingAction.type:
      return { ...state, isLoading: false };

    case setTasksAction.type:
      return { ...state, tasks: action.payload };

    case setNewTodoValueAction.type:
      return { ...state, newTodoValue: action.payload };

    case setUpdatingTasksAction.type:
      return { ...state, updatingItems: action.payload };

    default:
      return state;
  }
};

export default reducer;
