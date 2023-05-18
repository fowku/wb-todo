import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const getTasksRequest = (): Promise<IResponse> => {
  return new PureRestRequest().getRequest(makeRequestConfig());
};
