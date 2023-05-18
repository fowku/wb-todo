import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { TaskType } from '@/pages/todo-onboarding/page/_types';
import { editTaskRequest } from '@/api/requests/edit-task';
import { getTasksRequest } from '@/api/requests/get-tasks';
import { setTasksAction, setUpdatingTasksAction } from '../../actions';
import { todoUpdatingItemsSelector } from '../../selectors';

type ParamsType = {
  task: TaskType;
};

export function* editTaskWorkerSaga({ task }: ParamsType) {
  try {
    const updatingTasks: Array<string> = yield select(
      todoUpdatingItemsSelector,
    );
    const newUpdatingTasks = [...new Set([...updatingTasks, task.id])];

    yield put(setUpdatingTasksAction(newUpdatingTasks));

    const { error: editError, errorText: editErrorText }: IResponse<never> =
      yield call(editTaskRequest, {
        task,
      });

    if (editError) {
      throw new Error(editErrorText);
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
        updatingTasks.filter((updatingTaskId) => updatingTaskId !== task.id),
      ),
    );
  }
}
