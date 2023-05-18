import { fork, take } from 'redux-saga/effects';
import { addTaskActionSaga } from '../../actions';
import { addTaskWorkerSaga } from './add-task-worker';

export const ADD_TASK_WATCHER_SAGA_NAME = 'ADD_TASK_WATCHER_SAGA_NAME';

export function* addTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof addTaskActionSaga> = yield take(
      addTaskActionSaga.type,
    );
    yield fork(addTaskWorkerSaga, { data: payload });
  }
}
