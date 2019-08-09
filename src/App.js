import React from 'react';
import TodoListPage from './todolistPage/TodoListPage';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

function App() {
  return (
    <div style={styles.wrapper}>
      <TodoListPage />
    </div>
  );
}

export default App;
