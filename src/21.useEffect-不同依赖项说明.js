import { useState } from "react";
import { useEffect } from "react";

function App() {
  // 1. 没有依赖项 初始 + 组件更新
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('副作用函数执行了');
  // })
  // 2. 传入空数组依赖, 初始执行一次
  useEffect(() => {
    console.log('副作用函数执行了');
  }, [])
  // 3. 传入特定的依赖项 初始 + 依赖项变化时执行
  useEffect(() => {
    console.log('副作用函数执行了');
  }, [count])
  return (
    <div className="App">
      this is App
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  );
}

export default App;
