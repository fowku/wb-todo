import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { AddTaskParamsType, makeRequestConfig } from './make-request-config';

export const addTaskRequest = (
  params: AddTaskParamsType,
): Promise<IResponse> => {
  return new PureRestRequest().postRequest(makeRequestConfig(params));
};
