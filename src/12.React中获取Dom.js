// React中获取DOM
import { useRef } from 'react'
// 1. useRef生成ref对象, 绑定到dom标签身上
// 2. dom 可用时, ref.current 获取dom
// 渲染完毕之后, dom 生成之后才可用

function App() {
  const inputRef = useRef(null)
  const showDom = () => {
    console.log(inputRef)
    console.log(inputRef.current);
    console.dir(inputRef.current);
  }
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取DOM</button>
    </div>
  );
}

export default App;
