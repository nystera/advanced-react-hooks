// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`No action type for ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
