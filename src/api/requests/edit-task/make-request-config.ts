import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTasksEndpoint } from '@/api/endpoints/tasks';
import { TaskType } from '@/pages/todo-onboarding/page/_types';

export type EditTaskParamsType = {
  task: TaskType;
};

export const makeRequestConfig = ({
  task,
}: EditTaskParamsType): IRequestParams => {
  const endpoint = getTasksEndpoint();

  return {
    endpoint,
    body: {
      task,
    },
  };
};
