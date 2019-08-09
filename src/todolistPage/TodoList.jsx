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
    display: 'flex',
    justifyContent: 'center',
    color: 'rgb(28, 193, 208)',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#777',
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
    border: 'solid 1px rgb(28, 193, 208)',
    borderRadius: 10,
    width: 360,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '5px 0px',
    padding: '0px 20px',
  },
  finishTaskWrapper: {
    border: 'solid 1px rgb(28, 193, 208)',
  },
  task: {
    width: '100%',
    height: '100%',
    fontSize: 15,
    lineHeight: '30px',
    color: 'rgb(28, 193, 208)',
    display: 'flex',
    justifyContent: 'center',
  },
  finishTask: {
    color: 'rgb(221,202,126)',
  },
  deleteBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    width: 16,
    height: 16,
  },
  scroll: {
    height: '93%',
    overflow: 'auto',
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

  const [value, setvalue] = useState('');
  //把input value存在這，供enter和button操作
  const [finish, setFinsih] = useState(false);
  //勾勾待完成

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>
        Todo({todos.length})
      </h1>
      <div style={styles.inputWrapper}>
        <input
          style={styles.input}
          type="text"
          value={value}
          onKeyUp={(e) => {
            if (e.which === 13 || e.keyCode ===13) {
              todos.push(value); //把input的值加到陣列裡
              setvalue(''); //清空input的值
            }
          }}
          onChange={(e) => {setvalue(e.target.value)}}
          placeholder="你想做什麼？" />
        <button
          style={styles.button}
          type="button"
          onClick={() => {
            todos.push(value); //把input的值加到陣列裡
            setvalue(''); //清空input的值
          }}>
          新增
        </button>
      </div>
      <div style={styles.footer}>
        <div style={styles.scroll}>
          {todos.map((t, i) => (
            <div
            style={{
              ...styles.taskWrapper,
              ...(finish && todos.indexOf(t) ? styles.finishTaskWrapper : {}),
              }}
            key={i}>
                {/* <button
                  style={styles.deleteBtn}
                  type="button" >
                  //onClick變換task style功能待完成
                  //應該是要讓陣列多一個boolean，onClick時切換該布林值
                  <svg width="16" height="16">
                    <line
                        x1="16"
                        y1="0"
                        x2="6"
                        y2="16"
                        stroke={finish ? "rgb(221,202,126)" : "rgb(28, 193, 208)"}
                        strokeWidth="1" />
                    <line
                      x1="0"
                      y1="8"
                      x2="6"
                      y2="16"
                      stroke={finish ? "rgb(221,202,126)" : "rgb(28, 193, 208)"}
                      strokeWidth="1" />
                  </svg>
                </button> */}
              <span style={{
                ...styles.task,
                ...(finish ? styles.finishTask : {}),
                }}>
                  {t}
              </span>
              <div>
              <button
                  style={styles.deleteBtn}
                  type="button"
                  onClick={() => {
                    setTodos(todos.filter(d => d !== t));
                    //filter回傳比對過後的新陣列
                    //d：新陣列 ; t：被選到的那欄
                  }} >
                  <svg width="16" height="16">
                    <line
                      x1="0"
                      y1="0"
                      x2="12"
                      y2="12"
                      stroke={finish ? "rgb(221,202,126)" : "rgb(28, 193, 208)"}
                      strokeWidth="1" />
                    <line
                      x1="0"
                      y1="12"
                      x2="12"
                      y2="0"
                      stroke={finish ? "rgb(221,202,126)" : "rgb(28, 193, 208)"}
                      strokeWidth="1" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
