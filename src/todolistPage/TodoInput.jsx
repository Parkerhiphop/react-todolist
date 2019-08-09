// @flow

import React, {useState} from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    padding: '0px 0px 0px 10px',
    margin: '0px 20px 0px 0px',
    border: 'none',
  },
  button: {
    width: 60,
    height: 40,
    border: 'none',
    borderRadius: 5,
    fontSize: 18,
  }
}

type Props = {
  todos: Array,
};

function TodoInput({
  todos,
}: Props) {
  const [todo, setTodo] = useState('');

  return (
    <div style={styles.wrapper}>
      <input
        style={styles.input}
        type="text"
        value={todo}
        onKeyUp={(e) => {
          if (e.which === 13 || e.keyCode ===13) {
            setTodo({
              todos: todo,
            });
          }
        }}
        onChange={(e) => {setTodo(e.target.value)}}
        placeholder="你還有什麼沒做？" />
      <button
       style={styles.button}
       type="button">
       新增
      </button>
    </div>
  );
}

export default TodoInput;
