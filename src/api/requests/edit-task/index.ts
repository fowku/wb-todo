import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { EditTaskParamsType, makeRequestConfig } from './make-request-config';

export const editTaskRequest = (
  params: EditTaskParamsType,
): Promise<IResponse> => {
  return new PureRestRequest().putRequest(makeRequestConfig(params));
};
