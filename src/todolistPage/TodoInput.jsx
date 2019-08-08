// @flow

import React from 'react';

const styles = {
  input: {
    width: 300,
    height: 100,
  }
}

function TodoInput() {
  return (
    <div>
      <input
        style={styles.input}
        type="button"
        placeholder="你還有什麼沒做？" />
    </div>
  );
}

export default TodoInput;
