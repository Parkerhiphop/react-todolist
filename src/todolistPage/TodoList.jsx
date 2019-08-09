// @flow

import React, {useState} from 'react';

const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateRows: '100px 80px 500px',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  inputWrapper: {
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
    margin: '0px 30px 0px 0px',
    border: 'none',
  },
  button: {
    width: 60,
    height: 40,
    border: 'none',
    borderRadius: 5,
    fontSize: 18,
  },
  footer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0px 0px 0px',
  },
  taskWrapper: {
    border: 'solid 1px #777',
    borderRadius: 10,
    width: 400,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px 0px',
  },
  task: {
    fontSize: 15,
  },
}

type Props = {
  fakeTodos: Array,
  todos: Array,
  setTodos: Function,
};

function TodoList({
  fakeTodos,
  todos,
  setTodos,
}: Props) {

  const [test, setTest] = useState('');

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>
        Todo({todos.length})
      </h1>
      <div style={styles.inputWrapper}>
        <input
          style={styles.input}
          type="text"
          value={test}
          onKeyUp={(e) => {
            if (e.which === 13 || e.keyCode ===13) {
              todos.push(test);
              setTest('');
            }
            // console.log('push', todos.push('1'));
            console.log('todos', todos);
            console.log('value', e.target.value);
            console.log('test', test);
            // console.log('push', todos.push(test));
          }}
          onChange={(e) => {setTest(e.target.value)}}
          placeholder="你想什麼沒做？" />
        <button
        style={styles.button}
        type="button"
        onClick={() => {
          todos.push(test);
          setTest('');
        }}>
        新增
        </button>
      </div>
      <div style={styles.footer}>
        {todos.map((t, i) => (
          <div
           style={styles.taskWrapper}
           key={i}>
            <span style={styles.task}>
                {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
