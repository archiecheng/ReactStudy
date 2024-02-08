// React.memo

import { useState, memo } from "react";

// 1. 验证一下默认的渲染机制 子跟着父一起渲染

// 2. memo 进行缓存 只有 props 发生变化时才会重新渲染

const MemoSon = memo(function Son() {
  console.log("我是子组件, 我重新渲染了");
  return <div>this is son</div>
})

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      {/* <Son /> */}
      <MemoSon />
    </div>
  );
}

export default App;
