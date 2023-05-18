import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { TaskType } from '@/pages/todo-onboarding/page/_types';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import { getTasksRequest } from '@/api/requests/get-tasks';
import { setTasksAction, setUpdatingTasksAction } from '../../actions';
import { todoUpdatingItemsSelector } from '../../selectors';

type ParamsType = {
  id: TaskType['id'];
};

export function* removeTaskWorkerSaga({ id }: ParamsType) {
  try {
    const updatingTasks: Array<string> = yield select(
      todoUpdatingItemsSelector,
    );
    const newUpdatingTasks = [...new Set([...updatingTasks, id])];

    yield put(setUpdatingTasksAction(newUpdatingTasks));

    const { error, errorText }: IResponse<never> = yield call(
      deleteTaskRequest,
      {
        id,
      },
    );

    if (error) {
      throw new Error(errorText);
    }

    const {
      error: getTasksError,
      data,
      errorText: getTasksErrorText,
    }: IResponse<{ tasks: Array<TaskType> }> = yield call(getTasksRequest);

    if (getTasksError) {
      throw new Error(getTasksErrorText);
    }

    yield put(setTasksAction(data.tasks));
  } catch (error) {
    console.error(error);
  } finally {
    const updatingTasks: Array<string> = yield select(
      todoUpdatingItemsSelector,
    );
    yield put(
      setUpdatingTasksAction(
        updatingTasks.filter((updatingTaskId) => updatingTaskId !== id),
      ),
    );
  }
}
