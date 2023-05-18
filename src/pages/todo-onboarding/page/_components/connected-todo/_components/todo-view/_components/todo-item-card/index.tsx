import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import {
  ButtonLink,
  Checkbox,
  CheckboxChangeEventType,
  NavigationDeleteCircleIcon,
  NavigationEditIcon,
  NavigationTickCircleIcon,
  TextAreaChangeEventType,
  TextAreaInput,
} from '@wildberries/ui-kit';
import { TaskType } from '@/pages/todo-onboarding/page/_types';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'TodoItemCard';

type PropsType = {
  id: string;
  data: string;
  isCompleted: boolean;
  isLoading: boolean;
  onChangeTask: (task: TaskType) => void;
  onClickRemove: (id: string) => void;
};

const EditIcon = () => <NavigationEditIcon colorType="whiteColor" />;
const ApproveIcon = () => <NavigationTickCircleIcon colorType="whiteColor" />;
const RemoveIcon = () => <NavigationDeleteCircleIcon />;

export const TodoItemCard = memo(
  ({
    id,
    data,
    isCompleted,
    isLoading,
    onChangeTask,
    onClickRemove,
  }: PropsType) => {
    const [value, setValue] = useState(data);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
      setValue(data);
    }, [data]);

    const toggleEditing = () => {
      setIsEditing((state) => !state);
    };

    const handleChangeValue = (event: TextAreaChangeEventType) => {
      setValue(event.value);
    };

    const handleAcceptNewValue = () => {
      toggleEditing();
      onChangeTask({ id, isCompleted, data: value });
    };

    const handleToggleCheckbox = (event: CheckboxChangeEventType) => {
      onChangeTask({ id, data, isCompleted: event.value });
    };

    const handleClickRemove = () => {
      onClickRemove(id);
    };

    return (
      <div
        className={cn(BLOCK_NAME, {
          [`${BLOCK_NAME}--editing`]: isEditing,
          [`${BLOCK_NAME}--completed`]: isCompleted,
          [`${BLOCK_NAME}--loading`]: isLoading,
        })}
      >
        <div className={cn(`${BLOCK_NAME}__checkbox`)}>
          <Checkbox
            checked={isCompleted}
            id={id}
            name={id}
            onChange={handleToggleCheckbox}
          />
        </div>

        {isEditing ? (
          <div className={cn(`${BLOCK_NAME}__input`)}>
            <TextAreaInput
              id="edit-todo-item"
              name="edit-todo-item"
              nonResizable
              onChange={handleChangeValue}
              value={value}
            />
          </div>
        ) : (
          <div className={cn(`${BLOCK_NAME}__data`)}>{data}</div>
        )}

        <div className={cn(`${BLOCK_NAME}__actions`)}>
          <ButtonLink
            onClick={handleClickRemove}
            rightIcon={RemoveIcon}
            variant="remove"
          />

          {isEditing ? (
            <ButtonLink
              onClick={handleAcceptNewValue}
              rightIcon={ApproveIcon}
              variant="main"
            />
          ) : (
            <ButtonLink
              onClick={toggleEditing}
              rightIcon={EditIcon}
              variant="accent"
            />
          )}
        </div>
      </div>
    );
  },
);
