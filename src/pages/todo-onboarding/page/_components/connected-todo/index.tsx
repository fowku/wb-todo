import { Component } from 'react';
import { connect } from 'react-redux';
import { SimpleInputChangeEventType } from '@wildberries/ui-kit';
import {
  TodoStatePartType,
  addTaskActionSaga,
  editTaskActionSaga,
  removeTaskActionSaga,
  setNewTodoValueAction,
  todoIsLoadingSelector,
  todoNewValueSelector,
  todoTasksSelector,
  todoUpdatingItemsSelector,
} from '@/pages/todo-onboarding/_redux/todo-module';
import { TaskType } from '../../_types';
import { TodoView } from './_components/todo-view';
import { sortTasks } from './_utils';

type PropsType = {
  todoTasks: ReturnType<typeof todoTasksSelector>;
  areTasksLoading: ReturnType<typeof todoIsLoadingSelector>;
  newTodoItemValue: ReturnType<typeof todoNewValueSelector>;
  addNewTodoItem: typeof addTaskActionSaga;
  updatingTodoItems: ReturnType<typeof todoUpdatingItemsSelector>;
  setNewTodoItemValue: typeof setNewTodoValueAction;
  editTodoItem: typeof editTaskActionSaga;
  removeTodoItem: typeof removeTaskActionSaga;
};

export class WrappedContainer extends Component<PropsType> {
  handleClickAddButton = () => {
    this.props.addNewTodoItem(this.props.newTodoItemValue);
  };

  handleNewTodoItemChange = (event: SimpleInputChangeEventType) => {
    this.props.setNewTodoItemValue(event.value);
  };

  handleChangeTodoItem = (task: TaskType) => {
    this.props.editTodoItem(task);
  };

  handleRemoveTodoItem = (id: TaskType['id']) => {
    this.props.removeTodoItem(id);
  };

  render() {
    return (
      <TodoView
        areTasksLoading={this.props.areTasksLoading}
        loadingItems={this.props.updatingTodoItems}
        newItemValue={this.props.newTodoItemValue}
        onChangeNewTodoItemValue={this.handleNewTodoItemChange}
        onChangeTodoItem={this.handleChangeTodoItem}
        onClickAddButton={this.handleClickAddButton}
        onRemoveTodoItem={this.handleRemoveTodoItem}
        tasks={sortTasks(this.props.todoTasks)}
      />
    );
  }
}

const mapStateToProps = (state: TodoStatePartType) => ({
  todoTasks: todoTasksSelector(state),
  areTasksLoading: todoIsLoadingSelector(state),
  newTodoItemValue: todoNewValueSelector(state),
  updatingTodoItems: todoUpdatingItemsSelector(state),
});

const mapDispatchToProps = {
  setNewTodoItemValue: setNewTodoValueAction,
  addNewTodoItem: addTaskActionSaga,
  editTodoItem: editTaskActionSaga,
  removeTodoItem: removeTaskActionSaga,
};

export const ConnectedTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
