import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { batchActions } from 'redux-batched-actions';
import { TaskType } from '@/pages/todo-onboarding/page/_types';
import { addTaskRequest } from '@/api/requests/add-task';
import { getTasksRequest } from '@/api/requests/get-tasks';
import {
  setNewTodoValueAction,
  setTasksAction,
  startLoadingAction,
  stopLoadingAction,
} from '../../actions';

type ParamsType = {
  data: TaskType['data'];
};

export function* addTaskWorkerSaga({ data: taskData }: ParamsType) {
  try {
    yield put(startLoadingAction());

    const { error, errorText }: IResponse<{ id: TaskType['id'] }> = yield call(
      addTaskRequest,
      {
        data: taskData,
      },
    );

    if (error) {
      throw new Error(errorText);
    }

    const {
      error: getTasksError,
      data,
      errorText: getTasksErrorText,
    }: IResponse<{ tasks: Array<TaskType> }> = yield call(getTasksRequest); // TODO: спросить где хранить контракты

    if (getTasksError) {
      throw new Error(getTasksErrorText);
    }

    yield put(
      batchActions([setTasksAction(data.tasks), setNewTodoValueAction('')]),
    );
  } catch (error) {
    console.error(error);
  } finally {
    yield put(stopLoadingAction());
  }
}
