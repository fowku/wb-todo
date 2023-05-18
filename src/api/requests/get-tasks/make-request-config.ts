import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTasksEndpoint } from '@/api/endpoints/tasks';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => {
  const endpoint = getTasksEndpoint();

  return {
    endpoint,
    responseSchema,
  };
};
