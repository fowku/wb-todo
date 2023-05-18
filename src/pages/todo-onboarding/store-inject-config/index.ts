import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import todoReducer, {
  ADD_TASK_WATCHER_SAGA_NAME,
  EDIT_TASK_WATCHER_SAGA_NAME,
  REMOVE_TASK_WATCHER_SAGA_NAME,
  TODO_REDUCER_NAME,
  addTaskWatcherSaga,
  editTaskWatcherSaga,
  removeTaskWatcherSaga,
} from '../_redux/todo-module';
import { fetchTasksConfig } from './_utils';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: TODO_REDUCER_NAME,
      reducer: todoReducer,
    },
  ],
  sagasToInject: [
    {
      saga: addTaskWatcherSaga,
      name: ADD_TASK_WATCHER_SAGA_NAME,
    },
    {
      saga: editTaskWatcherSaga,
      name: EDIT_TASK_WATCHER_SAGA_NAME,
    },
    {
      saga: removeTaskWatcherSaga,
      name: REMOVE_TASK_WATCHER_SAGA_NAME,
    },
  ],
  initialLoadManagerConfig: {
    requestConfigList: [fetchTasksConfig()],
  },
};
