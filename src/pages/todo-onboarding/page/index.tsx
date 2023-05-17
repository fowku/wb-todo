import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { ConnectedTodo } from './_components/connected-todo';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoPage';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="todo-page">
    <div className={cn(`${BLOCK_NAME}__todo-wrapper`)}>
      <ConnectedTodo />
    </div>
  </div>
));
