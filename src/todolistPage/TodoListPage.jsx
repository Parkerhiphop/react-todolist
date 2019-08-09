// @flow

import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoListTitle from './TodoListTitle';

const styles = {
  wrapper: {
    width: 500,
    height: 600,
    border: 'solid 3px #777',
    borderRadius: 10,
  },
};

function TodoListPage() {
  
  const todos = ['完成TodoList', '用Class做一次', 'push到Github'];

  return (
    <div style={styles.wrapper}>
      <TodoListTitle
       todos={todos} />
      <TodoInput />
      <TodoList
       todos={todos} />
    </div>
  );
}

export default TodoListPage;
