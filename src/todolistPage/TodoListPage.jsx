// @flow

import React, {useState} from 'react';
import TodoList from './TodoList';

const styles = {
  wrapper: {
    width: 600,
    height: 680,
    border: 'solid 3px #777',
    borderRadius: 10,
  },
};

function TodoListPage() {
  
  const fakeTodos = ['完成TodoList', '用Class做一次', 'push到Github'];
  const [todos, setTodos] = useState([]);
  console.log('todos', todos);

  return (
    <div style={styles.wrapper}>
      <TodoList
        todos={todos}
        setTodos={setTodos} />
    </div>
  );
}

export default TodoListPage;
