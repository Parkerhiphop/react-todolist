// @flow

import React from 'react';

const styles = {
  title: {
    fontSize: 40,
    padding: 20,
  },
};

type Props = {
    todos: Array,
};

function TodoListTitle({
 todos,
}: Props) {
  return (
    <div>
      <h1 style={styles.title}>
        Todo({todos.length})
      </h1>
    </div>
  );
}

export default TodoListTitle;
