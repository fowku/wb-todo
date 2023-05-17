import {
  BasicCirclePlusIcon,
  ButtonLink,
  SimpleInput,
  SimpleInputChangeEventType,
} from '@wildberries/ui-kit';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { TaskType } from '@/pages/todo-onboarding/page/_types';
import styles from './index.module.scss';
import { TodoItemCard } from './_components/todo-item-card';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'TodoView';

type PropsType = {
  newItemValue: string;
  tasks: Array<TaskType>;
  onChangeNewTodoItemValue: (newValue: SimpleInputChangeEventType) => void;
};

export const TodoView = memo(
  ({ newItemValue, tasks, onChangeNewTodoItemValue }: PropsType) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__scrollable`)}>
          <div className={cn(`${BLOCK_NAME}__form`)}>
            <div className={cn(`${BLOCK_NAME}__input`)}>
              <SimpleInput
                id="add-todo-item"
                name="add-todo-item"
                onChange={onChangeNewTodoItemValue}
                placeholder="New TODO item"
                value={newItemValue}
              />
            </div>

            <ButtonLink
              disabled={newItemValue.length === 0}
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
                onChangeTask={console.error} // TODO: implement
                onClickRemove={console.error} // TODO: implement
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);
