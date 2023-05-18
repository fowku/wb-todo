import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { DeleteTaskParamsType, makeRequestConfig } from './make-request-config';

export const deleteTaskRequest = (
  params: DeleteTaskParamsType,
): Promise<IResponse> => {
  return new PureRestRequest().deleteRequest(makeRequestConfig(params));
};
