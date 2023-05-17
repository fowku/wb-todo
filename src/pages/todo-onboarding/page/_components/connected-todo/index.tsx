import { SimpleInputChangeEventType } from '@wildberries/ui-kit';
import { PureComponent } from 'react';
import { TodoView } from './_components/todo-view';
import { sortTasks } from './_utils';

// TODO: use redux

type PropsType = {
  newTodoItemValue?: string;
  onChangeNewTodoItemValue?: (newValue: SimpleInputChangeEventType) => void;
};

const TASKS = [
  {
    id: '1',
    isCompleted: true,
    data: 'aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa ',
  },
  {
    id: '2',
    isCompleted: false,
    data: 'bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb ',
  },
  {
    id: '3',
    isCompleted: true,
    data: 'ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ',
  },
  {
    id: '4',
    isCompleted: false,
    data: 'ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ',
  },
];

// TODO: rename to WrappedContainer
export class ConnectedTodo extends PureComponent<PropsType> {
  render() {
    return (
      <TodoView
        newItemValue={this.props.newTodoItemValue ?? ''}
        onChangeNewTodoItemValue={this.props.onChangeNewTodoItemValue}
        tasks={sortTasks(TASKS)} // TODO: use redux
      />
    );
  }
}
