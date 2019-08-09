// @flow

import React, {useState} from 'react';
import TodoList from './TodoList';

const styles = {
  wrapper: {
    width: 600,
    height: 680,
    border: 'solid 3px rgb(28, 193, 208)',
    borderRadius: 10,
  },
};

function TodoListPage() {
  
  const [todos, setTodos] = useState([]);

  return (
    <div style={styles.wrapper}>
      <TodoList
        todos={todos}
        setTodos={setTodos} />
    </div>
  );
}

export default TodoListPage;
