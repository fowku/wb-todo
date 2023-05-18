import { fork, take } from 'redux-saga/effects';
import { removeTaskActionSaga } from '../../actions';
import { removeTaskWorkerSaga } from './remove-task-worker';

export const REMOVE_TASK_WATCHER_SAGA_NAME = 'REMOVE_TASK_WATCHER_SAGA_NAME';

export function* removeTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof removeTaskActionSaga> = yield take(
      removeTaskActionSaga.type,
    );
    yield fork(removeTaskWorkerSaga, { id: payload });
  }
}
