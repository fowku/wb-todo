import { fork, take } from 'redux-saga/effects';
import { editTaskActionSaga } from '../../actions';
import { editTaskWorkerSaga } from './edit-task-worker';

export const EDIT_TASK_WATCHER_SAGA_NAME = 'EDIT_TASK_WATCHER_SAGA_NAME';

export function* editTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof editTaskActionSaga> = yield take(
      editTaskActionSaga.type,
    );
    yield fork(editTaskWorkerSaga, { task: payload });
  }
}
