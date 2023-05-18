import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTasksEndpoint } from '@/api/endpoints/tasks';
import { TaskType } from '@/pages/todo-onboarding/page/_types';

export type DeleteTaskParamsType = {
  id: TaskType['id'];
};

export const makeRequestConfig = ({
  id,
}: DeleteTaskParamsType): IRequestParams => {
  const endpoint = getTasksEndpoint();

  return {
    endpoint,
    body: {
      id,
    },
  };
};
