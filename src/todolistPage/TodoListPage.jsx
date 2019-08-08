// @flow

import React from 'react';
import TodoInput from './TodoInput';

const styles = {
  wrapper: {
    width: 500,
    height: 600,
    border: 'solid 1px #000',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    padding: 20,
  },
};

function TodoListPage() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>
        TodoList
      </h1>
      <TodoInput />
    </div>
  );
}

export default TodoListPage;
