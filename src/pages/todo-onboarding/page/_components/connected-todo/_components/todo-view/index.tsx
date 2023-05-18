import {
  BasicCirclePlusIcon,
  ButtonLink,
  SimpleInput,
  SimpleInputChangeEventType,
} from '@wildberries/ui-kit';
import classNames from 'classnames/bind';
import { memo, useMemo } from 'react';
import i18next from 'i18next';
import { TaskType } from '@/pages/todo-onboarding/page/_types';
import { TRANSLATIONS } from '@/pages/todo-onboarding/_constants/translations';
import { TodoItemCard } from './_components/todo-item-card';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'TodoView';

type PropsType = {
  newItemValue: string;
  tasks: Array<TaskType>;
  areTasksLoading: boolean;
  loadingItems: Array<string>;
  onClickAddButton: () => void;
  onChangeNewTodoItemValue: (newValue: SimpleInputChangeEventType) => void;
  onChangeTodoItem: (task: TaskType) => void;
  onRemoveTodoItem: (id: TaskType['id']) => void;
};

export const TodoView = memo(
  ({
    newItemValue,
    tasks,
    areTasksLoading,
    loadingItems,
    onClickAddButton,
    onChangeNewTodoItemValue,
    onChangeTodoItem,
    onRemoveTodoItem,
  }: PropsType) => {
    const isAddButtonActive = useMemo(
      () => newItemValue.length > 0,
      [newItemValue],
    );

    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__form`)}>
          <div className={cn(`${BLOCK_NAME}__input`)}>
            <SimpleInput
              id="add-todo-item"
              name="add-todo-item"
              onChange={onChangeNewTodoItemValue}
              placeholder={i18next.t(TRANSLATIONS.newTodoItem)}
              value={newItemValue}
            />
          </div>

          <ButtonLink
            disabled={!isAddButtonActive}
            isLoading={areTasksLoading}
            onClick={onClickAddButton}
            rightIcon={BasicCirclePlusIcon}
            variant="add"
          />
        </div>

        <div className={cn(`${BLOCK_NAME}__list`)}>
          {tasks.map(({ id, data, isCompleted }) => (
            <TodoItemCard
              key={id}
              data={data}
              id={id}
              isCompleted={isCompleted}
              isLoading={loadingItems.includes(id)}
              onChangeTask={onChangeTodoItem}
              onClickRemove={onRemoveTodoItem}
            />
          ))}
        </div>
      </div>
    );
  },
);
