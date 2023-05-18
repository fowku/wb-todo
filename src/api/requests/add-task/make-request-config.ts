import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTasksEndpoint } from '@/api/endpoints/tasks';
import { TaskType } from '@/pages/todo-onboarding/page/_types';
import { responseSchema } from './response-schema';

export type AddTaskParamsType = {
  data: TaskType['data'];
};

export const makeRequestConfig = ({
  data,
}: AddTaskParamsType): IRequestParams => {
  const endpoint = getTasksEndpoint();

  return {
    endpoint,
    responseSchema,
    body: {
      data,
    },
  };
};
