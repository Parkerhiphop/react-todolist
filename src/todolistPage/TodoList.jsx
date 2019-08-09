// @flow

import React from 'react';

type Props = {
  todos: Array,
};

function TodoList({
  todos,
}: Props) {
    return (
    <div>
        {todos.map((t, i) => (
          <div
           key={i}>
            <h4>
                {t}
            </h4>
            <hr />
          </div>
        ))}
    </div>
    );
};

export default TodoList;