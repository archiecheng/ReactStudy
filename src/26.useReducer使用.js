// useReducer

import { useReducer } from "react";

// 1. 定义 reducer 函数，根据不同的 action 返回不同的状态
function reducer(state, action) {
  switch(action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'SET':
      return action.payload
    default:
      return state
  }
}
// 2. 组件中调用useReducer(reducer, 0) => [state, dispatch]

// 3. 调用dispatch({type:'INC'}) => 通知 reducer 产生一个新状态 使用这个新状态更新UI

function App() {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div className="App">
      <button onClick={() => dispatch({type:'DEC'})}>-</button>
      {state}
      <button onClick={() => dispatch({type:'INC'})}>+</button>
      <button onClick={() => dispatch({type:'SET', payload: 100})}>UPDATE</button>
    </div>
  );
}

export default App;
