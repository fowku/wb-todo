import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { getTasksRequest } from '@/api/requests/get-tasks';
import {
  setTasksAction,
  startLoadingAction,
  stopLoadingAction,
} from '../_redux/todo-module/actions';
import { TaskType } from '../page/_types';

export const fetchTasksConfig = (
  noLoader = false,
): InitLoadManagerRequestOptionsType => {
  const config: InitLoadManagerRequestOptionsType = {
    request: getTasksRequest,
    actionSuccess: setTasksAction,
    responseDataFormatter: (response: {
      tasks: Array<TaskType>;
    }): Array<TaskType> => response.tasks,
  };

  if (noLoader) {
    return config;
  }

  return {
    ...config,
    loadingStartAction: startLoadingAction,
    loadingStopAction: stopLoadingAction,
  };
};
